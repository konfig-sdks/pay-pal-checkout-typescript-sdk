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
 * @interface INVALIDCURRENCYCODE
 */
export interface INVALIDCURRENCYCODE {
    /**
     * 
     * @type {string}
     * @memberof INVALIDCURRENCYCODE
     */
    'description'?: INVALIDCURRENCYCODEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof INVALIDCURRENCYCODE
     */
    'issue'?: INVALIDCURRENCYCODEIssueEnum;
}

type INVALIDCURRENCYCODEDescriptionEnum = 'Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/api/rest/reference/currency-codes/ for list of supported currency codes.'
type INVALIDCURRENCYCODEIssueEnum = 'INVALID_CURRENCY_CODE'

