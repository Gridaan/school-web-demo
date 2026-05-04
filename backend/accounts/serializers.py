from django.contrib.auth.models import User
from rest_framework import serializers
from students.models import Student
from .models import UserProfile


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField()
    role = serializers.ChoiceField(choices=['student', 'teacher'])

    first_name = serializers.CharField()
    last_name = serializers.CharField()

    class_name = serializers.CharField(required=False)
    age = serializers.IntegerField(required=False)
    phone = serializers.CharField(required=False, allow_blank=True)

    def create(self, validated_data):
        role = validated_data['role']
        email = validated_data['email']
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']

        full_name = f"{first_name} {last_name}".strip()

        # 1. Create User
        user = User.objects.create_user(
            username=validated_data['username'],
            email=email,
            password=validated_data['password'],
            first_name=first_name,
            last_name=last_name
        )

        # 2. Create UserProfile
        UserProfile.objects.create(user=user, role=role)

        # 3. Handle Student logic
        if role == "student":
            student = Student.objects.filter(email=email).first()

            if student:
                if student.user:
                    raise serializers.ValidationError(
                        "This student is already linked to a user."
                    )

                # Link existing student
                student.user = user
                student.name = full_name  # update name
                student.save()

            else:
                # Create new student
                Student.objects.create(
                    user=user,
                    name=full_name,
                    class_name=validated_data.get('class_name', ''),
                    age=validated_data.get('age', 0),
                    email=email,
                    phone=validated_data.get('phone', '')
                )

        return user
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists")
        return value