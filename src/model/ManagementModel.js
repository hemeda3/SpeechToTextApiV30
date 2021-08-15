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
    define(['ApiClient', 'model/EntityReference', 'model/InternalModel', 'model/ManagementModelProperties', 'model/ModelLinks', 'model/ModelProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityReference'), require('./InternalModel'), require('./ManagementModelProperties'), require('./ModelLinks'), require('./ModelProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.ManagementModel = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.EntityReference, root.SpeechToTextApiV30.InternalModel, root.SpeechToTextApiV30.ManagementModelProperties, root.SpeechToTextApiV30.ModelLinks, root.SpeechToTextApiV30.ModelProperties);
  }
}(this, function(ApiClient, EntityReference, InternalModel, ManagementModelProperties, ModelLinks, ModelProperties) {
  'use strict';

  /**
   * The ManagementModel model module.
   * @module model/ManagementModel
   * @version v3.0
   */

  /**
   * Constructs a new <code>ManagementModel</code>.
   * @alias module:model/ManagementModel
   * @class
   * @param displayName {String} The display name of the object.
   * @param locale {String} The locale of the contained data.
   */
  var exports = function(displayName, locale) {
    this.displayName = displayName;
    this.locale = locale;
  };

  /**
   * Constructs a <code>ManagementModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagementModel} obj Optional instance to populate.
   * @return {module:model/ManagementModel} The populated <code>ManagementModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subscriptionId'))
        obj.subscriptionId = ApiClient.convertToType(data['subscriptionId'], 'String');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('acousticModel'))
        obj.acousticModel = InternalModel.constructFromObject(data['acousticModel']);
      if (data.hasOwnProperty('languageModel'))
        obj.languageModel = InternalModel.constructFromObject(data['languageModel']);
      if (data.hasOwnProperty('hideOnV2Api'))
        obj.hideOnV2Api = ApiClient.convertToType(data['hideOnV2Api'], 'Boolean');
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], 'String');
      if (data.hasOwnProperty('internalProperties'))
        obj.internalProperties = ManagementModelProperties.constructFromObject(data['internalProperties']);
      if (data.hasOwnProperty('project'))
        obj.project = EntityReference.constructFromObject(data['project']);
      if (data.hasOwnProperty('links'))
        obj.links = ModelLinks.constructFromObject(data['links']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ModelProperties.constructFromObject(data['properties']);
      if (data.hasOwnProperty('self'))
        obj.self = ApiClient.convertToType(data['self'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('baseModel'))
        obj.baseModel = EntityReference.constructFromObject(data['baseModel']);
      if (data.hasOwnProperty('datasets'))
        obj.datasets = ApiClient.convertToType(data['datasets'], [EntityReference]);
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
      if (data.hasOwnProperty('lastActionDateTime'))
        obj.lastActionDateTime = ApiClient.convertToType(data['lastActionDateTime'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('createdDateTime'))
        obj.createdDateTime = ApiClient.convertToType(data['createdDateTime'], 'Date');
      if (data.hasOwnProperty('customProperties'))
        obj.customProperties = ApiClient.convertToType(data['customProperties'], {'String': 'String'});
    }
    return obj;
  }

  /**
   * @member {String} subscriptionId
   */
  exports.prototype.subscriptionId = undefined;

  /**
   * @member {module:model/ManagementModel.KindEnum} kind
   */
  exports.prototype.kind = undefined;

  /**
   * @member {module:model/InternalModel} acousticModel
   */
  exports.prototype.acousticModel = undefined;

  /**
   * @member {module:model/InternalModel} languageModel
   */
  exports.prototype.languageModel = undefined;

  /**
   * @member {Boolean} hideOnV2Api
   */
  exports.prototype.hideOnV2Api = undefined;

  /**
   * @member {module:model/ManagementModel.PermissionsEnum} permissions
   */
  exports.prototype.permissions = undefined;

  /**
   * @member {module:model/ManagementModelProperties} internalProperties
   */
  exports.prototype.internalProperties = undefined;

  /**
   * The project, the model is associated with.
   * @member {module:model/EntityReference} project
   */
  exports.prototype.project = undefined;

  /**
   * The links for additional actions or content related to this model.
   * @member {module:model/ModelLinks} links
   */
  exports.prototype.links = undefined;

  /**
   * Additional configuration options when creating a new model and additional metadata provided by the service.
   * @member {module:model/ModelProperties} properties
   */
  exports.prototype.properties = undefined;

  /**
   * The location of this entity.
   * @member {String} self
   */
  exports.prototype.self = undefined;

  /**
   * The display name of the object.
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * The description of the object.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The text used to adapt this language model.
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * The base model used for adaptation.
   * @member {module:model/EntityReference} baseModel
   */
  exports.prototype.baseModel = undefined;

  /**
   * Datasets used for adaptation.
   * @member {Array.<module:model/EntityReference>} datasets
   */
  exports.prototype.datasets = undefined;

  /**
   * The locale of the contained data.
   * @member {String} locale
   */
  exports.prototype.locale = undefined;

  /**
   * The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   * @member {Date} lastActionDateTime
   */
  exports.prototype.lastActionDateTime = undefined;

  /**
   * The status of the object.
   * @member {module:model/ManagementModel.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   * @member {Date} createdDateTime
   */
  exports.prototype.createdDateTime = undefined;

  /**
   * The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10.
   * @member {Object.<String, String>} customProperties
   */
  exports.prototype.customProperties = undefined;



  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Acoustic"
     * @const
     */
    acoustic: "Acoustic",

    /**
     * value: "Language"
     * @const
     */
    language: "Language",

    /**
     * value: "AcousticAndLanguage"
     * @const
     */
    acousticAndLanguage: "AcousticAndLanguage",

    /**
     * value: "CustomVoice"
     * @const
     */
    customVoice: "CustomVoice",

    /**
     * value: "Sentiment"
     * @const
     */
    sentiment: "Sentiment",

    /**
     * value: "LanguageIdentification"
     * @const
     */
    languageIdentification: "LanguageIdentification",

    /**
     * value: "Diarization"
     * @const
     */
    diarization: "Diarization",

    /**
     * value: "PronunciationScore"
     * @const
     */
    pronunciationScore: "PronunciationScore"
  };


  /**
   * Allowed values for the <code>permissions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PermissionsEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "OthersWrite"
     * @const
     */
    othersWrite: "OthersWrite",

    /**
     * value: "OthersRead"
     * @const
     */
    othersRead: "OthersRead",

    /**
     * value: "GroupWrite"
     * @const
     */
    groupWrite: "GroupWrite",

    /**
     * value: "GroupRead"
     * @const
     */
    groupRead: "GroupRead",

    /**
     * value: "UserWrite"
     * @const
     */
    userWrite: "UserWrite",

    /**
     * value: "UserRead"
     * @const
     */
    userRead: "UserRead"
  };


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "NotStarted"
     * @const
     */
    notStarted: "NotStarted",

    /**
     * value: "Running"
     * @const
     */
    running: "Running",

    /**
     * value: "Succeeded"
     * @const
     */
    succeeded: "Succeeded",

    /**
     * value: "Failed"
     * @const
     */
    failed: "Failed"
  };

  return exports;

}));
