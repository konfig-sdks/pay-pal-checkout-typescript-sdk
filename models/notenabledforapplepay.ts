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
 * @interface NOTENABLEDFORAPPLEPAY
 */
export interface NOTENABLEDFORAPPLEPAY {
    /**
     * 
     * @type {string}
     * @memberof NOTENABLEDFORAPPLEPAY
     */
    'description'?: NOTENABLEDFORAPPLEPAYDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof NOTENABLEDFORAPPLEPAY
     */
    'issue'?: NOTENABLEDFORAPPLEPAYIssueEnum;
}

type NOTENABLEDFORAPPLEPAYDescriptionEnum = 'The \'API caller\' and/or \'payee\' is not setup to be able to process apple pay. Please contact your Account Manager.'
type NOTENABLEDFORAPPLEPAYIssueEnum = 'NOT_ENABLED_FOR_APPLE_PAY'

