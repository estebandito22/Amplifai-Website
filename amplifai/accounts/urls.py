from django.conf.urls import url
from django.contrib.auth import views as auth_views
from . import views

app_name = 'accounts'

urlpatterns = [
    url(r"login/$", auth_views.LoginView.as_view(template_name="registration/login.html"),name='login'),
    url(r"logout/$", auth_views.LogoutView.as_view(), name="logout"),
    url(r"signup/$", views.SignUp.as_view(), name="signup"),
    url(r"^profile/(?P<pk>\d+)/$", views.UserProfileView.as_view(), name="profile"),
    url(r'analyze_song/$', views.analyze_song, name='analyze_song'),
    url(r'delete_song/$', views.delete_song, name='delete_song'),
    url(r'delete_album/$', views.delete_album, name='delete_album'),
]
