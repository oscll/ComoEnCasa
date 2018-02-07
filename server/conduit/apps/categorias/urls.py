from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from .views import (
    CategoriasViewSet
)


#APIREST_grafica_DRF
cat_list = CategoriasViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
cat_detail = CategoriasViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

router = DefaultRouter(trailing_slash=False)
router.register(r'categorias', CategoriasViewSet)

urlpatterns = [
    url(r'^catlist/$', cat_list, name='cat_list'), #APIREST_grafica_DRF
    url(r'^catdetail/(?P<tipo>[0-9a-zA-Z_-]+)/$', cat_detail, name='cat_detail'), #APIREST_grafica_DRF
    
]
