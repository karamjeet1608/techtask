from django.db import models

# Create your models here.

class Product(models.Model):
    '''This class defines Product'''
    productName = models.CharField(max_length=255)
    
    
    def __str__(self):
        return self.productName

class SubCategory(models.Model):
    '''This class defines Product's SubCategory'''
    
    subCategoryName = models.CharField(max_length=255)
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )
    
    def __str__(self):
        return self.subCategoryName
    

class SubProduct(models.Model):
    '''This class defines SubCategory's SubProduct'''
    
    subProductName = models.CharField(max_length=255)
    subCategory = models.ForeignKey(
        SubCategory,
        on_delete=models.CASCADE
    )

    
    def __str__(self):
        return self.subProductName

class SelectItems(models.Model):
    '''This class defines Product'''
    products = models.CharField(max_length=255)
    subCategories = models.CharField(max_length=255)
    subProducts = models.CharField(max_length=255)
    
    
    def __str__(self):
        return self.products