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
 * @interface PAYERACTIONREQUIRED
 */
export interface PAYERACTIONREQUIRED {
    /**
     * 
     * @type {string}
     * @memberof PAYERACTIONREQUIRED
     */
    'description'?: PAYERACTIONREQUIREDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PAYERACTIONREQUIRED
     */
    'issue'?: PAYERACTIONREQUIREDIssueEnum;
}

type PAYERACTIONREQUIREDDescriptionEnum = 'Transaction cannot complete successfully, instruct the buyer to return to PayPal.'
type PAYERACTIONREQUIREDIssueEnum = 'PAYER_ACTION_REQUIRED'

