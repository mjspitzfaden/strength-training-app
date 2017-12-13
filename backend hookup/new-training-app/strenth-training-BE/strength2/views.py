from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from strength2.models import WorkOutDataForm
from strength2.serializers import WorkoutSerializer
#from blog.serializers import PostSerializer
# Create your views here.

@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def WorkOutData (request):
    data = WorkOutDataForm.objects.all()
    serializer = WorkoutSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def WorkOutDataSave (request):
    contacts = request.data['contacts']
    for c in contact:
        serializer = WorkoutSerializer(c)
        if serializer.is_valid():
            serializer.save()

    return Response({'status': 'OK'})
