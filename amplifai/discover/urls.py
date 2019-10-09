from django.conf.urls import url
from . import views

app_name = 'discover'

urlpatterns = [
    url(r"^influencers/(?P<pk>\d+)/$", views.InfluencersView.as_view(), name='influencers'),
    # url(r"^hashtags/(?P<pk>\d+)/$", views.HashtagsView.as_view(), name='hashtags'),
    url(r"^dm/(?P<pk>\d+)/(?P<thread_pk>\d+)/$", views.DirectMessageView.as_view(), name='direct_messages'),
]
