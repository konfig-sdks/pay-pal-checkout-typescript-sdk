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
 * @interface INVALIDEXPIRYDATE
 */
export interface INVALIDEXPIRYDATE {
    /**
     * 
     * @type {string}
     * @memberof INVALIDEXPIRYDATE
     */
    'description'?: INVALIDEXPIRYDATEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof INVALIDEXPIRYDATE
     */
    'issue'?: INVALIDEXPIRYDATEIssueEnum;
}

type INVALIDEXPIRYDATEDescriptionEnum = 'Expiry date is invalid. Expiry date should be a date in future and within the threshold for the payment source.'
type INVALIDEXPIRYDATEIssueEnum = 'INVALID_EXPIRY_DATE'

