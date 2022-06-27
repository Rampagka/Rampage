# PizzaShopApi.CartApi

All URIs are relative to *http://shop.divinepizza.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check**](CartApi.md#check) | **POST** /v1/cart/check | 
[**checkout**](CartApi.md#checkout) | **POST** /v1/cart/checkout | 



## check

> CheckCartResponse check(CheckCartRequest)



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.CartApi();
let CheckCartRequest = new PizzaShopApi.CheckCartRequest(); // CheckCartRequest | 
apiInstance.check(CheckCartRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CheckCartRequest** | [**CheckCartRequest**](CheckCartRequest.md)|  | 

### Return type

[**CheckCartResponse**](CheckCartResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## checkout

> CartCheckoutResponse checkout(CheckoutRequest)



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.CartApi();
let CheckoutRequest = new PizzaShopApi.CheckoutRequest(); // CheckoutRequest | 
apiInstance.checkout(CheckoutRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CheckoutRequest** | [**CheckoutRequest**](CheckoutRequest.md)|  | 

### Return type

[**CartCheckoutResponse**](CartCheckoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

