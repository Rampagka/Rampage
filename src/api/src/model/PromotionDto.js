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
import PromoCodeDto from './PromoCodeDto';

/**
 * The PromotionDto model module.
 * @module model/PromotionDto
 * @version 1.0
 */
class PromotionDto {
    /**
     * Constructs a new <code>PromotionDto</code>.
     * @alias module:model/PromotionDto
     */
    constructor() { 
        
        PromotionDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PromotionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PromotionDto} obj Optional instance to populate.
     * @return {module:model/PromotionDto} The populated <code>PromotionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionDto();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('cityId')) {
                obj['cityId'] = ApiClient.convertToType(data['cityId'], 'Number');
            }
            if (data.hasOwnProperty('beginUsable')) {
                obj['beginUsable'] = ApiClient.convertToType(data['beginUsable'], 'Date');
            }
            if (data.hasOwnProperty('endUsable')) {
                obj['endUsable'] = ApiClient.convertToType(data['endUsable'], 'Date');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('promocode')) {
                obj['promocode'] = PromoCodeDto.constructFromObject(data['promocode']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} displayName
 */
PromotionDto.prototype['displayName'] = undefined;

/**
 * @member {String} description
 */
PromotionDto.prototype['description'] = undefined;

/**
 * @member {Number} cityId
 */
PromotionDto.prototype['cityId'] = undefined;

/**
 * @member {Date} beginUsable
 */
PromotionDto.prototype['beginUsable'] = undefined;

/**
 * @member {Date} endUsable
 */
PromotionDto.prototype['endUsable'] = undefined;

/**
 * @member {String} imageUrl
 */
PromotionDto.prototype['imageUrl'] = undefined;

/**
 * @member {module:model/PromoCodeDto} promocode
 */
PromotionDto.prototype['promocode'] = undefined;






export default PromotionDto;

