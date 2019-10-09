from django.db import models
from django.contrib.auth.models import User


class Influencer(models.Model):
    users = models.ManyToManyField('auth.User')
    first_name = models.CharField(max_length=500, blank=True)
    last_name = models.CharField(max_length=500, blank=True)
    twitter_handle = models.CharField(max_length=500, blank=True)
    instagram_handle = models.CharField(max_length=500, blank=True)
    facebook_handle = models.CharField(max_length=500, blank=True)
    city = models.CharField(max_length=500, blank=True)
    state = models.CharField(max_length=500, blank=True)
    country = models.CharField(max_length=500, blank=True)
    followers_count = models.PositiveIntegerField(default=0)
    tweet_count = models.PositiveIntegerField(default=0)
    influence_ratio = models.FloatField(default=0)
    viral_ratio = models.FloatField(default=0)
    engagement_ratio = models.FloatField(default=0)
    twitter_profile_picture = models.ImageField(blank=True)
    created_at = models.DateTimeField(default=0)

    def __str__(self):
        return self.twitter_handle


class DirectMessageThread(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    influencer = models.ForeignKey(Influencer, on_delete=models.CASCADE)

    def __str__(self):
        return "Message thread between {} and {}".format(self.user, self.influencer)


class DirectMessage(models.Model):
    thread = models.ForeignKey(DirectMessageThread, on_delete=models.CASCADE)
    text = models.TextField(max_length=500)
    media = models.FileField(blank=True)
    sent = models.BooleanField()
    sent_at = models.DateTimeField(default='1986-04-22 00:00:00')

    def __str__(self):
        return self.text
