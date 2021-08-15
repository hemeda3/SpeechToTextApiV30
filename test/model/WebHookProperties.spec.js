/*
 * Speech to Text API v3.0
 * Speech to Text API v3.0.
 *
 * OpenAPI spec version: v3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpeechToTextApiV30);
  }
}(this, function(expect, SpeechToTextApiV30) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('WebHookProperties', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.WebHookProperties();
      });

      it('should create an instance of WebHookProperties', function() {
        // TODO: update the code to test WebHookProperties
        expect(instance).to.be.a(SpeechToTextApiV30.WebHookProperties);
      });

      it('should have the property error (base name: "error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

      it('should have the property apiVersion (base name: "apiVersion")', function() {
        // TODO: update the code to test the property apiVersion
        expect(instance).to.have.property('apiVersion');
        // expect(instance.apiVersion).to.be(expectedValueLiteral);
      });

      it('should have the property secret (base name: "secret")', function() {
        // TODO: update the code to test the property secret
        expect(instance).to.have.property('secret');
        // expect(instance.secret).to.be(expectedValueLiteral);
      });

    });
  });

}));