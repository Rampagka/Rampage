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
    instance = new PizzaShopApi.PizzaVariation();
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

  describe('PizzaVariation', function() {
    it('should create an instance of PizzaVariation', function() {
      // uncomment below and update the code to test PizzaVariation
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be.a(PizzaShopApi.PizzaVariation);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be();
    });

    it('should have the property sizeGroup (base name: "sizeGroup")', function() {
      // uncomment below and update the code to test the property sizeGroup
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be();
    });

    it('should have the property doughType (base name: "doughType")', function() {
      // uncomment below and update the code to test the property doughType
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "imageUrl")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be();
    });

    it('should have the property boardsAvailable (base name: "boardsAvailable")', function() {
      // uncomment below and update the code to test the property boardsAvailable
      //var instance = new PizzaShopApi.PizzaVariation();
      //expect(instance).to.be();
    });

  });

}));
