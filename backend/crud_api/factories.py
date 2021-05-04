import factory
from factory.django import DjangoModelFactory
from .models import Category, Offer


class CategoryFactory(DjangoModelFactory):
    class Meta:
        model = Category

    name = 'Category1'


class OfferFactory(DjangoModelFactory):
    class Meta:
        model = Offer

    title = 'Offer1'
    description = 'Offer1 description'
    price = 12.5
    category = factory.SubFactory(CategoryFactory)
