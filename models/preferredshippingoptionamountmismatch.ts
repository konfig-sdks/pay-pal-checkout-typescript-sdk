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
 * @interface PREFERREDSHIPPINGOPTIONAMOUNTMISMATCH
 */
export interface PREFERREDSHIPPINGOPTIONAMOUNTMISMATCH {
    /**
     * 
     * @type {string}
     * @memberof PREFERREDSHIPPINGOPTIONAMOUNTMISMATCH
     */
    'description'?: PREFERREDSHIPPINGOPTIONAMOUNTMISMATCHDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PREFERREDSHIPPINGOPTIONAMOUNTMISMATCH
     */
    'issue'?: PREFERREDSHIPPINGOPTIONAMOUNTMISMATCHIssueEnum;
}

type PREFERREDSHIPPINGOPTIONAMOUNTMISMATCHDescriptionEnum = 'The amount provided in the preferred shipping option should match the amount provided in amount breakdown'
type PREFERREDSHIPPINGOPTIONAMOUNTMISMATCHIssueEnum = 'PREFERRED_SHIPPING_OPTION_AMOUNT_MISMATCH'


