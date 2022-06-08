from rest_framework.serializers import ModelSerializer
from todo_app.models import Task


class TaskSerializer(ModelSerializer):
  class Meta:
    model = Task
    fields = '__all__'
  def create(self, data):
     return Task.objects.create(**data)