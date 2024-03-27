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
 * @interface MULTIPLESHIPPINGADDRESSNOTSUPPORTED
 */
export interface MULTIPLESHIPPINGADDRESSNOTSUPPORTED {
    /**
     * 
     * @type {string}
     * @memberof MULTIPLESHIPPINGADDRESSNOTSUPPORTED
     */
    'description'?: MULTIPLESHIPPINGADDRESSNOTSUPPORTEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof MULTIPLESHIPPINGADDRESSNOTSUPPORTED
     */
    'issue'?: MULTIPLESHIPPINGADDRESSNOTSUPPORTEDIssueEnum;
}

type MULTIPLESHIPPINGADDRESSNOTSUPPORTEDDescriptionEnum = 'Multiple shipping addresses are not supported.'
type MULTIPLESHIPPINGADDRESSNOTSUPPORTEDIssueEnum = 'MULTIPLE_SHIPPING_ADDRESS_NOT_SUPPORTED'


