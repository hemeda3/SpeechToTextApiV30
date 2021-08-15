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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.ModelFile = factory(root.SpeechToTextApiV30.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelFile model module.
   * @module model/ModelFile
   * @version v3.0
   */

  /**
   * Constructs a new <code>ModelFile</code>.
   * @alias module:model/ModelFile
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelFile} obj Optional instance to populate.
   * @return {module:model/ModelFile} The populated <code>ModelFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('contentUrl'))
        obj.contentUrl = ApiClient.convertToType(data['contentUrl'], 'String');
    }
    return obj;
  }

  /**
   * The name of this file.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The url to retrieve the content of this file.
   * @member {String} contentUrl
   */
  exports.prototype.contentUrl = undefined;


  return exports;

}));
