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
 * The PercentDiscount model module.
 * @module model/PercentDiscount
 * @version 1.0
 */
class PercentDiscount {
    /**
     * Constructs a new <code>PercentDiscount</code>.
     * @alias module:model/PercentDiscount
     * @param offerType {module:model/PercentDiscount.OfferTypeEnum} 
     */
    constructor(offerType) { 
        
        PercentDiscount.initialize(this, offerType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, offerType) { 
        obj['offerType'] = offerType;
    }

    /**
     * Constructs a <code>PercentDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PercentDiscount} obj Optional instance to populate.
     * @return {module:model/PercentDiscount} The populated <code>PercentDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PercentDiscount();

            if (data.hasOwnProperty('discountPercent')) {
                obj['discountPercent'] = ApiClient.convertToType(data['discountPercent'], 'Number');
            }
            if (data.hasOwnProperty('offerType')) {
                obj['offerType'] = ApiClient.convertToType(data['offerType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} discountPercent
 */
PercentDiscount.prototype['discountPercent'] = undefined;

/**
 * @member {module:model/PercentDiscount.OfferTypeEnum} offerType
 */
PercentDiscount.prototype['offerType'] = undefined;





/**
 * Allowed values for the <code>offerType</code> property.
 * @enum {String}
 * @readonly
 */
PercentDiscount['OfferTypeEnum'] = {

    /**
     * value: "MONEY_DISCOUNT"
     * @const
     */
    "MONEY_DISCOUNT": "MONEY_DISCOUNT",

    /**
     * value: "PERCENT_DISCOUNT"
     * @const
     */
    "PERCENT_DISCOUNT": "PERCENT_DISCOUNT",

    /**
     * value: "BONUS_PRODUCTS"
     * @const
     */
    "BONUS_PRODUCTS": "BONUS_PRODUCTS"
};



export default PercentDiscount;

