# SpeechToTextApiV30.WebHookUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webUrl** | **String** | The registered URL that will be used to send the POST requests for the registered events to. | [optional] 
**properties** | [**WebHookPropertiesUpdate**](WebHookPropertiesUpdate.md) | Additional configuration options when updating a webhook. | [optional] 
**events** | **Object** | A value indicating the webhook event kinds. | [optional] 
**displayName** | **String** | The name of the object. | [optional] 
**description** | **String** | The description of the object. | [optional] 
**customProperties** | **{String: String}** | The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10. | [optional] 


