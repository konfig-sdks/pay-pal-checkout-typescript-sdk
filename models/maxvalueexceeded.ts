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
 * @interface MAXVALUEEXCEEDED
 */
export interface MAXVALUEEXCEEDED {
    /**
     * 
     * @type {string}
     * @memberof MAXVALUEEXCEEDED
     */
    'description'?: MAXVALUEEXCEEDEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof MAXVALUEEXCEEDED
     */
    'issue'?: MAXVALUEEXCEEDEDIssueEnum;
}

type MAXVALUEEXCEEDEDDescriptionEnum = 'Should be less than or equal to 999999999999999.99.'
type MAXVALUEEXCEEDEDIssueEnum = 'MAX_VALUE_EXCEEDED'

