from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v/', include('api_v.urls', namespace='api_v'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)