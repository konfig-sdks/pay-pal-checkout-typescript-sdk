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
 * @interface TOKENEXPIRED
 */
export interface TOKENEXPIRED {
    /**
     * 
     * @type {string}
     * @memberof TOKENEXPIRED
     */
    'description'?: TOKENEXPIREDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof TOKENEXPIRED
     */
    'issue'?: TOKENEXPIREDIssueEnum;
}

type TOKENEXPIREDDescriptionEnum = 'The token is expired and cannot be used for payment.'
type TOKENEXPIREDIssueEnum = 'TOKEN_EXPIRED'


