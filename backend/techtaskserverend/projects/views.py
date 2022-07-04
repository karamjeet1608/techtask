from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, SubCategory, SubProduct
from .serializers import ProductSerializer, SubCategorySerializer, SubProductSerializer, SelectedItemsSerializer

# Create your views here.

@api_view(['GET'])
def productList(request):
    if request.method == 'GET':
        product_list = Product.objects.all()
        serializer = ProductSerializer(product_list, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def subcategoryList(request):
    if request.method == 'GET':
        sub_category_list = SubCategory.objects.all()
        serializer = SubCategorySerializer(sub_category_list, many=True)
        return Response(serializer.data)
    
@api_view(['GET'])
def subcategoryListByProduct(request,id):
    #TODO HANDLE CONDITION WHEN PRODUCT ID IS NOT PRESENT
    if request.method == 'GET':
        sub_category_list_by_product = SubCategory.objects.filter(product=id)
        # SubCategory.objects.filter(product__in=[1, 4, 7])
        serializer = SubCategorySerializer(sub_category_list_by_product, many=True)
        return Response(serializer.data)
    

@api_view(['GET', 'POST'])
def subproductList(request):
    if request.method == 'GET':
        sub_product_list = SubProduct.objects.all()
        serializer = SubProductSerializer(sub_product_list, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = SubProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Dated Created'})
        return Response(serializer.errors) 
    

@api_view(['GET'])
def subproductListBySubcategory(request,id):
    if request.method == 'GET':
        sub_product_list = SubProduct.objects.filter(subCategory=id)
        serializer = SubProductSerializer(sub_product_list, many=True)
        return Response(serializer.data)
    
    
@api_view(['GET', 'POST'])
def selectedItemsList(request):
     
    if request.method == 'POST':
        serializer = SelectedItemsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Dated Created'})
        return Response(serializer.errors) 
    