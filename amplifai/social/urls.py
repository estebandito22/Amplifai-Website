from django.conf.urls import url
from . import views

app_name = 'social'

urlpatterns = [
    # url(r"^dm/(?P<user_pk>\d+)/(?P<influencer_pk>\d+)/$", views.CreateDirectMessageView.as_view(), name='direct_message'),
    url(r"^post/(?P<pk>\d+)/$", views.CreateSocialPostView.as_view(), name='create_post'),
    # url(r"^history/(?P<pk>\d+)/$", views.HistoryView.as_view(), name='history'),
    # url(r"^feed/(?P<pk>\d+)/$", views.FeedView.as_view(), name='feed'),
    url(r"^promote/(?P<pk>\d+)/$", views.PromoteView.as_view(), name='promote'),
    url(r"^promote/(?P<pk>\d+)/(?P<social_post_pk>\d+)$", views.SinglePromoteView.as_view(), name='promote_details'),
]
