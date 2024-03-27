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
 * @interface PAYEEACCOUNTLOCKEDORCLOSED
 */
export interface PAYEEACCOUNTLOCKEDORCLOSED {
    /**
     * 
     * @type {string}
     * @memberof PAYEEACCOUNTLOCKEDORCLOSED
     */
    'description'?: PAYEEACCOUNTLOCKEDORCLOSEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PAYEEACCOUNTLOCKEDORCLOSED
     */
    'issue'?: PAYEEACCOUNTLOCKEDORCLOSEDIssueEnum;
}

type PAYEEACCOUNTLOCKEDORCLOSEDDescriptionEnum = 'The merchant account is locked or closed.'
type PAYEEACCOUNTLOCKEDORCLOSEDIssueEnum = 'PAYEE_ACCOUNT_LOCKED_OR_CLOSED'


