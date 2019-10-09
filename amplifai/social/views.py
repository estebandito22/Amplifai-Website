import os
from django.shortcuts import render
from django.urls import reverse_lazy, reverse
from django.http import HttpResponseRedirect
from django.views.generic import CreateView, DetailView, FormView
from django.views.generic.detail import SingleObjectMixin
from django.views import View
from django.db.models import F
from django.db.models import Max, Sum
from . import models
from . import forms


class SocialPostView(SingleObjectMixin, FormView):
    template_name = 'social/create_post.html'
    form_class = forms.SocialPostForm
    model = models.User
    context_object_name = 'user_details'
    social_post_form = None
    social_post_promotion_form = None

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponseForbidden()
        self.object = self.get_object()
        social_post_form = forms.SocialPostForm(self.request.POST, self.request.FILES, prefix='social_post_form')
        social_post_promotion_form = forms.SocialPostPromotionForm(self.request.POST, prefix='social_post_promotion_form')
        if social_post_form.is_valid() and social_post_promotion_form.is_valid():
            return self.form_valid(social_post_form, social_post_promotion_form)
        else:
            return self.form_invalid(social_post_form, social_post_promotion_form)
        # return super().post(request, *args, **kwargs)

    def get_success_url(self):
        return os.path.join(reverse(
        'social:promote',
        kwargs={'pk': self.request.user.pk}))

    def form_valid(self, social_post_form, social_post_promotion_form):
        obj1 = social_post_form.save(commit=False)
        obj1.user = self.request.user
        obj1.save()
        obj2 = social_post_promotion_form.save(commit=False)
        obj2.social_post = obj1
        obj2.save()
        return HttpResponseRedirect(self.get_success_url())

    def form_invalid(self, social_post_form, social_post_promotion_form):
        print(social_post_form.errors)
        print(social_post_promotion_form.errors)
        return self.render_to_response(
            self.get_context_data(social_post_form=social_post_form, social_post_promotion_form=social_post_promotion_form))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        latest_hashtags = self.object.hashtag_set.filter(
            created_at__range=["2019-08-01", "2020-10-130"]).order_by('-user_count')[:10]
        all_time_hashtags = self.object.hashtag_set.order_by('-user_count')[:10]
        context['latest_hashtags'] = latest_hashtags
        context['all_time_hashtags'] = all_time_hashtags
        context['latest_hashtags_form'] = forms.HashtagForm(
            form_choices=[(x, x) for i, x in enumerate(latest_hashtags)],
            field_name="latest_hashtags")
        context['all_time_hashtags_form'] = forms.HashtagForm(
            form_choices=[(x, x) for i, x in enumerate(all_time_hashtags)],
            field_name="all_time_hashtags")

        if self.social_post_form is not None:
            context['social_post_form'] = self.social_post_form
        else:
            context['social_post_form'] = forms.SocialPostForm
        context['social_post_form'].prefix = 'social_post_form'

        if self.social_post_promotion_form is not None:
            context['social_post_promotion_form'] = self.social_post_promotion_form
        else:
            context['social_post_promotion_form'] = forms.SocialPostPromotionForm
        context['social_post_promotion_form'].prefix = 'social_post_promotion_form'

        return context


class HashtagsView(DetailView):
    template_name = "social/create_post.html"
    context_object_name = 'user_details'
    model = models.User
    social_post_form = None
    social_post_promotion_form = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        latest_hashtags = self.object.hashtag_set.filter(
            created_at__range=["2019-08-01", "2020-09-10"]).order_by('-user_count')[:10]
        all_time_hashtags = self.object.hashtag_set.order_by('-user_count')[:10]
        context['latest_hashtags'] = latest_hashtags
        context['all_time_hashtags'] = all_time_hashtags
        context['latest_hashtags_form'] = forms.HashtagForm(
            form_choices=[(x, x) for i, x in enumerate(latest_hashtags)],
            field_name="latest_hashtags")
        context['all_time_hashtags_form'] = forms.HashtagForm(
            form_choices=[(x, x) for i, x in enumerate(all_time_hashtags)],
            field_name="all_time_hashtags")

        if self.social_post_form is not None:
            context['social_post_form'] = self.social_post_form
        else:
            context['social_post_form'] = forms.SocialPostForm
        context['social_post_form'].prefix = 'social_post_form'

        if self.social_post_promotion_form is not None:
            context['social_post_promotion_form'] = self.social_post_promotion_form
        else:
            context['social_post_promotion_form'] = forms.SocialPostPromotionForm
        context['social_post_promotion_form'].prefix = 'social_post_promotion_form'

        return context


class CreateSocialPostView(View):

    def get(self, request, *args, **kwargs):
        view = HashtagsView.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        view = SocialPostView.as_view()
        return view(request, *args, **kwargs)


