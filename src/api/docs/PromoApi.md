# PizzaShopApi.PromoApi

All URIs are relative to *http://shop.divinepizza.ru*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPromotions**](PromoApi.md#getPromotions) | **GET** /v1/promo | 
[**offers**](PromoApi.md#offers) | **POST** /v1/promo/offers | 



## getPromotions

> GetPromotionsResponse getPromotions(opts)



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.PromoApi();
let opts = {
  'cityId': 56 // Number | 
};
apiInstance.getPromotions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**|  | [optional] 

### Return type

[**GetPromotionsResponse**](GetPromotionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## offers

> PromoOfferDataResponse offers(PromoOffersRequest)



### Example

```javascript
import PizzaShopApi from 'pizza_shop_api';

let apiInstance = new PizzaShopApi.PromoApi();
let PromoOffersRequest = new PizzaShopApi.PromoOffersRequest(); // PromoOffersRequest | 
apiInstance.offers(PromoOffersRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PromoOffersRequest** | [**PromoOffersRequest**](PromoOffersRequest.md)|  | 

### Return type

[**PromoOfferDataResponse**](PromoOfferDataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

