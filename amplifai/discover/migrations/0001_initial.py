# Generated by Django 2.2.1 on 2019-09-28 04:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Influencer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=500)),
                ('last_name', models.CharField(blank=True, max_length=500)),
                ('twitter_handle', models.CharField(blank=True, max_length=500)),
                ('instagram_handle', models.CharField(blank=True, max_length=500)),
                ('facebook_handle', models.CharField(blank=True, max_length=500)),
                ('city', models.CharField(blank=True, max_length=500)),
                ('state', models.CharField(blank=True, max_length=500)),
                ('country', models.CharField(blank=True, max_length=500)),
                ('followers_count', models.PositiveIntegerField(default=0)),
                ('tweet_count', models.PositiveIntegerField(default=0)),
                ('influence_ratio', models.FloatField(default=0)),
                ('viral_ratio', models.FloatField(default=0)),
                ('engagement_ratio', models.FloatField(default=0)),
                ('twitter_profile_picture', models.ImageField(blank=True, upload_to='')),
                ('created_at', models.DateTimeField(default=0)),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DirectMessageThread',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('influencer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='discover.Influencer')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DirectMessage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=500)),
                ('media', models.FileField(blank=True, upload_to='')),
                ('sent', models.BooleanField()),
                ('thread', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='discover.DirectMessageThread')),
            ],
        ),
    ]