class SocialPromotionDetailView(DetailView):
    template_name = "social/promote.html"
    context_object_name = 'user_details'
    model = models.User
    social_post_promotion_form = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        social_posts = self.object.socialpost_set.all()
        paid_followers = [x.socialpostpromotion_set.annotate(
            followers_sum=F('twitter_followers') + F('instagram_followers')
            + F('facebook_followers')).aggregate(
            Max('followers_sum'))['followers_sum__max'] or 0
            for x in social_posts]
        paid_engagements = [x.socialpostpromotion_set.annotate(
            engagements_sum=F('twitter_engagements')
            + F('instagram_engagements') + F('facebook_engagements')).aggregate(
            Max('engagements_sum'))['engagements_sum__max'] or 0
            for x in social_posts]
        total_spend = [x.socialpostpromotion_set.annotate(
            spend_sum=F('twitter_spend')
            + F('instagram_spend') + F('facebook_spend')).aggregate(
            Max('spend_sum'))['spend_sum__max'] or 0
            for x in social_posts]
        total_budget = [x.socialpostpromotion_set.aggregate(
            Sum('budget'))['budget__sum'] or 0 for x in social_posts]
        cpf = [round(x/y, 6) if y > 0 else 0 for x,y in zip(paid_followers, total_spend)]
        cpe = [round(x/y, 6) if y > 0 else 0 for x,y in zip(paid_engagements, total_spend)]

        context['max_followers'] = social_posts.annotate(
            followers_sum=F('twitter_followers') + F('instagram_followers')
            + F('facebook_followers')).aggregate(Max('followers_sum'))
        context['max_engagements'] = social_posts.annotate(
            engagements_sum=F('twitter_engagements')
            + F('instagram_engagements') + F('facebook_engagements')).aggregate(
            Max('engagements_sum'))

        context['max_paid_followers'] = max(paid_followers or [0])
        context['max_paid_engagements'] = max(paid_engagements or [0])
        context['max_total_spend'] = max(total_spend or [0])
        context['max_min_cpf'] = max(cpf or [0]) - min([x for x in cpf if x > 0] or [0])
        context['max_min_cpe'] = max(cpe or [0]) - min([x for x in cpe if x > 0] or [0])
        context['min_cpf'] = min([x for x in cpf if x > 0] or [0])
        context['min_cpe'] = min([x for x in cpe if x > 0] or [0])

        context['social_posts'] = zip(
            social_posts, paid_followers, paid_engagements, total_spend, cpf, cpe, total_budget)

        if self.social_post_promotion_form is not None:
            context['social_post_promotion_form'] = self.social_post_promotion_form
        else:
            context['social_post_promotion_form'] = forms.SocialPostPromotionForm

        return context


class SocialPromotionFormView(SingleObjectMixin, FormView):
    template_name = 'social/promote.html'
    form_class = forms.SocialPostPromotionForm
    model = models.User
    context_object_name = 'user_details'
    social_post_promotion_form = None

    def get_success_url(self):
        return os.path.join(reverse(
        'social:promote',
        kwargs={'pk': self.request.user.pk}))

    def form_valid(self, form):
        obj1 = social_post_form.save(commit=False)
        obj1.user = self.request.user
        obj1.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        return self.render_to_response(
            self.get_context_data(social_post_promotion_form=social_post_promotion_form))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        social_posts = self.object.socialpost_set.all()
        paid_followers = [x.socialpostpromotion_set.annotate(
            followers_sum=F('twitter_followers') + F('instagram_followers')
            + F('facebook_followers')).aggregate(
            Max('followers_sum'))['followers_sum__max'] or 0
            for x in social_posts]
        paid_engagements = [x.socialpostpromotion_set.annotate(
            engagements_sum=F('twitter_engagements')
            + F('instagram_engagements') + F('facebook_engagements')).aggregate(
            Max('engagements_sum'))['engagements_sum__max'] or 0
            for x in social_posts]
        total_spend = [x.socialpostpromotion_set.annotate(
            spend_sum=F('twitter_spend')
            + F('instagram_spend') + F('facebook_spend')).aggregate(
            Max('spend_sum'))['spend_sum__max'] or 0
            for x in social_posts]
        cpf = [round(x/y, 6) if y > 0 else 0 for x,y in zip(paid_followers, total_spend)]
        cpe = [round(x/y, 6) if y > 0 else 0 for x,y in zip(paid_engagements, total_spend)]

        context['max_followers'] = social_posts.annotate(
            followers_sum=F('twitter_followers') + F('instagram_followers')
            + F('facebook_followers')).aggregate(Max('followers_sum'))
        context['max_engagements'] = social_posts.annotate(
            engagements_sum=F('twitter_engagements')
            + F('instagram_engagements') + F('facebook_engagements')).aggregate(
            Max('engagements_sum'))

        context['max_paid_followers'] = max(paid_followers or [0])
        context['max_paid_engagements'] = max(paid_engagements or [0])
        context['max_total_spend'] = max(total_spend or [0])
        context['max_min_cpf'] = max(cpf or [0]) - min([x for x in cpf if x > 0] or [0])
        context['max_min_cpe'] = max(cpe or [0]) - min([x for x in cpe if x > 0] or [0])
        context['min_cpf'] = min([x for x in cpf if x > 0] or [0])
        context['min_cpe'] = min([x for x in cpe if x > 0] or [0])

        context['social_posts'] = zip(
            social_posts, paid_followers, paid_engagements, total_spend, cpf, cpe)

        if self.social_post_promotion_form is not None:
            context['social_post_promotion_form'] = self.social_post_promotion_form
        else:
            context['social_post_promotion_form'] = forms.SocialPostPromotionForm

        return context


class PromoteView(View):

    def get(self, request, *args, **kwargs):
        view = SocialPromotionDetailView.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        view = SocialPromotionFormView.as_view()
        return view(request, *args, **kwargs)
