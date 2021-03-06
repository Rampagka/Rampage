/**
 * Pizza Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import BonusProductData from './model/BonusProductData';
import BonusProducts from './model/BonusProducts';
import CartCheckoutResponse from './model/CartCheckoutResponse';
import CartCustomerRequest from './model/CartCustomerRequest';
import CartPizzaProductRequest from './model/CartPizzaProductRequest';
import CartSimpleProductRequest from './model/CartSimpleProductRequest';
import CashPayment from './model/CashPayment';
import CashPaymentAllOf from './model/CashPaymentAllOf';
import CashlessPayment from './model/CashlessPayment';
import CashlessPaymentAllOf from './model/CashlessPaymentAllOf';
import CategorizedProducts from './model/CategorizedProducts';
import CheckCartRequest from './model/CheckCartRequest';
import CheckCartResponse from './model/CheckCartResponse';
import CheckoutRequest from './model/CheckoutRequest';
import CityResponse from './model/CityResponse';
import DeliveryPricesResponse from './model/DeliveryPricesResponse';
import DeliveryThresholdPriceResponse from './model/DeliveryThresholdPriceResponse';
import ErrorCodeResponse from './model/ErrorCodeResponse';
import ErrorResponse from './model/ErrorResponse';
import GetAvailablePizzaIngredientsResponse from './model/GetAvailablePizzaIngredientsResponse';
import GetCitiesResponse from './model/GetCitiesResponse';
import GetCityInfoResponse from './model/GetCityInfoResponse';
import GetProductCatalogResponse from './model/GetProductCatalogResponse';
import GetPromotionsResponse from './model/GetPromotionsResponse';
import MoneyDiscount from './model/MoneyDiscount';
import Payment from './model/Payment';
import PercentDiscount from './model/PercentDiscount';
import Pizza from './model/Pizza';
import PizzaAllOf from './model/PizzaAllOf';
import PizzaBoard from './model/PizzaBoard';
import PizzaBonus from './model/PizzaBonus';
import PizzaBonusAllOf from './model/PizzaBonusAllOf';
import PizzaIngredient from './model/PizzaIngredient';
import PizzaIngredientPrice from './model/PizzaIngredientPrice';
import PizzaProductResponse from './model/PizzaProductResponse';
import PizzaVariation from './model/PizzaVariation';
import ProductCategoryResponse from './model/ProductCategoryResponse';
import ProductsRequest from './model/ProductsRequest';
import PromoCodeDto from './model/PromoCodeDto';
import PromoOfferDataResponse from './model/PromoOfferDataResponse';
import PromoOffersRequest from './model/PromoOffersRequest';
import PromotionDto from './model/PromotionDto';
import ServiceTag from './model/ServiceTag';
import Simple from './model/Simple';
import SimpleAllOf from './model/SimpleAllOf';
import SimpleBonus from './model/SimpleBonus';
import SimpleBonusAllOf from './model/SimpleBonusAllOf';
import SimpleProductResponse from './model/SimpleProductResponse';
import CartApi from './api/CartApi';
import CityApi from './api/CityApi';
import PizzaIngredientApi from './api/PizzaIngredientApi';
import ProductApi from './api/ProductApi';
import PromoApi from './api/PromoApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PizzaShopApi = require('index'); // See note below*.
* var xxxSvc = new PizzaShopApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PizzaShopApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PizzaShopApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PizzaShopApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BonusProductData model constructor.
     * @property {module:model/BonusProductData}
     */
    BonusProductData,

    /**
     * The BonusProducts model constructor.
     * @property {module:model/BonusProducts}
     */
    BonusProducts,

    /**
     * The CartCheckoutResponse model constructor.
     * @property {module:model/CartCheckoutResponse}
     */
    CartCheckoutResponse,

    /**
     * The CartCustomerRequest model constructor.
     * @property {module:model/CartCustomerRequest}
     */
    CartCustomerRequest,

    /**
     * The CartPizzaProductRequest model constructor.
     * @property {module:model/CartPizzaProductRequest}
     */
    CartPizzaProductRequest,

    /**
     * The CartSimpleProductRequest model constructor.
     * @property {module:model/CartSimpleProductRequest}
     */
    CartSimpleProductRequest,

    /**
     * The CashPayment model constructor.
     * @property {module:model/CashPayment}
     */
    CashPayment,

    /**
     * The CashPaymentAllOf model constructor.
     * @property {module:model/CashPaymentAllOf}
     */
    CashPaymentAllOf,

    /**
     * The CashlessPayment model constructor.
     * @property {module:model/CashlessPayment}
     */
    CashlessPayment,

    /**
     * The CashlessPaymentAllOf model constructor.
     * @property {module:model/CashlessPaymentAllOf}
     */
    CashlessPaymentAllOf,

    /**
     * The CategorizedProducts model constructor.
     * @property {module:model/CategorizedProducts}
     */
    CategorizedProducts,

    /**
     * The CheckCartRequest model constructor.
     * @property {module:model/CheckCartRequest}
     */
    CheckCartRequest,

    /**
     * The CheckCartResponse model constructor.
     * @property {module:model/CheckCartResponse}
     */
    CheckCartResponse,

    /**
     * The CheckoutRequest model constructor.
     * @property {module:model/CheckoutRequest}
     */
    CheckoutRequest,

    /**
     * The CityResponse model constructor.
     * @property {module:model/CityResponse}
     */
    CityResponse,

    /**
     * The DeliveryPricesResponse model constructor.
     * @property {module:model/DeliveryPricesResponse}
     */
    DeliveryPricesResponse,

    /**
     * The DeliveryThresholdPriceResponse model constructor.
     * @property {module:model/DeliveryThresholdPriceResponse}
     */
    DeliveryThresholdPriceResponse,

    /**
     * The ErrorCodeResponse model constructor.
     * @property {module:model/ErrorCodeResponse}
     */
    ErrorCodeResponse,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The GetAvailablePizzaIngredientsResponse model constructor.
     * @property {module:model/GetAvailablePizzaIngredientsResponse}
     */
    GetAvailablePizzaIngredientsResponse,

    /**
     * The GetCitiesResponse model constructor.
     * @property {module:model/GetCitiesResponse}
     */
    GetCitiesResponse,

    /**
     * The GetCityInfoResponse model constructor.
     * @property {module:model/GetCityInfoResponse}
     */
    GetCityInfoResponse,

    /**
     * The GetProductCatalogResponse model constructor.
     * @property {module:model/GetProductCatalogResponse}
     */
    GetProductCatalogResponse,

    /**
     * The GetPromotionsResponse model constructor.
     * @property {module:model/GetPromotionsResponse}
     */
    GetPromotionsResponse,

    /**
     * The MoneyDiscount model constructor.
     * @property {module:model/MoneyDiscount}
     */
    MoneyDiscount,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The PercentDiscount model constructor.
     * @property {module:model/PercentDiscount}
     */
    PercentDiscount,

    /**
     * The Pizza model constructor.
     * @property {module:model/Pizza}
     */
    Pizza,

    /**
     * The PizzaAllOf model constructor.
     * @property {module:model/PizzaAllOf}
     */
    PizzaAllOf,

    /**
     * The PizzaBoard model constructor.
     * @property {module:model/PizzaBoard}
     */
    PizzaBoard,

    /**
     * The PizzaBonus model constructor.
     * @property {module:model/PizzaBonus}
     */
    PizzaBonus,

    /**
     * The PizzaBonusAllOf model constructor.
     * @property {module:model/PizzaBonusAllOf}
     */
    PizzaBonusAllOf,

    /**
     * The PizzaIngredient model constructor.
     * @property {module:model/PizzaIngredient}
     */
    PizzaIngredient,

    /**
     * The PizzaIngredientPrice model constructor.
     * @property {module:model/PizzaIngredientPrice}
     */
    PizzaIngredientPrice,

    /**
     * The PizzaProductResponse model constructor.
     * @property {module:model/PizzaProductResponse}
     */
    PizzaProductResponse,

    /**
     * The PizzaVariation model constructor.
     * @property {module:model/PizzaVariation}
     */
    PizzaVariation,

    /**
     * The ProductCategoryResponse model constructor.
     * @property {module:model/ProductCategoryResponse}
     */
    ProductCategoryResponse,

    /**
     * The ProductsRequest model constructor.
     * @property {module:model/ProductsRequest}
     */
    ProductsRequest,

    /**
     * The PromoCodeDto model constructor.
     * @property {module:model/PromoCodeDto}
     */
    PromoCodeDto,

    /**
     * The PromoOfferDataResponse model constructor.
     * @property {module:model/PromoOfferDataResponse}
     */
    PromoOfferDataResponse,

    /**
     * The PromoOffersRequest model constructor.
     * @property {module:model/PromoOffersRequest}
     */
    PromoOffersRequest,

    /**
     * The PromotionDto model constructor.
     * @property {module:model/PromotionDto}
     */
    PromotionDto,

    /**
     * The ServiceTag model constructor.
     * @property {module:model/ServiceTag}
     */
    ServiceTag,

    /**
     * The Simple model constructor.
     * @property {module:model/Simple}
     */
    Simple,

    /**
     * The SimpleAllOf model constructor.
     * @property {module:model/SimpleAllOf}
     */
    SimpleAllOf,

    /**
     * The SimpleBonus model constructor.
     * @property {module:model/SimpleBonus}
     */
    SimpleBonus,

    /**
     * The SimpleBonusAllOf model constructor.
     * @property {module:model/SimpleBonusAllOf}
     */
    SimpleBonusAllOf,

    /**
     * The SimpleProductResponse model constructor.
     * @property {module:model/SimpleProductResponse}
     */
    SimpleProductResponse,

    /**
    * The CartApi service constructor.
    * @property {module:api/CartApi}
    */
    CartApi,

    /**
    * The CityApi service constructor.
    * @property {module:api/CityApi}
    */
    CityApi,

    /**
    * The PizzaIngredientApi service constructor.
    * @property {module:api/PizzaIngredientApi}
    */
    PizzaIngredientApi,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi,

    /**
    * The PromoApi service constructor.
    * @property {module:api/PromoApi}
    */
    PromoApi
};
