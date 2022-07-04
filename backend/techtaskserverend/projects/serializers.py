from rest_framework import serializers
from .models import Product, SubCategory, SubProduct, SelectItems

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'productName']


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['id', 'subCategoryName', 'product']
        

class SubProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubProduct
        fields = ['id', 'subProductName', 'subCategory']
        
class SelectedItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SelectItems
        fields = ['id', 'products', 'subCategories', 'subProducts']