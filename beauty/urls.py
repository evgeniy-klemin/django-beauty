from django.conf.urls import patterns, url
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from base.views import HomePageView


# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns(
    '',
    # Examples:
    # url(r'^$', 'beauty.views.home', name='home'),
    # url(r'^beauty/', include('beauty.foo.urls')),
    url(r'^$', HomePageView.as_view(), name='home'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)


if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
