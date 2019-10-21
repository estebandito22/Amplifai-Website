from django.contrib import admin
from .models import Influencer, DirectMessage, DirectMessageThread, SocialTopic

# Register your models here.
admin.site.register(Influencer)
admin.site.register(DirectMessage)
admin.site.register(DirectMessageThread)
admin.site.register(SocialTopic)
