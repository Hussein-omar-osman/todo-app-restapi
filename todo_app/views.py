from django.shortcuts import render, redirect
from .models import Task
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
# Create your views here.

def home(request):
   todos = Task.objects.all()
   return render(request, 'index.html', {'todos':todos})

def loginPage(request):
   var = 'login_user'
   if request.method == 'POST':
      username = request.POST.get('username')
      password = request.POST.get('password')
      user = authenticate(username=username, password=password)
      if user:
         login(request, user)
         return redirect('home')
      else:
         messages.info(request, 'Creadintial Invalid')
         return render(request, 'login.html', {'var':var})
   return render(request, 'login.html', {'var':var})

def register(request):
   var = 'register'
   if request.method == 'POST':
      username = request.POST.get('username')
      email = request.POST.get('email')
      password = request.POST.get('password')
      password2 = request.POST.get('password2')
      print(username,email,password,password2)
      if password == password2:
         if User.objects.filter(email=email).exists():
            messages.info(request, 'Email is taken')
            return render(request, 'login.html', {'var':var})
         elif User.objects.filter(username=username).exists():
            messages.info(request, 'Username is taken')
            return render(request, 'login.html', {'var':var})
         else:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            # login the user
            login(request, user)
            
            messages.info(request, 'Signup successful')
            return redirect('home')
      else:
         messages.info(request, 'Password not match')
         return render(request, 'login.html', {'var':var})
   else:
      return render(request, 'login.html', {'var':var})
   
   
   
def logoutUser(request):
    logout(request)
    messages.success(request, 'Log-out Successfull.')
    return redirect('home')
 
