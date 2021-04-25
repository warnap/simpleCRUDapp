from rest_framework import serializers
from .models import Category, Offer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

    def create(self, validated_data):
        return Category.objects.create(**validated_data)


class OfferSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Offer
        fields = ['id', 'title', 'description', 'price', 'created_at', 'category']
        # depth = 1

    def create(self, validated_data):
        return Offer.objects.create(**validated_data)
