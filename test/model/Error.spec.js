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
    describe('Error', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.Error();
      });

      it('should create an instance of Error', function() {
        // TODO: update the code to test Error
        expect(instance).to.be.a(SpeechToTextApiV30.Error);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).to.have.property('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property target (base name: "target")', function() {
        // TODO: update the code to test the property target
        expect(instance).to.have.property('target');
        // expect(instance.target).to.be(expectedValueLiteral);
      });

      it('should have the property innerError (base name: "innerError")', function() {
        // TODO: update the code to test the property innerError
        expect(instance).to.have.property('innerError');
        // expect(instance.innerError).to.be(expectedValueLiteral);
      });

    });
  });

}));
