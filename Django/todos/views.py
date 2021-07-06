from django.shortcuts import render, HttpResponse
from .services import get_todos

# Create your views here.
def index (request):
    context = {
        'todos': get_todos()
    }
    print(context)
    return render(request, "todos/index.html", context)