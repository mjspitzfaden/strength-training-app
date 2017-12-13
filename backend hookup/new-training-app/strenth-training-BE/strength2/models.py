
# Create your models here.
from django.db import models
from django.conf import settings
# Create your models here.

class WorkOutDataForm(models.Model):
    name = models.CharField(max_length=50)
    key = models.SlugField(max_length=50, unique=True, primary_key=True)
    workout_id = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)
    weight = models.IntegerField(null=True)
    reps = models.IntegerField(null=True)
    distance = models.IntegerField(null=True)
    time = models.IntegerField(null=True)

    def __str__ (self):
        return "{} {}".format(self.person_id, self.workout_id)
