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
 * The PizzaIngredientPrice model module.
 * @module model/PizzaIngredientPrice
 * @version 1.0
 */
class PizzaIngredientPrice {
    /**
     * Constructs a new <code>PizzaIngredientPrice</code>.
     * @alias module:model/PizzaIngredientPrice
     */
    constructor() { 
        
        PizzaIngredientPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PizzaIngredientPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PizzaIngredientPrice} obj Optional instance to populate.
     * @return {module:model/PizzaIngredientPrice} The populated <code>PizzaIngredientPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PizzaIngredientPrice();

            if (data.hasOwnProperty('sizeGroup')) {
                obj['sizeGroup'] = ApiClient.convertToType(data['sizeGroup'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PizzaIngredientPrice.SizeGroupEnum} sizeGroup
 */
PizzaIngredientPrice.prototype['sizeGroup'] = undefined;

/**
 * @member {Number} price
 */
PizzaIngredientPrice.prototype['price'] = undefined;





/**
 * Allowed values for the <code>sizeGroup</code> property.
 * @enum {Number}
 * @readonly
 */
PizzaIngredientPrice['SizeGroupEnum'] = {

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 3
     * @const
     */
    "3": 3
};



export default PizzaIngredientPrice;
