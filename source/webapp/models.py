from django.db import models


class Task(models.Model):
    STATUS_NEW = 'очередь'
    STATUS_BOUGHT_OUT = 'в работе'
    STATUS_CANCELED = 'сделано'

    STATUS_CHOICES = (
        (STATUS_NEW, 'очередь'),
        (STATUS_BOUGHT_OUT, 'в работе'),
        (STATUS_CANCELED, 'сделано')
    )

    summary = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    due_date = models.DateTimeField()
    status = models.CharField(max_length=255, default=STATUS_NEW, choices=STATUS_CHOICES)
    time_planned = models.DecimalField(max_digits=10, decimal_places=1, null=True, blank=True)

    def __str__(self):
        return '%s. Выполнить до %s' % (self.summary, self.due_date)