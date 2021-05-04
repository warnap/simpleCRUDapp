import pytest

from .models import Category, Offer
from .factories import CategoryFactory, OfferFactory

headers = {"Content-Type": "application/json"}


@pytest.mark.django_db
class TestOffer:
    def test_create_offer(self, client) -> None:
        category: Category = CategoryFactory()
        assert Offer.objects.count() == 0

        offer = {'title': 'Offer1',
                 'description': 'Somethink desctription',
                 'price': 12.6,
                 'category': category.pk,
                 }

        response = client.post('/offers/0/', offer, headers=headers)

        assert response.status_code == 201, response.data
        assert Offer.objects.count() == 1

    def test_get_all_offers(self, client) -> None:
        category: Category = CategoryFactory()
        offer1: Offer = OfferFactory()
        offer2: Offer = OfferFactory()

        response = client.get('/offers/')

        assert response.status_code == 200, response.data

        assert Offer.objects.count() == 2

    def test_get_offer_detail(self, client) -> None:
        category: Category = CategoryFactory()
        offer1: Offer = OfferFactory()
        offer2: Offer = OfferFactory()

        response = client.get('/offers/{}/'.format(offer1.pk), format='json')

        assert response.status_code == 200


@pytest.mark.django_db
class TestCategory:
    def test_create_category(self, client) -> None:
        assert Category.objects.count() == 0

        response = client.post('/category/', {'name': 'Category1'}, format='json')

        assert response.status_code == 201, response.data
        assert Category.objects.count() == 1
        assert response.json() == {'id': 1, 'name': 'Category1'}

    def test_get_category_detail(self, client) -> None:
        assert Category.objects.count() == 0

        category = CategoryFactory()
        response = client.get('/category/{}/'.format(category.pk), format='json')

        assert Category.objects.count() == 1
        assert response.status_code == 200
        assert response.json() == {'id': 1, 'name': 'Category1'}

    def test_delete_category(self, client):
        assert Category.objects.count() == 0
        category = CategoryFactory()
        assert Category.objects.count() == 1

        response = client.delete('/category/{}/'.format(category.pk), format='json')

        assert response.status_code == 200 or 204

        assert Category.objects.count() == 0

    def test_get_all_categories(self, client) -> None:
        category1: Category = CategoryFactory()
        category2: Category = CategoryFactory()

        response = client.get('/category/')

        assert response.status_code == 200

