from django.contrib import admin
from .models import Influencer, DirectMessage, DirectMessageThread

# Register your models here.
admin.site.register(Influencer)
admin.site.register(DirectMessage)
admin.site.register(DirectMessageThread)
