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
 * @interface PAYMENTSOURCECANNOTBEUSED
 */
export interface PAYMENTSOURCECANNOTBEUSED {
    /**
     * 
     * @type {string}
     * @memberof PAYMENTSOURCECANNOTBEUSED
     */
    'description'?: PAYMENTSOURCECANNOTBEUSEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PAYMENTSOURCECANNOTBEUSED
     */
    'issue'?: PAYMENTSOURCECANNOTBEUSEDIssueEnum;
}

type PAYMENTSOURCECANNOTBEUSEDDescriptionEnum = 'The provided payment source cannot be used to pay for the order. Please try again with a different payment source by creating a new order.'
type PAYMENTSOURCECANNOTBEUSEDIssueEnum = 'PAYMENT_SOURCE_CANNOT_BE_USED'


