/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS
 */
export interface MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS {
    /**
     * 
     * @type {string}
     * @memberof MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS
     */
    'description'?: MERCHANTINITIATEDWITHAUTHENTICATIONRESULTSDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS
     */
    'issue'?: MERCHANTINITIATEDWITHAUTHENTICATIONRESULTSIssueEnum;
}

type MERCHANTINITIATEDWITHAUTHENTICATIONRESULTSDescriptionEnum = '`stored_payment_source.payment_initiator` = `MERCHANT` is not supported if 3D-Secure authentication results are present in the order. 3D-Secure authentication results can be present in the order only when customer is the payment initiator. It is semantically incorrect to perform a merchant initiated payment with 3D-Secure authentication results is the order.'
type MERCHANTINITIATEDWITHAUTHENTICATIONRESULTSIssueEnum = 'MERCHANT_INITIATED_WITH_AUTHENTICATION_RESULTS'


