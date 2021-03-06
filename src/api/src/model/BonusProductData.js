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
 * The BonusProductData model module.
 * @module model/BonusProductData
 * @version 1.0
 */
class BonusProductData {
    /**
     * Constructs a new <code>BonusProductData</code>.
     * @alias module:model/BonusProductData
     * @param productType {module:model/BonusProductData.ProductTypeEnum} 
     */
    constructor(productType) { 
        
        BonusProductData.initialize(this, productType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productType) { 
        obj['productType'] = productType;
    }

    /**
     * Constructs a <code>BonusProductData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BonusProductData} obj Optional instance to populate.
     * @return {module:model/BonusProductData} The populated <code>BonusProductData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BonusProductData();

            if (data.hasOwnProperty('productType')) {
                obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BonusProductData.ProductTypeEnum} productType
 */
BonusProductData.prototype['productType'] = undefined;





/**
 * Allowed values for the <code>productType</code> property.
 * @enum {String}
 * @readonly
 */
BonusProductData['ProductTypeEnum'] = {

    /**
     * value: "SIMPLE"
     * @const
     */
    "SIMPLE": "SIMPLE",

    /**
     * value: "PIZZA"
     * @const
     */
    "PIZZA": "PIZZA"
};



export default BonusProductData;

