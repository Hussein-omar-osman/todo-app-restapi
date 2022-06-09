from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_links),
    path('todos/', views.get_todos),
    path('users/', views.get_users),
    path('create/', views.create_todo),
    path('get/<pk>', views.single_todo),
    path('user/<pk>', views.single_user),
    path('update/<pk>', views.single_todo),
    path('delete/<pk>', views.single_todo),
    
]