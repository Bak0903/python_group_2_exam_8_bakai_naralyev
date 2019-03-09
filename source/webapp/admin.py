from django.contrib import admin
from webapp.models import Task


class TaskAdmin(admin.ModelAdmin):
    ordering = ['due_date']
    search_fields = ['summary', 'description']


admin.site.register(Task, TaskAdmin)

