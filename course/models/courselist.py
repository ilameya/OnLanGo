from django.db import models

class CourseList(models.Model):
    c_name = models.CharField(max_length=30)
    description = models.CharField(max_length=200, default='')