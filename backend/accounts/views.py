from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterSerializer
from .models import UserProfile
from students.models import Student


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """
    Admin login endpoint.
    Accepts: username, password
    Returns: access token, refresh token, user info
    """
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response(
            {'error': 'Username and password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = authenticate(username=username, password=password)

    if user is None:
        return Response(
            {'error': 'Invalid credentials'},
            status=status.HTTP_401_UNAUTHORIZED
        )
    
    try:
        profile = UserProfile.objects.get(user=user)
        role = profile.role
    except UserProfile.DoesNotExist:
        role = None  # fallback (shouldn't happen if register flow is correct)

    # ✅ Get student_id if role is student
    student_id = None
    if role == 'student':
        try:
            student = Student.objects.get(user=user)
            student_id = student.id
        except Student.DoesNotExist:
            student_id = None  # fallback safety

    refresh = RefreshToken.for_user(user)
    return Response({
        'access': str(refresh.access_token),
        'refresh': str(refresh),
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'role': role,
            "student_id": student_id
        }
    }, status=status.HTTP_200_OK)



@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

        return Response(
            {
                "message": "User registered successfully",
                "username": user.username,
                "role": user.userprofile.role
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

