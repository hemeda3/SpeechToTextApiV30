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
    define(['ApiClient', 'model/InnerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InnerError'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.InnerError = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.InnerError);
  }
}(this, function(ApiClient, InnerError) {
  'use strict';

  /**
   * The InnerError model module.
   * @module model/InnerError
   * @version v3.0
   */

  /**
   * Constructs a new <code>InnerError</code>.
   * @alias module:model/InnerError
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InnerError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InnerError} obj Optional instance to populate.
   * @return {module:model/InnerError} The populated <code>InnerError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], {'String': 'String'});
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
      if (data.hasOwnProperty('innerError'))
        obj.innerError = InnerError.constructFromObject(data['innerError']);
    }
    return obj;
  }

  /**
   * @member {module:model/InnerError.CodeEnum} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {Object.<String, String>} details
   */
  exports.prototype.details = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {String} target
   */
  exports.prototype.target = undefined;

  /**
   * @member {module:model/InnerError} innerError
   */
  exports.prototype.innerError = undefined;



  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "InvalidParameterValue"
     * @const
     */
    invalidParameterValue: "InvalidParameterValue",

    /**
     * value: "InvalidRequestBodyFormat"
     * @const
     */
    invalidRequestBodyFormat: "InvalidRequestBodyFormat",

    /**
     * value: "EmptyRequest"
     * @const
     */
    emptyRequest: "EmptyRequest",

    /**
     * value: "MissingInputRecords"
     * @const
     */
    missingInputRecords: "MissingInputRecords",

    /**
     * value: "InvalidDocument"
     * @const
     */
    invalidDocument: "InvalidDocument",

    /**
     * value: "ModelVersionIncorrect"
     * @const
     */
    modelVersionIncorrect: "ModelVersionIncorrect",

    /**
     * value: "InvalidDocumentBatch"
     * @const
     */
    invalidDocumentBatch: "InvalidDocumentBatch",

    /**
     * value: "UnsupportedLanguageCode"
     * @const
     */
    unsupportedLanguageCode: "UnsupportedLanguageCode",

    /**
     * value: "DataImportFailed"
     * @const
     */
    dataImportFailed: "DataImportFailed",

    /**
     * value: "InUseViolation"
     * @const
     */
    inUseViolation: "InUseViolation",

    /**
     * value: "InvalidLocale"
     * @const
     */
    invalidLocale: "InvalidLocale",

    /**
     * value: "InvalidBaseModel"
     * @const
     */
    invalidBaseModel: "InvalidBaseModel",

    /**
     * value: "InvalidAdaptationMapping"
     * @const
     */
    invalidAdaptationMapping: "InvalidAdaptationMapping",

    /**
     * value: "InvalidDataset"
     * @const
     */
    invalidDataset: "InvalidDataset",

    /**
     * value: "InvalidTest"
     * @const
     */
    invalidTest: "InvalidTest",

    /**
     * value: "FailedDataset"
     * @const
     */
    failedDataset: "FailedDataset",

    /**
     * value: "InvalidModel"
     * @const
     */
    invalidModel: "InvalidModel",

    /**
     * value: "InvalidTranscription"
     * @const
     */
    invalidTranscription: "InvalidTranscription",

    /**
     * value: "InvalidVoiceSynthesis"
     * @const
     */
    invalidVoiceSynthesis: "InvalidVoiceSynthesis",

    /**
     * value: "InvalidPayload"
     * @const
     */
    invalidPayload: "InvalidPayload",

    /**
     * value: "InvalidParameter"
     * @const
     */
    invalidParameter: "InvalidParameter",

    /**
     * value: "EndpointWithoutLogging"
     * @const
     */
    endpointWithoutLogging: "EndpointWithoutLogging",

    /**
     * value: "InvalidPermissions"
     * @const
     */
    invalidPermissions: "InvalidPermissions",

    /**
     * value: "InvalidPrerequisite"
     * @const
     */
    invalidPrerequisite: "InvalidPrerequisite",

    /**
     * value: "InvalidProductId"
     * @const
     */
    invalidProductId: "InvalidProductId",

    /**
     * value: "InvalidSubscription"
     * @const
     */
    invalidSubscription: "InvalidSubscription",

    /**
     * value: "InvalidProject"
     * @const
     */
    invalidProject: "InvalidProject",

    /**
     * value: "InvalidProjectKind"
     * @const
     */
    invalidProjectKind: "InvalidProjectKind",

    /**
     * value: "InvalidRecordingsUri"
     * @const
     */
    invalidRecordingsUri: "InvalidRecordingsUri",

    /**
     * value: "ExceededNumberOfRecordingsUris"
     * @const
     */
    exceededNumberOfRecordingsUris: "ExceededNumberOfRecordingsUris",

    /**
     * value: "ModelMismatch"
     * @const
     */
    modelMismatch: "ModelMismatch",

    /**
     * value: "ProjectGenderMismatch"
     * @const
     */
    projectGenderMismatch: "ProjectGenderMismatch",

    /**
     * value: "ModelDeprecated"
     * @const
     */
    modelDeprecated: "ModelDeprecated",

    /**
     * value: "ModelExists"
     * @const
     */
    modelExists: "ModelExists",

    /**
     * value: "ModelNotDeployable"
     * @const
     */
    modelNotDeployable: "ModelNotDeployable",

    /**
     * value: "EndpointNotUpdatable"
     * @const
     */
    endpointNotUpdatable: "EndpointNotUpdatable",

    /**
     * value: "SingleDefaultEndpoint"
     * @const
     */
    singleDefaultEndpoint: "SingleDefaultEndpoint",

    /**
     * value: "InvalidModelUri"
     * @const
     */
    invalidModelUri: "InvalidModelUri",

    /**
     * value: "SubscriptionNotFound"
     * @const
     */
    subscriptionNotFound: "SubscriptionNotFound",

    /**
     * value: "QuotaViolation"
     * @const
     */
    quotaViolation: "QuotaViolation",

    /**
     * value: "UnsupportedDelta"
     * @const
     */
    unsupportedDelta: "UnsupportedDelta",

    /**
     * value: "UnsupportedFilter"
     * @const
     */
    unsupportedFilter: "UnsupportedFilter",

    /**
     * value: "UnsupportedPagination"
     * @const
     */
    unsupportedPagination: "UnsupportedPagination",

    /**
     * value: "UnsupportedOrderBy"
     * @const
     */
    unsupportedOrderBy: "UnsupportedOrderBy",

    /**
     * value: "NoUtf8WithBom"
     * @const
     */
    noUtf8WithBom: "NoUtf8WithBom",

    /**
     * value: "ModelDeploymentNotCompleteState"
     * @const
     */
    modelDeploymentNotCompleteState: "ModelDeploymentNotCompleteState",

    /**
     * value: "SkuLimitsExist"
     * @const
     */
    skuLimitsExist: "SkuLimitsExist",

    /**
     * value: "DeployingFailedModel"
     * @const
     */
    deployingFailedModel: "DeployingFailedModel",

    /**
     * value: "UnsupportedTimeRange"
     * @const
     */
    unsupportedTimeRange: "UnsupportedTimeRange",

    /**
     * value: "InvalidLogDate"
     * @const
     */
    invalidLogDate: "InvalidLogDate",

    /**
     * value: "InvalidLogId"
     * @const
     */
    invalidLogId: "InvalidLogId",

    /**
     * value: "InvalidLogStartTime"
     * @const
     */
    invalidLogStartTime: "InvalidLogStartTime",

    /**
     * value: "InvalidLogEndTime"
     * @const
     */
    invalidLogEndTime: "InvalidLogEndTime",

    /**
     * value: "InvalidTopForLogs"
     * @const
     */
    invalidTopForLogs: "InvalidTopForLogs",

    /**
     * value: "DeleteNotAllowed"
     * @const
     */
    deleteNotAllowed: "DeleteNotAllowed",

    /**
     * value: "Forbidden"
     * @const
     */
    forbidden: "Forbidden",

    /**
     * value: "DeployNotAllowed"
     * @const
     */
    deployNotAllowed: "DeployNotAllowed",

    /**
     * value: "UnexpectedError"
     * @const
     */
    unexpectedError: "UnexpectedError",

    /**
     * value: "InvalidCollection"
     * @const
     */
    invalidCollection: "InvalidCollection",

    /**
     * value: "InvalidCallbackUri"
     * @const
     */
    invalidCallbackUri: "InvalidCallbackUri",

    /**
     * value: "InvalidSasValidityDuration"
     * @const
     */
    invalidSasValidityDuration: "InvalidSasValidityDuration"
  };

  return exports;

}));
