# PizzaShopApi.CityApi

All URIs are relative to *http://shop.divinepizza.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCities**](CityApi.md#getCities) | **GET** /v1/city | 
[**getCityInfo**](CityApi.md#getCityInfo) | **GET** /v1/city/{cityId}/info | 



## getCities

> GetCitiesResponse getCities()



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.CityApi();
apiInstance.getCities().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCitiesResponse**](GetCitiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCityInfo

> GetCityInfoResponse getCityInfo(cityId)



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.CityApi();
let cityId = 56; // Number | 
apiInstance.getCityInfo(cityId).then((data) => {
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

[**GetCityInfoResponse**](GetCityInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

