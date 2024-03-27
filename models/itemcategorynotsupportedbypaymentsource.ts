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
 * @interface ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCE
 */
export interface ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCE {
    /**
     * 
     * @type {string}
     * @memberof ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCE
     */
    'description'?: ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCE
     */
    'issue'?: ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCEIssueEnum;
}

type ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCEDescriptionEnum = 'The provided payment source does not support provided item category.'
type ITEMCATEGORYNOTSUPPORTEDBYPAYMENTSOURCEIssueEnum = 'ITEM_CATEGORY_NOT_SUPPORTED_BY_PAYMENT_SOURCE'

