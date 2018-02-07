from conduit.apps.locales.models import Local
from rest_framework import serializers


class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = ('id_local','nombre','telefono','direccion','poblacion','provincia','latitud','longitud','foto','categoria')
