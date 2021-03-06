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
import BonusProductData from './BonusProductData';
import PizzaBonusAllOf from './PizzaBonusAllOf';

/**
 * The PizzaBonus model module.
 * @module model/PizzaBonus
 * @version 1.0
 */
class PizzaBonus {
    /**
     * Constructs a new <code>PizzaBonus</code>.
     * @alias module:model/PizzaBonus
     * @extends module:model/BonusProductData
     * @implements module:model/BonusProductData
     * @implements module:model/PizzaBonusAllOf
     * @param productType {module:model/PizzaBonus.ProductTypeEnum} 
     */
    constructor(productType) { 
        BonusProductData.initialize(this, productType);PizzaBonusAllOf.initialize(this);
        PizzaBonus.initialize(this, productType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productType) { 
    }

    /**
     * Constructs a <code>PizzaBonus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PizzaBonus} obj Optional instance to populate.
     * @return {module:model/PizzaBonus} The populated <code>PizzaBonus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PizzaBonus();
            BonusProductData.constructFromObject(data, obj);
            BonusProductData.constructFromObject(data, obj);
            PizzaBonusAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('sizeGroup')) {
                obj['sizeGroup'] = ApiClient.convertToType(data['sizeGroup'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} productId
 */
PizzaBonus.prototype['productId'] = undefined;

/**
 * @member {Number} sizeGroup
 */
PizzaBonus.prototype['sizeGroup'] = undefined;


// Implement BonusProductData interface:
/**
 * @member {module:model/BonusProductData.ProductTypeEnum} productType
 */
BonusProductData.prototype['productType'] = undefined;
// Implement PizzaBonusAllOf interface:
/**
 * @member {Number} productId
 */
PizzaBonusAllOf.prototype['productId'] = undefined;
/**
 * @member {Number} sizeGroup
 */
PizzaBonusAllOf.prototype['sizeGroup'] = undefined;




export default PizzaBonus;

