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
 * @interface NOTENABLEDFORCARDPROCESSING1
 */
export interface NOTENABLEDFORCARDPROCESSING1 {
    /**
     * 
     * @type {string}
     * @memberof NOTENABLEDFORCARDPROCESSING1
     */
    'description'?: NOTENABLEDFORCARDPROCESSING1DescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof NOTENABLEDFORCARDPROCESSING1
     */
    'issue'?: NOTENABLEDFORCARDPROCESSING1IssueEnum;
}

type NOTENABLEDFORCARDPROCESSING1DescriptionEnum = 'The API Caller account is not setup to be able to process card payments. Please contact PayPal customer support.'
type NOTENABLEDFORCARDPROCESSING1IssueEnum = 'NOT_ENABLED_FOR_CARD_PROCESSING'


