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
 * @interface CARDBRANDNOTSUPPORTED
 */
export interface CARDBRANDNOTSUPPORTED {
    /**
     * 
     * @type {string}
     * @memberof CARDBRANDNOTSUPPORTED
     */
    'description'?: CARDBRANDNOTSUPPORTEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof CARDBRANDNOTSUPPORTED
     */
    'issue'?: CARDBRANDNOTSUPPORTEDIssueEnum;
}

type CARDBRANDNOTSUPPORTEDDescriptionEnum = 'Processing of this card brand is not supported. Please use another card to continue with this transaction.'
type CARDBRANDNOTSUPPORTEDIssueEnum = 'CARD_BRAND_NOT_SUPPORTED'


