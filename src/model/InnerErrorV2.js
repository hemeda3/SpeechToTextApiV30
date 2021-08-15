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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InnerErrorV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InnerErrorV2'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.InnerErrorV2 = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.InnerErrorV2);
  }
}(this, function(ApiClient, InnerErrorV2) {
  'use strict';

  /**
   * The InnerErrorV2 model module.
   * @module model/InnerErrorV2
   * @version v3.0
   */

  /**
   * Constructs a new <code>InnerErrorV2</code>.
   * An implementation of this interface represents a stage in a stack trace.  If the error levvel is the root, the {Microsoft.SpeechServices.Common.Client.IInnerError.Code} and the {Microsoft.SpeechServices.Common.Client.IInnerError.InnerError}  property may be omitted.
   * @alias module:model/InnerErrorV2
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InnerErrorV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InnerErrorV2} obj Optional instance to populate.
   * @return {module:model/InnerErrorV2} The populated <code>InnerErrorV2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('innererror'))
        obj.innererror = InnerErrorV2.constructFromObject(data['innererror']);
    }
    return obj;
  }

  /**
   * A service-defined error code that should be human-readable.  This code serves as a more specific indicator of the error than  the HTTP error code specified in the response.
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * A human-readable representation of the error. It is intended as  an aid to developers and is not suitable for exposure to end users.
   * @member {module:model/InnerErrorV2} innererror
   */
  exports.prototype.innererror = undefined;


  return exports;

}));
