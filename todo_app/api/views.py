from email import message
from django.db import router
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Task
# from django.contrib.auth.models import User
from .serializers import TaskSerializer


@api_view(['GET'])
def get_links(request):
   endpoints = {
    'all':'/api/',
    'all_todos':'/api/todos'
   }
   return Response(endpoints)
  
@api_view(['GET'])
def get_todos(request):
   todos = Task.objects.all()
   serializer = TaskSerializer(todos, many=True)
   return Response(serializer.data)
  
  
@api_view(['POST'])
def create_todo(request):
   serializer = TaskSerializer(data=request.data)
   # print(request.body)
   if serializer.is_valid():
     serializer.save()
     return Response(serializer.data)
   else:
     return Response(serializer.errors)
    
   