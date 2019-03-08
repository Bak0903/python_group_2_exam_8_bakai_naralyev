# Generated by Django 2.1.7 on 2019-03-08 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, max_length=2000, null=True)),
                ('poster', models.ImageField(blank=True, null=True, upload_to='posters')),
                ('release_date', models.DateField()),
                ('finish_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
