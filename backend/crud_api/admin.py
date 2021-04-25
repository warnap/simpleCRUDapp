from django.contrib import admin
from .models import *


@admin.register(Category)
class CaregoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    pass
