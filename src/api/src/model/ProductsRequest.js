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

import ApiClient from '../ApiClient';
import CartPizzaProductRequest from './CartPizzaProductRequest';
import CartSimpleProductRequest from './CartSimpleProductRequest';

/**
 * The ProductsRequest model module.
 * @module model/ProductsRequest
 * @version 1.0
 */
class ProductsRequest {
    /**
     * Constructs a new <code>ProductsRequest</code>.
     * @alias module:model/ProductsRequest
     * @param pizza {Array.<module:model/CartPizzaProductRequest>} 
     * @param simple {Array.<module:model/CartSimpleProductRequest>} 
     */
    constructor(pizza, simple) { 
        
        ProductsRequest.initialize(this, pizza, simple);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pizza, simple) { 
        obj['pizza'] = pizza;
        obj['simple'] = simple;
    }

    /**
     * Constructs a <code>ProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductsRequest} obj Optional instance to populate.
     * @return {module:model/ProductsRequest} The populated <code>ProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductsRequest();

            if (data.hasOwnProperty('pizza')) {
                obj['pizza'] = ApiClient.convertToType(data['pizza'], [CartPizzaProductRequest]);
            }
            if (data.hasOwnProperty('simple')) {
                obj['simple'] = ApiClient.convertToType(data['simple'], [CartSimpleProductRequest]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CartPizzaProductRequest>} pizza
 */
ProductsRequest.prototype['pizza'] = undefined;

/**
 * @member {Array.<module:model/CartSimpleProductRequest>} simple
 */
ProductsRequest.prototype['simple'] = undefined;






export default ProductsRequest;
