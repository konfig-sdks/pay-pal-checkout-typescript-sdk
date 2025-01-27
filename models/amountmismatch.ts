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
 * @interface AMOUNTMISMATCH
 */
export interface AMOUNTMISMATCH {
    /**
     * 
     * @type {string}
     * @memberof AMOUNTMISMATCH
     */
    'description'?: AMOUNTMISMATCHDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof AMOUNTMISMATCH
     */
    'issue'?: AMOUNTMISMATCHIssueEnum;
}

type AMOUNTMISMATCHDescriptionEnum = 'Should equal item_total + tax_total + shipping + handling + insurance - shipping_discount - discount.'
type AMOUNTMISMATCHIssueEnum = 'AMOUNT_MISMATCH'


