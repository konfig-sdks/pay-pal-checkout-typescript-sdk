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
 * @interface PAYPALREQUESTIDREQUIRED
 */
export interface PAYPALREQUESTIDREQUIRED {
    /**
     * 
     * @type {string}
     * @memberof PAYPALREQUESTIDREQUIRED
     */
    'description'?: PAYPALREQUESTIDREQUIREDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PAYPALREQUESTIDREQUIRED
     */
    'issue'?: PAYPALREQUESTIDREQUIREDIssueEnum;
}

type PAYPALREQUESTIDREQUIREDDescriptionEnum = 'A PayPal-Request-Id is required if you are trying to process payment for an Order. Please specify a PayPal-Request-Id or Create the Order without a \'payment_source\' specified.'
type PAYPALREQUESTIDREQUIREDIssueEnum = 'PAYPAL_REQUEST_ID_REQUIRED'

