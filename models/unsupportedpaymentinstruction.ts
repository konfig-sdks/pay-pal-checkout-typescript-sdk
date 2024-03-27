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
 * @interface UNSUPPORTEDPAYMENTINSTRUCTION
 */
export interface UNSUPPORTEDPAYMENTINSTRUCTION {
    /**
     * 
     * @type {string}
     * @memberof UNSUPPORTEDPAYMENTINSTRUCTION
     */
    'description'?: UNSUPPORTEDPAYMENTINSTRUCTIONDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof UNSUPPORTEDPAYMENTINSTRUCTION
     */
    'issue'?: UNSUPPORTEDPAYMENTINSTRUCTIONIssueEnum;
}

type UNSUPPORTEDPAYMENTINSTRUCTIONDescriptionEnum = 'You must provide the payment instruction when you capture an authorized payment for `intent=AUTHORIZE`. For details, see <a href=\"/docs/api/payments/v2/#authorizations_capture\">Capture authorization</a>. For `intent=CAPTURE`, send the payment instruction when you create the order.'
type UNSUPPORTEDPAYMENTINSTRUCTIONIssueEnum = 'UNSUPPORTED_PAYMENT_INSTRUCTION'

