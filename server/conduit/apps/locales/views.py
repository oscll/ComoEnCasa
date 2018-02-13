from rest_framework import viewsets
from conduit.apps.locales.serializers import LocalSerializer
from conduit.apps.locales.models import Local
from rest_framework import generics


class LocalesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    lookup_field = 'id_local'
    


class LocalCategoryList(generics.ListCreateAPIView):
    """ List of all events by the same category """
    serializer_class = LocalSerializer

    def get_queryset(self):
        categoria = self.kwargs['categoria']
        return Local.objects.filter(categoria=categoria)

