from webapp.models import Task
from api_v.serializers import TaskSerializer
from rest_framework import viewsets


class NoAuthModelViewSet(viewsets.ModelViewSet):
    authentication_classes = []


class TaskViewSet(NoAuthModelViewSet):
    queryset = Task.objects.all().order_by('due_date')
    serializer_class = TaskSerializer


