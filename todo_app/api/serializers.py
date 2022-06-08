from rest_framework.serializers import ModelSerializer
from todo_app.models import Task


class TaskSerializer(ModelSerializer):
  class Meta:
    model = Task
    fields = '__all__'
  def create(self, data):
     return Task.objects.create(**data)
  def update(self, instance, data):
     instance.body = data.get('body', instance.body)
     instance.done = data.get('done', instance.done)
     instance.created = data.get('created', instance.created)
     
     instance.save()
     return instance