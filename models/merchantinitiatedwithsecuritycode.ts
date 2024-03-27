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
 * @interface MERCHANTINITIATEDWITHSECURITYCODE
 */
export interface MERCHANTINITIATEDWITHSECURITYCODE {
    /**
     * 
     * @type {string}
     * @memberof MERCHANTINITIATEDWITHSECURITYCODE
     */
    'description'?: MERCHANTINITIATEDWITHSECURITYCODEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof MERCHANTINITIATEDWITHSECURITYCODE
     */
    'issue'?: MERCHANTINITIATEDWITHSECURITYCODEIssueEnum;
}

type MERCHANTINITIATEDWITHSECURITYCODEDescriptionEnum = '`stored_payment_source.payment_initiator` = `MERCHANT` is not supported if `payment_source.card.security_code` is present in the order. `security_code` can be present in the order only when customer is the payment initiator. It is semantically incorrect to perform a merchant initiated payment with `security_code` is the order.'
type MERCHANTINITIATEDWITHSECURITYCODEIssueEnum = 'MERCHANT_INITIATED_WITH_SECURITY_CODE'

