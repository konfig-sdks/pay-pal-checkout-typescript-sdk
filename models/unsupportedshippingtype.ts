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
 * @interface UNSUPPORTEDSHIPPINGTYPE
 */
export interface UNSUPPORTEDSHIPPINGTYPE {
    /**
     * 
     * @type {string}
     * @memberof UNSUPPORTEDSHIPPINGTYPE
     */
    'description'?: UNSUPPORTEDSHIPPINGTYPEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof UNSUPPORTEDSHIPPINGTYPE
     */
    'issue'?: UNSUPPORTEDSHIPPINGTYPEIssueEnum;
}

type UNSUPPORTEDSHIPPINGTYPEDescriptionEnum = 'The provided `shipping.type` is only supported for `application_context.shipping_preference`=`SET_PROVIDED_ADDRESS` or `NO_SHIPPING`.'
type UNSUPPORTEDSHIPPINGTYPEIssueEnum = 'UNSUPPORTED_SHIPPING_TYPE'

