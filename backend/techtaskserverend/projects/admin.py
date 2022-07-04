from django.contrib import admin
from .models import Product, SubCategory, SubProduct, SelectItems

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display =['id', 'productName']
    
@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display =['id', 'subCategoryName','product']
    
@admin.register(SubProduct)
class SubProductAdmin(admin.ModelAdmin):
    list_display =['id', 'subProductName', 'subCategory']
    

@admin.register(SelectItems)
class SubProductAdmin(admin.ModelAdmin):
    list_display =['id', 'products', 'subCategories', 'subProducts']

