from django.contrib import auth
from django.db import models
from django.utils import timezone

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.urls import reverse

from django.core.exceptions import ValidationError

AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg']
IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg']

def validate_image(value):
    filename = str(value)
    filetype = filename.split('.')[1]
    if filetype not in IMAGE_FILE_TYPES:
        raise ValidationError("Image must be .png, .jpg or .jpeg")
    else:
        return value

def validate_audio(value):
    filename = str(value)
    filetype = filename.split('.')[1]
    if filetype not in AUDIO_FILE_TYPES:
        raise ValidationError("Audio file must be .wav, .mp3 or .ogg")
    else:
        return value

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to=user_directory_path, blank=True, validators=[validate_image])
    banner = models.ImageField(
        upload_to=user_directory_path, blank=True, validators=[validate_image])

    def __str__(self):
        return self.user.username

def create_profile(sender, **kwargs):
    if kwargs['created']:
        user_profile = UserProfile.objects.create(user=kwargs['instance'])

post_save.connect(create_profile, sender=User)


class Album(models.Model):
    user = models.ForeignKey(
        'auth.User', related_name='albums', on_delete=models.CASCADE)
    album_title = models.CharField(max_length=500)
    album_logo = models.FileField(upload_to=user_directory_path, validators=[validate_image])
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.album_title + ' - ' + self.user.username


class Song(models.Model):
    user = models.ForeignKey(
        'auth.User', related_name='songs', on_delete=models.CASCADE, default=1)
    album = models.ForeignKey(
        Album, related_name='songs', on_delete=models.CASCADE)
    song_title = models.CharField(max_length=250)
    audio_file = models.FileField(upload_to=user_directory_path, validators=[validate_audio])
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.song_title
