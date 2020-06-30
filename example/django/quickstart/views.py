from django.contrib.auth.models import User, Group
from rest_framework import viewsets, filters
from quickstart.serializers import UserSerializer, GroupSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    page_size_query_param = 'page_size'
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id', 'username', 'email']


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
