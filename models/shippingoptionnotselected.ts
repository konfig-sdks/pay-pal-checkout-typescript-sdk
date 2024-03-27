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
 * @interface SHIPPINGOPTIONNOTSELECTED
 */
export interface SHIPPINGOPTIONNOTSELECTED {
    /**
     * 
     * @type {string}
     * @memberof SHIPPINGOPTIONNOTSELECTED
     */
    'description'?: SHIPPINGOPTIONNOTSELECTEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof SHIPPINGOPTIONNOTSELECTED
     */
    'issue'?: SHIPPINGOPTIONNOTSELECTEDIssueEnum;
}

type SHIPPINGOPTIONNOTSELECTEDDescriptionEnum = 'At least one of the shipping.option should be set to \'selected = true\'.'
type SHIPPINGOPTIONNOTSELECTEDIssueEnum = 'SHIPPING_OPTION_NOT_SELECTED'


