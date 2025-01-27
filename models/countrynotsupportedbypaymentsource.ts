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
 * @interface COUNTRYNOTSUPPORTEDBYPAYMENTSOURCE
 */
export interface COUNTRYNOTSUPPORTEDBYPAYMENTSOURCE {
    /**
     * 
     * @type {string}
     * @memberof COUNTRYNOTSUPPORTEDBYPAYMENTSOURCE
     */
    'description'?: COUNTRYNOTSUPPORTEDBYPAYMENTSOURCEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof COUNTRYNOTSUPPORTEDBYPAYMENTSOURCE
     */
    'issue'?: COUNTRYNOTSUPPORTEDBYPAYMENTSOURCEIssueEnum;
}

type COUNTRYNOTSUPPORTEDBYPAYMENTSOURCEDescriptionEnum = 'Country code provided is not supported by the provided payment source.'
type COUNTRYNOTSUPPORTEDBYPAYMENTSOURCEIssueEnum = 'COUNTRY_NOT_SUPPORTED_BY_PAYMENT_SOURCE'


