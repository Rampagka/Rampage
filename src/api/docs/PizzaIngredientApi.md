# PizzaShopApi.PizzaIngredientApi

All URIs are relative to *http://shop.divinepizza.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCityAvailableIngredients**](PizzaIngredientApi.md#getCityAvailableIngredients) | **GET** /v1/pizza/ingredient/city/{cityId} | 



## getCityAvailableIngredients

> GetAvailablePizzaIngredientsResponse getCityAvailableIngredients(cityId)



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.PizzaIngredientApi();
let cityId = 56; // Number | 
apiInstance.getCityAvailableIngredients(cityId).then((data) => {
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

[**GetAvailablePizzaIngredientsResponse**](GetAvailablePizzaIngredientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

