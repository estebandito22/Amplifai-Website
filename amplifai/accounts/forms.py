from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Album, Song, UserProfile

from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _

AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg']
IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg']


class UserCreateForm(UserCreationForm):
    class Meta:
        fields = ("username", "email", "password1", "password2")
        model = get_user_model()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["username"].label = "Display Name"
        self.fields["email"].label = "Email Address"

        for fieldname in ['username', 'email', 'password1', 'password2']:
            self.fields[fieldname].help_text = None
            self.fields[fieldname].widget.attrs.update(
                {'class' : 'login-signup-field'})


class UserProfileForm(forms.ModelForm):
    class Meta:
        fields = ("image", "banner")
        model = UserProfile

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["image"].label = "Profile picture"
        self.fields["banner"].label = "Profile banner"

        for fieldname in ['image', 'banner']:
            self.fields[fieldname].help_text = None


class AlbumForm(forms.ModelForm):

    class Meta:
        model = Album
        fields = ['album_title', 'album_logo']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["album_title"].label = "Album title"
        self.fields['album_title'].widget.attrs.update(
            {'class': 'form__field',
             'placeholder': 'Album Title'})
        self.fields["album_logo"].widget.attrs.update(
            {'accept': "image/jpeg, image/jpg, image/png",
             'class': 'form__field'})


class SongForm(forms.ModelForm):

    class Meta:
        model = Song
        fields = ['song_title', 'audio_file']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["song_title"].label = "Song title"
        self.fields['audio_file'].widget.attrs.update(
            {'accept': "audio/mpeg, audio/mp3"})
        self.fields['song_title'].widget.attrs.update(
            {'class': 'form__field',
             'placeholder': 'Song Title'})
