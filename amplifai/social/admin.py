from django.contrib import admin
from .models import SocialPost, SocialPostPromotion, Hashtag

# Register your models here.
admin.site.register(SocialPost)
admin.site.register(SocialPostPromotion)
admin.site.register(Hashtag)
