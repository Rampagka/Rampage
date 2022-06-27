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
import PromotionDto from './PromotionDto';

/**
 * The GetPromotionsResponse model module.
 * @module model/GetPromotionsResponse
 * @version 1.0
 */
class GetPromotionsResponse {
    /**
     * Constructs a new <code>GetPromotionsResponse</code>.
     * @alias module:model/GetPromotionsResponse
     */
    constructor() { 
        
        GetPromotionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPromotionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPromotionsResponse} obj Optional instance to populate.
     * @return {module:model/GetPromotionsResponse} The populated <code>GetPromotionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPromotionsResponse();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [PromotionDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PromotionDto>} items
 */
GetPromotionsResponse.prototype['items'] = undefined;






export default GetPromotionsResponse;

