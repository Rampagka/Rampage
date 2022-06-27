# PizzaShopApi.ProductApi

All URIs are relative to *http://shop.divinepizza.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalog**](ProductApi.md#getCatalog) | **GET** /v1/product/catalog | 



## getCatalog

> GetProductCatalogResponse getCatalog(cityId)



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.ProductApi();
let cityId = 56; // Number | 
apiInstance.getCatalog(cityId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**|  | 

### Return type

[**GetProductCatalogResponse**](GetProductCatalogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

