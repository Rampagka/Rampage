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
    instance = new PizzaShopApi.ErrorResponse();
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

  describe('ErrorResponse', function() {
    it('should create an instance of ErrorResponse', function() {
      // uncomment below and update the code to test ErrorResponse
      //var instance = new PizzaShopApi.ErrorResponse();
      //expect(instance).to.be.a(PizzaShopApi.ErrorResponse);
    });

    it('should have the property errorType (base name: "errorType")', function() {
      // uncomment below and update the code to test the property errorType
      //var instance = new PizzaShopApi.ErrorResponse();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new PizzaShopApi.ErrorResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new PizzaShopApi.ErrorResponse();
      //expect(instance).to.be();
    });

  });

}));
