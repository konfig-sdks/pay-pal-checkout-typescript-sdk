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
 * @interface INVALIDGOOGLEPAYTOKEN
 */
export interface INVALIDGOOGLEPAYTOKEN {
    /**
     * 
     * @type {string}
     * @memberof INVALIDGOOGLEPAYTOKEN
     */
    'description'?: INVALIDGOOGLEPAYTOKENDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof INVALIDGOOGLEPAYTOKEN
     */
    'issue'?: INVALIDGOOGLEPAYTOKENIssueEnum;
}

type INVALIDGOOGLEPAYTOKENDescriptionEnum = 'The google pay token is invalid. PayPal was not able to decrypt the googlepay token or PayPal was not able to find the necessary data in the token after decryption.'
type INVALIDGOOGLEPAYTOKENIssueEnum = 'INVALID_GOOGLE_PAY_TOKEN'


