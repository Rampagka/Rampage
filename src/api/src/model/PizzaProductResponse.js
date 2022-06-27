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
import PizzaBoard from './PizzaBoard';
import PizzaVariation from './PizzaVariation';
import ServiceTag from './ServiceTag';

/**
 * The PizzaProductResponse model module.
 * @module model/PizzaProductResponse
 * @version 1.0
 */
class PizzaProductResponse {
    /**
     * Constructs a new <code>PizzaProductResponse</code>.
     * @alias module:model/PizzaProductResponse
     */
    constructor() { 
        
        PizzaProductResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PizzaProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PizzaProductResponse} obj Optional instance to populate.
     * @return {module:model/PizzaProductResponse} The populated <code>PizzaProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PizzaProductResponse();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('minPrice')) {
                obj['minPrice'] = ApiClient.convertToType(data['minPrice'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ServiceTag]);
            }
            if (data.hasOwnProperty('availableVariations')) {
                obj['availableVariations'] = ApiClient.convertToType(data['availableVariations'], [PizzaVariation]);
            }
            if (data.hasOwnProperty('availableBoards')) {
                obj['availableBoards'] = ApiClient.convertToType(data['availableBoards'], [PizzaBoard]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} displayName
 */
PizzaProductResponse.prototype['displayName'] = undefined;

/**
 * @member {String} description
 */
PizzaProductResponse.prototype['description'] = undefined;

/**
 * @member {String} imageUrl
 */
PizzaProductResponse.prototype['imageUrl'] = undefined;

/**
 * @member {Number} minPrice
 */
PizzaProductResponse.prototype['minPrice'] = undefined;

/**
 * @member {Array.<module:model/ServiceTag>} tags
 */
PizzaProductResponse.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/PizzaVariation>} availableVariations
 */
PizzaProductResponse.prototype['availableVariations'] = undefined;

/**
 * @member {Array.<module:model/PizzaBoard>} availableBoards
 */
PizzaProductResponse.prototype['availableBoards'] = undefined;






export default PizzaProductResponse;
