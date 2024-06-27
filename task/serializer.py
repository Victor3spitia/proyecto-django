from rest_framework import serializers
from .models import tasks

class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
        fields = ("id", "title", "description", "done")
        #fields = "__all__" (para seleccionar todos los campos de la tabla)