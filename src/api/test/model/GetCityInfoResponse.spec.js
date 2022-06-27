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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PizzaShopApi);
  }
}(this, function(expect, PizzaShopApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PizzaShopApi.GetCityInfoResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetCityInfoResponse', function() {
    it('should create an instance of GetCityInfoResponse', function() {
      // uncomment below and update the code to test GetCityInfoResponse
      //var instance = new PizzaShopApi.GetCityInfoResponse();
      //expect(instance).to.be.a(PizzaShopApi.GetCityInfoResponse);
    });

    it('should have the property cityId (base name: "cityId")', function() {
      // uncomment below and update the code to test the property cityId
      //var instance = new PizzaShopApi.GetCityInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new PizzaShopApi.GetCityInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property zoneId (base name: "zoneId")', function() {
      // uncomment below and update the code to test the property zoneId
      //var instance = new PizzaShopApi.GetCityInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property deliveryPrices (base name: "deliveryPrices")', function() {
      // uncomment below and update the code to test the property deliveryPrices
      //var instance = new PizzaShopApi.GetCityInfoResponse();
      //expect(instance).to.be();
    });

  });

}));
