from django.db import models
from django.contrib.auth.models import User
# from .. discover import models.Influencer as Influencer


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class SocialPost(models.Model):
    user = models.ForeignKey(
    'auth.User', on_delete=models.CASCADE)
    text = models.TextField(max_length=500)
    media = models.ImageField(upload_to=user_directory_path)
    twitter_engagements = models.PositiveIntegerField(default=0)
    instagram_engagements = models.PositiveIntegerField(default=0)
    facebook_engagements = models.PositiveIntegerField(default=0)
    twitter_followers = models.PositiveIntegerField(default=0)
    instagram_followers = models.PositiveIntegerField(default=0)
    facebook_followers = models.PositiveIntegerField(default=0)
    twitter_post = models.BooleanField(default=False)
    instagram_post = models.BooleanField(default=False)
    facebook_post = models.BooleanField(default=False)

    def __str__(self):
        return self.text


class SocialPostPromotion(models.Model):
    social_post = models.ForeignKey(SocialPost, on_delete=models.CASCADE)
    budget = models.FloatField(default=0)
    twitter_spend = models.FloatField(default=0)
    instagram_spend = models.FloatField(default=0)
    facebook_spend = models.FloatField(default=0)
    twitter_engagements = models.PositiveIntegerField(default=0)
    instagram_engagements = models.PositiveIntegerField(default=0)
    facebook_engagements = models.PositiveIntegerField(default=0)
    twitter_followers = models.PositiveIntegerField(default=0)
    instagram_followers = models.PositiveIntegerField(default=0)
    facebook_followers = models.PositiveIntegerField(default=0)

    def __str__(self):
        return "Engagements: {}\nFollowers: {}\nSpend: {}".format(
        self.twitter_engagements + self.instagram_engagements + self.facebook_engagements,
        self.twitter_followers + self.instagram_followers + self.facebook_followers,
        self.twitter_spend + self.instagram_spend + self.facebook_spend)


class Hashtag(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    hashtag = models.CharField(max_length=500)
    user_count = models.PositiveIntegerField()
    tweet_count = models.PositiveIntegerField()
    created_at = models.DateTimeField()

    def __str__(self):
        return self.hashtag
