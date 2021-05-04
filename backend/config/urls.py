from django.contrib import admin
from django.conf.urls import re_path, include

# from backend.crud_api.urls import router

# from django.urls import path

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path('', include(('crud_api.urls', 'crud_api'), namespace='crud_api')),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
