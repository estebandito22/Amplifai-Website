import os
import datetime
from django.db.models import Max
from django.shortcuts import render
from django.urls import reverse_lazy, reverse
from django.views.generic import TemplateView, DetailView, FormView
from django.views.generic.detail import SingleObjectMixin
from django.http import HttpResponseForbidden
from django.views import View
from django.utils import timezone
from . import models
from . import forms


class InfluencersDetailView(DetailView):
    template_name = "discover/influencers.html"
    context_object_name = 'user_details'
    model = models.User
    dm_thread_form = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        latest_influencers = self.object.influencer_set.all()

        context['max_followers_count'] = models.Influencer.objects.all(
            ).aggregate(Max('followers_count'))
        context['max_tweet_count'] = models.Influencer.objects.all(
            ).aggregate(Max('tweet_count'))
        context['max_influence_ratio'] = models.Influencer.objects.all(
            ).aggregate(Max('influence_ratio'))
        context['max_viral_ratio'] = models.Influencer.objects.all(
            ).aggregate(Max('viral_ratio'))
        context['max_engagement_ratio'] = models.Influencer.objects.all(
            ).aggregate(Max('engagement_ratio'))

        influencer_threads = [
            x.directmessagethread_set.filter(user__pk__contains=self.request.user.pk).first()
            for x in latest_influencers]

        context['latest_influencers'] = zip(latest_influencers, influencer_threads)

        if self.dm_thread_form is not None:
            context['dm_thread_form'] = self.dm_thread_form
        else:
            context['dm_thread_form'] = forms.DirectMessageThreadForm

        return context


class DirectMessageThreadCreateView(SingleObjectMixin, FormView):
    template_name = "discover/influencers.html"
    form_class = forms.DirectMessageThreadForm
    context_object_name = 'user_details'
    model = models.User
    dm_thread_form = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['latest_influencers'] = self.object.influencer_set.filter(
            created_at__range=["2019-08-01", "2019-10-30"])
        context['max_followers_count'] = models.Influencer.objects.all(
        ).aggregate(Max('followers_count'))
        context['max_tweet_count'] = models.Influencer.objects.all(
        ).aggregate(Max('tweet_count'))
        context['max_influence_ratio'] = models.Influencer.objects.all(
        ).aggregate(Max('influence_ratio'))
        context['max_viral_ratio'] = models.Influencer.objects.all(
        ).aggregate(Max('viral_ratio'))
        context['max_engagement_ratio'] = models.Influencer.objects.all(
        ).aggregate(Max('engagement_ratio'))

        if self.dm_thread_form is not None:
            context['dm_thread_form'] = self.dm_thread_form
        else:
            context['dm_thread_form'] = forms.DirectMessageThreadForm

        return context

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponseForbidden()
        self.object = self.get_object()
        return super().post(request, *args, **kwargs)

    def get_success_url(self):
        return os.path.join(reverse(
            'discover:direct_messages', kwargs={'pk': self.request.user.pk, 'thread_pk': self.thread_pk}))

    def form_valid(self, form):
        print("HERE!!")
        obj = form.save(commit=False)
        obj.user = self.request.user
        influencer_pk = self.request.POST.get('influencer')
        obj.influencer = models.Influencer.objects.get(pk=influencer_pk)
        obj.save()
        self.thread_pk = obj.pk
        print(self.thread_pk)
        return super().form_valid(form)

    def form_invalid(self, form):
        print(form.errors)
        return self.render_to_response(self.get_context_data())


class InfluencersView(View):

    def get(self, request, *args, **kwargs):
        view = InfluencersDetailView.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        view = DirectMessageThreadCreateView.as_view()
        return view(request, *args, **kwargs)


class DirectMessageCreateView(SingleObjectMixin, FormView):
    template_name = "discover/dm.html"
    form_class = forms.DirectMessageForm
    context_object_name = 'user_details'
    model = models.User
    thread_pk = None
    dm_form = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        direct_message_threads = self.object.directmessagethread_set.all()
        direct_message_threads_last_sent = [x.directmessage_set.aggregate(Max('sent_at'))['sent_at__max']
                                            for x in direct_message_threads]
        direct_message_threads, _ = zip(*sorted(zip(direct_message_threads, direct_message_threads_last_sent),
                                           key=lambda x: x[1], reverse=True))
        context['direct_message_threads'] = direct_message_threads
        context['thread_pk'] = int(self.thread_pk)

        if self.dm_form is not None:
            context['dm_form'] = self.dm_form
        else:
            context['dm_form'] = forms.DirectMessageForm

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponseForbidden()
        self.object = self.get_object()
        return super().post(request, *args, **kwargs)

    def get_success_url(self):
        return os.path.join(reverse(
            'discover:direct_messages', kwargs={'pk': self.request.user.pk, 'thread_pk': self.thread_pk}),
            '#chat-message')

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.user = self.request.user
        obj.thread = models.DirectMessageThread.objects.get(pk=self.thread_pk)
        obj.sent = True
        obj.sent_at = datetime.datetime.now()
        obj.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        return self.render_to_response(self.get_context_data(dm_form=form))


class DirectMessageThreadsView(DetailView):
    template_name = "discover/dm.html"
    context_object_name = 'user_details'
    model = models.User
    dm_form = None
    thread_pk = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        direct_message_threads = self.object.directmessagethread_set.all()
        direct_message_threads_last_sent = [x.directmessage_set.aggregate(Max('sent_at'))['sent_at__max']
                                            or timezone.now() for x in direct_message_threads]
        direct_message_threads, _ = zip(*sorted(zip(direct_message_threads, direct_message_threads_last_sent),
                                                key=lambda x: x[1], reverse=True))
        context['direct_message_threads'] = direct_message_threads
        context['thread_pk'] = int(self.thread_pk)

        if self.dm_form is not None:
            context['dm_form'] = self.dm_form
        else:
            context['dm_form'] = forms.DirectMessageForm

        return context


class DirectMessageView(View):

    def get(self, request, *args, **kwargs):
        view = DirectMessageThreadsView.as_view(thread_pk=kwargs['thread_pk'])
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        view = DirectMessageCreateView.as_view(thread_pk=kwargs['thread_pk'])
        return view(request, *args, **kwargs)
