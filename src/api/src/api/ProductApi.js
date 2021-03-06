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


import ApiClient from "../ApiClient";
import GetProductCatalogResponse from '../model/GetProductCatalogResponse';

/**
* Product service.
* @module api/ProductApi
* @version 1.0
*/
export default class ProductApi {

    /**
    * Constructs a new ProductApi.
    * @alias module:api/ProductApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Number} cityId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProductCatalogResponse} and HTTP response
     */
    getCatalogWithHttpInfo(cityId) {
      let postBody = null;
      // verify the required parameter 'cityId' is set
      if (cityId === undefined || cityId === null) {
        throw new Error("Missing the required parameter 'cityId' when calling getCatalog");
      }

      let pathParams = {
      };
      let queryParams = {
        'cityId': cityId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProductCatalogResponse;
      return this.apiClient.callApi(
        '/v1/product/catalog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} cityId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProductCatalogResponse}
     */
    getCatalog(cityId) {
      return this.getCatalogWithHttpInfo(cityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
