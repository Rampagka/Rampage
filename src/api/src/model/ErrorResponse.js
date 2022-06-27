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
import ErrorCodeResponse from './ErrorCodeResponse';

/**
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 1.0
 */
class ErrorResponse {
    /**
     * Constructs a new <code>ErrorResponse</code>.
     * @alias module:model/ErrorResponse
     */
    constructor() { 
        
        ErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponse} obj Optional instance to populate.
     * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            if (data.hasOwnProperty('errorType')) {
                obj['errorType'] = ApiClient.convertToType(data['errorType'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ErrorCodeResponse.constructFromObject(data['code']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ErrorResponse.ErrorTypeEnum} errorType
 */
ErrorResponse.prototype['errorType'] = undefined;

/**
 * @member {module:model/ErrorCodeResponse} code
 */
ErrorResponse.prototype['code'] = undefined;

/**
 * @member {String} message
 */
ErrorResponse.prototype['message'] = undefined;





/**
 * Allowed values for the <code>errorType</code> property.
 * @enum {String}
 * @readonly
 */
ErrorResponse['ErrorTypeEnum'] = {

    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS",

    /**
     * value: "VALIDATION"
     * @const
     */
    "VALIDATION": "VALIDATION",

    /**
     * value: "INVOCATION"
     * @const
     */
    "INVOCATION": "INVOCATION",

    /**
     * value: "INTERNAL"
     * @const
     */
    "INTERNAL": "INTERNAL",

    /**
     * value: "SECURITY"
     * @const
     */
    "SECURITY": "SECURITY"
};



export default ErrorResponse;

