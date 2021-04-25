from django.conf.urls import url, include
from rest_framework import routers
from .views import OfferViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'offers', OfferViewSet)
router.register(r'category', CategoryViewSet)

urlpatterns = [
    url(r'', include(router.urls)),
]
