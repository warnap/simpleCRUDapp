from django.contrib import admin
from django.conf.urls import url, include

# from backend.crud_api.urls import router

# from django.urls import path

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url('', include(('crud_api.urls', 'crud_api'), namespace='crud_api')),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
