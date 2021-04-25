from rest_framework import viewsets, permissions, renderers
from .models import Category, Offer
from .serializers import OfferSerializer, CategorySerializer


class OfferViewSet(viewsets.ModelViewSet):
    """
    API endpoint that always Offers to be viewed or edited.
    """
    # renderer_classes = [renderers.JSONRenderer]

    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that always Categories to be viewed or edited.
    """
    # renderer_classes = [renderers.JSONRenderer]

    queryset = Category.objects.all().order_by('ordering')
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
