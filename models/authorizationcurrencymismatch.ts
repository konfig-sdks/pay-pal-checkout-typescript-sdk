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
 * @interface AUTHORIZATIONCURRENCYMISMATCH
 */
export interface AUTHORIZATIONCURRENCYMISMATCH {
    /**
     * 
     * @type {string}
     * @memberof AUTHORIZATIONCURRENCYMISMATCH
     */
    'description'?: AUTHORIZATIONCURRENCYMISMATCHDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof AUTHORIZATIONCURRENCYMISMATCH
     */
    'issue'?: AUTHORIZATIONCURRENCYMISMATCHIssueEnum;
}

type AUTHORIZATIONCURRENCYMISMATCHDescriptionEnum = 'The currency of the authorization should be same as that in which the Order was created and approved by the Payer. Please check the \'currency_code\' and try again.'
type AUTHORIZATIONCURRENCYMISMATCHIssueEnum = 'AUTHORIZATION_CURRENCY_MISMATCH'


