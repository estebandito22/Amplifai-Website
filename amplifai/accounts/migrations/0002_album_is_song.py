# Generated by Django 2.2.1 on 2019-10-09 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='is_song',
            field=models.BooleanField(default=False),
        ),
    ]
