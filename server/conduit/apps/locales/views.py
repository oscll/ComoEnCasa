from rest_framework import viewsets
from conduit.apps.locales.serializers import LocalSerializer
from conduit.apps.locales.models import Local


class LocalesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    lookup_field = 'id_local'

