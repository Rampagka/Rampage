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

/**
 * The CartPizzaProductRequest model module.
 * @module model/CartPizzaProductRequest
 * @version 1.0
 */
class CartPizzaProductRequest {
    /**
     * Constructs a new <code>CartPizzaProductRequest</code>.
     * @alias module:model/CartPizzaProductRequest
     * @param ingredientIds {Array.<Number>} 
     */
    constructor(ingredientIds) { 
        
        CartPizzaProductRequest.initialize(this, ingredientIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ingredientIds) { 
        obj['ingredientIds'] = ingredientIds;
    }

    /**
     * Constructs a <code>CartPizzaProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartPizzaProductRequest} obj Optional instance to populate.
     * @return {module:model/CartPizzaProductRequest} The populated <code>CartPizzaProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPizzaProductRequest();

            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('ingredientIds')) {
                obj['ingredientIds'] = ApiClient.convertToType(data['ingredientIds'], ['Number']);
            }
            if (data.hasOwnProperty('boardId')) {
                obj['boardId'] = ApiClient.convertToType(data['boardId'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} productId
 */
CartPizzaProductRequest.prototype['productId'] = undefined;

/**
 * @member {Array.<Number>} ingredientIds
 */
CartPizzaProductRequest.prototype['ingredientIds'] = undefined;

/**
 * @member {Number} boardId
 */
CartPizzaProductRequest.prototype['boardId'] = undefined;

/**
 * @member {Number} amount
 */
CartPizzaProductRequest.prototype['amount'] = undefined;






export default CartPizzaProductRequest;

