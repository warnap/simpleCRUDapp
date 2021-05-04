from rest_framework import serializers
from .models import Category, Offer


class TimestampField(serializers.DateTimeField):
    def to_representation(self, value):
        return value.timestamp()


class JsTimestampField(serializers.DateTimeField):
    def to_representation(self, value):
        return round(value.timestamp() * 1000)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

    def create(self, validated_data):
        return Category.objects.create(**validated_data)


class OfferListSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    created_at = JsTimestampField(read_only=True)

    class Meta:
        model = Offer
        fields = ['id', 'title', 'price', 'created_at', 'category']


class OfferDetailSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    created_at = JsTimestampField(read_only=True)

    class Meta:
        model = Offer
        fields = ('id', 'title', 'description', 'price', 'created_at', 'category')
        depth = 1
