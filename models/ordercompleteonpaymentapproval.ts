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
 * @interface ORDERCOMPLETEONPAYMENTAPPROVAL
 */
export interface ORDERCOMPLETEONPAYMENTAPPROVAL {
    /**
     * 
     * @type {string}
     * @memberof ORDERCOMPLETEONPAYMENTAPPROVAL
     */
    'description'?: ORDERCOMPLETEONPAYMENTAPPROVALDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof ORDERCOMPLETEONPAYMENTAPPROVAL
     */
    'issue'?: ORDERCOMPLETEONPAYMENTAPPROVALIssueEnum;
}

type ORDERCOMPLETEONPAYMENTAPPROVALDescriptionEnum = 'A processing_instruction of `ORDER_COMPLETE_ON_PAYMENT_APPROVAL` is required for the specified payment_source. Please refer to the integration guide https://developer.paypal.com/docs/limited-release/alternative-payment-methods-with-orders/ for more details'
type ORDERCOMPLETEONPAYMENTAPPROVALIssueEnum = 'ORDER_COMPLETE_ON_PAYMENT_APPROVAL'


