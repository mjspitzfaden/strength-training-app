
# Create your models here.
from django.db import models
from django.conf import settings
# Create your models here.

class Person (models.Model):
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50, unique=True)
    person_name = models.CharField(max_length=50, unique=True)
    token = models.JSONField()
    person_email = models.CharField(max_length=50, unique=True)
    person_Id = models.ForeignKey(WorkOutDataForm primary_key=True)

    def __str__ (self):
        return self.person_id

class WorkOutDataForm(models.Model):
  person_id = models.ForeignKey(Person primary_key=True)
  name = models.CharField(max_length=50)
  key = models.SlugField(max_length=50, unique=True)
  workout_id = models.CharField(max_length=50)
  date = models.DateTimeField(auto_now_add=True)
  weight = models.IntegerField(null=True)
  reps = models.IntegerField(null=True)
  distance = models.IntegerField(null=True)
  time = models.IntegerField(null=True)

   def __str__ (self):
     return "{} {}".format(self.person_id, self.workout_id)
