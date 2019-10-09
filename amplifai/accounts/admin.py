from django.contrib import admin
from accounts.models import UserProfile, Album, Song

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Album)
admin.site.register(Song)
