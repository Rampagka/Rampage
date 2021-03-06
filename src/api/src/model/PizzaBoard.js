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
 * The PizzaBoard model module.
 * @module model/PizzaBoard
 * @version 1.0
 */
class PizzaBoard {
    /**
     * Constructs a new <code>PizzaBoard</code>.
     * @alias module:model/PizzaBoard
     */
    constructor() { 
        
        PizzaBoard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PizzaBoard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PizzaBoard} obj Optional instance to populate.
     * @return {module:model/PizzaBoard} The populated <code>PizzaBoard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PizzaBoard();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PizzaBoard.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
PizzaBoard.prototype['displayName'] = undefined;

/**
 * @member {String} imageUrl
 */
PizzaBoard.prototype['imageUrl'] = undefined;






export default PizzaBoard;

