from django.db import router
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
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
   print(request.data)
   # return Response(request.data)
   # print(request.body)
   if serializer.is_valid():
     serializer.save()
     return Response(serializer.data)
   else:
     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET', 'PUT', 'DELETE'])
def single_todo(request, pk):
   
   try:
     todo = Task.objects.get(id=pk)
   except:
      return Response({'error':'not found'}, status=status.HTTP_404_NOT_FOUND)
   if request.method == 'GET':
     serializer = TaskSerializer(todo)
     return Response(serializer.data)
   if request.method == 'PUT':
     serializer = TaskSerializer(instance=todo, data=request.data)
     if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
     else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   if request.method == 'DELETE':
     # body = todo.body
     todo.delete()
     return Response({'delete':'success'}, status=status.HTTP_204_NO_CONTENT)
     
     
    
   