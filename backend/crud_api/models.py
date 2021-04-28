from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    ordering = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Offer(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category')

    def __str__(self):
        return self.title
