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
 * @interface NOTENABLEDFORBANKPROCESSING
 */
export interface NOTENABLEDFORBANKPROCESSING {
    /**
     * 
     * @type {string}
     * @memberof NOTENABLEDFORBANKPROCESSING
     */
    'description'?: NOTENABLEDFORBANKPROCESSINGDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof NOTENABLEDFORBANKPROCESSING
     */
    'issue'?: NOTENABLEDFORBANKPROCESSINGIssueEnum;
}

type NOTENABLEDFORBANKPROCESSINGDescriptionEnum = 'The API Caller account is not setup to be able to process bank payments. Please contact your PayPal account manager.'
type NOTENABLEDFORBANKPROCESSINGIssueEnum = 'NOT_ENABLED_FOR_BANK_PROCESSING'


