from django.db import models


class Local(models.Model):
    id_local= models.TextField(max_length=25)
    nombre= models.TextField(max_length=255)
    telefono= models.TextField(max_length=255)
    direccion= models.TextField(max_length=255)
    poblacion= models.TextField(max_length=255)
    provincia= models.TextField(max_length=255)
    latitud= models.TextField(max_length=255)
    longitud= models.TextField(max_length=255) 
    foto= models.TextField(max_length=255) 
    categoria= models.TextField(max_length=255) 