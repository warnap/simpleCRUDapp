from django.conf.urls import include, re_path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet)

urlpatterns = [
    re_path(r'', include(router.urls)),
    re_path(r'^offers/$', OfferListViewSet.as_view(), name='offers_list'),
    re_path(r'^offers/(?P<pk>[^/.]+)/$', OfferDetailViewSet.as_view(), name='offers_detail'),
]
