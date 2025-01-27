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
 * @interface PAYMENTSOURCENOTSUPPORTED
 */
export interface PAYMENTSOURCENOTSUPPORTED {
    /**
     * 
     * @type {string}
     * @memberof PAYMENTSOURCENOTSUPPORTED
     */
    'description'?: PAYMENTSOURCENOTSUPPORTEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PAYMENTSOURCENOTSUPPORTED
     */
    'issue'?: PAYMENTSOURCENOTSUPPORTEDIssueEnum;
}

type PAYMENTSOURCENOTSUPPORTEDDescriptionEnum = 'The payer selected method of payment is not supported when multiple purchase units are specified for an Order.'
type PAYMENTSOURCENOTSUPPORTEDIssueEnum = 'PAYMENT_SOURCE_NOT_SUPPORTED'


