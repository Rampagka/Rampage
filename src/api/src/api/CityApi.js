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
import ErrorResponse from '../model/ErrorResponse';
import GetCitiesResponse from '../model/GetCitiesResponse';
import GetCityInfoResponse from '../model/GetCityInfoResponse';

/**
* City service.
* @module api/CityApi
* @version 1.0
*/
export default class CityApi {

    /**
    * Constructs a new CityApi. 
    * @alias module:api/CityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCitiesResponse} and HTTP response
     */
    getCitiesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetCitiesResponse;
      return this.apiClient.callApi(
        '/v1/city', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCitiesResponse}
     */
    getCities() {
      return this.getCitiesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} cityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCityInfoResponse} and HTTP response
     */
    getCityInfoWithHttpInfo(cityId) {
      let postBody = null;
      // verify the required parameter 'cityId' is set
      if (cityId === undefined || cityId === null) {
        throw new Error("Missing the required parameter 'cityId' when calling getCityInfo");
      }

      let pathParams = {
        'cityId': cityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetCityInfoResponse;
      return this.apiClient.callApi(
        '/v1/city/{cityId}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} cityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCityInfoResponse}
     */
    getCityInfo(cityId) {
      return this.getCityInfoWithHttpInfo(cityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
