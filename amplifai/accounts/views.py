from django.contrib.auth import login, logout
from django.urls import reverse_lazy, reverse
from django.views.generic import (CreateView, UpdateView, DeleteView,
    ListView, DetailView, FormView)
from django.views.generic.detail import SingleObjectMixin
from django.views import View

from django.http import HttpResponseRedirect
from django.http import HttpResponse, HttpResponseForbidden

from . import forms
from . import models

import json
import os

from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.db.models import Q
from .forms import AlbumForm, SongForm, UserProfileForm
from .models import Album, Song


from django.http import JsonResponse

AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg']
IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg']


class SignUp(CreateView):
    form_class = forms.UserCreateForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"


class UserDetailView(DetailView):
    template_name = 'accounts/profile.html'
    context_object_name = 'user_details'
    model = models.UserProfile
    album_form = None
    song_form = None
    album_pk = None
    user_form = None

    def get_context_data(self, **kwargs):
        context = super(UserDetailView, self).get_context_data(**kwargs)

        if self.album_form is not None:
            context['album_form'] = self.album_form
        else:
            context['album_form'] = forms.AlbumForm
        if self.song_form is not None:
            context['song_form'] = self.song_form
        else:
            context['song_form'] = forms.SongForm

        if self.album_pk is not None:
            context['song_form_error_album_pk'] = self.album_pk

        if self.user_form is not None:
            context['user_form'] = self.user_form
        else:
            context['user_form'] = forms.UserProfileForm

        return context


class AlbumCreateView(SingleObjectMixin, FormView):
    template_name = 'accounts/profile.html'
    form_class = forms.AlbumForm
    model = models.UserProfile

    context_object_name = 'user_details'

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponseForbidden()
        self.object = self.get_object()
        return super().post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse(
        'accounts:profile',
        kwargs={'pk': self.request.user.pk})

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.user = self.request.user
        obj.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        print(form.errors)
        return self.render_to_response(
            self.get_context_data(album_form=form,
            album_form_error=True))


class SongCreateView(SingleObjectMixin, FormView):
    template_name = 'accounts/profile.html'
    form_class = forms.SongForm
    model = models.UserProfile

    context_object_name = 'user_details'

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponseForbidden()
        self.object = self.get_object()
        return super().post(request, *args, **kwargs)

    def get_success_url(self):
        return os.path.join(reverse(
        'accounts:profile',
        kwargs={'pk': self.request.user.pk}), '#album-card-{}'.format(self.album_pk))

    def form_valid(self, form):
        self.album_pk = int(self.request.POST.get('album-pk'))
        obj = form.save(commit=False)
        obj.user = self.request.user
        obj.album = forms.Album.objects.get(pk=self.album_pk)
        obj.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        self.album_pk = int(self.request.POST.get('album-pk'))
        return self.render_to_response(
            self.get_context_data(song_form=form,
            song_form_error_album_pk=self.album_pk))


class UserProfileUpdateView(UpdateView):
    template_name = 'accounts/profile.html'
    form_class = forms.UserProfileForm
    model = models.UserProfile

    context_object_name = 'user_details'

    def get_success_url(self):
        return os.path.join(reverse(
        'accounts:profile',
        kwargs={'pk': self.request.user.pk}))

    def form_invalid(self, form):
        return self.render_to_response(
            self.get_context_data(user_form=form))


class UserProfileView(View):

    def get(self, request, *args, **kwargs):
        view = UserDetailView.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        if request.POST.get('post-type') == 'album':
            view = AlbumCreateView.as_view()
        elif request.POST.get('post-type') == 'song':
            view = SongCreateView.as_view()
        elif request.POST.get('post-type') == 'user':
            view = UserProfileUpdateView.as_view()
        return view(request, *args, **kwargs)


def analyze_song(request):
    if request.method == 'POST':
        song_pk = request.POST.get('song_pk')
        # yes_analyze = request.POST.get('yes_analyze')

        song = forms.Song.objects.get(pk=int(song_pk))
        song.is_favorite = not song.is_favorite
        song.save()

        response_data = {}
        response_data['song_pk'] = song.pk
        response_data['yes_analyze'] = song.is_favorite

        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )
    else:
        return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json"
        )


def delete_song(request):
    if request.method == 'POST':
        song_pk = request.POST.get('song_pk')

        song = forms.Song.objects.get(pk=int(song_pk))
        song.delete()

        response_data = {}
        response_data['song_pk'] = song.pk

        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )
    else:
        return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json"
        )


def delete_album(request):
    if request.method == 'POST':
        album_pk = request.POST.get('album_pk')

        print(album_pk)

        album = forms.Album.objects.get(pk=int(album_pk))
        album.delete()

        response_data = {}
        response_data['album_pk'] = album.pk

        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )
    else:
        return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json"
        )
