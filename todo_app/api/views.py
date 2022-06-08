from email import message
from django.db import router
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import *
# from django.contrib.auth.models import User
from .serializers import *