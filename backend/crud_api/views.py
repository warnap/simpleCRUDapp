from rest_framework import viewsets, permissions, mixins, generics
from .models import Category, Offer
from .serializers import OfferListSerializer, OfferDetailSerializer, CategorySerializer


class OfferDetailViewSet(mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.CreateModelMixin,
                         mixins.DestroyModelMixin,
                         generics.GenericAPIView):
    """
    API endpoint that always Offer detail to be viewed, edited or delete.
    """
    queryset = Offer.objects.all()
    serializer_class = OfferDetailSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def post(self, request, pk):
        return self.create(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)


class OfferListViewSet(mixins.ListModelMixin,
                       generics.GenericAPIView):
    """
    API endpoint that always Offers to be viewed.
    """

    queryset = Offer.objects.all()
    serializer_class = OfferListSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return self.list(request)


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that always Categories to be viewed or edited.
    """
    queryset = Category.objects.all().order_by('ordering')
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
