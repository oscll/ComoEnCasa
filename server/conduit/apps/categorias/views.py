from rest_framework import viewsets
from conduit.apps.categorias.serializers import CategoriaSerializer
from conduit.apps.categorias.models import Categoria


class CategoriasViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    lookup_field = 'tipo'

