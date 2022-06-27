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
 * The CashlessPaymentAllOf model module.
 * @module model/CashlessPaymentAllOf
 * @version 1.0
 */
class CashlessPaymentAllOf {
    /**
     * Constructs a new <code>CashlessPaymentAllOf</code>.
     * @alias module:model/CashlessPaymentAllOf
     */
    constructor() { 
        
        CashlessPaymentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CashlessPaymentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashlessPaymentAllOf} obj Optional instance to populate.
     * @return {module:model/CashlessPaymentAllOf} The populated <code>CashlessPaymentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashlessPaymentAllOf();

            if (data.hasOwnProperty('paymentMethod')) {
                obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CashlessPaymentAllOf.PaymentMethodEnum} paymentMethod
 */
CashlessPaymentAllOf.prototype['paymentMethod'] = undefined;





/**
 * Allowed values for the <code>paymentMethod</code> property.
 * @enum {String}
 * @readonly
 */
CashlessPaymentAllOf['PaymentMethodEnum'] = {

    /**
     * value: "YOOKASSA"
     * @const
     */
    "YOOKASSA": "YOOKASSA"
};



export default CashlessPaymentAllOf;
