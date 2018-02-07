from django.db import models


class Categoria(models.Model):
    tipo= models.TextField(max_length=50)
    img= models.TextField() 