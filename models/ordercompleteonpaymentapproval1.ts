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
 * @interface ORDERCOMPLETEONPAYMENTAPPROVAL1
 */
export interface ORDERCOMPLETEONPAYMENTAPPROVAL1 {
    /**
     * 
     * @type {string}
     * @memberof ORDERCOMPLETEONPAYMENTAPPROVAL1
     */
    'description'?: ORDERCOMPLETEONPAYMENTAPPROVAL1DescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof ORDERCOMPLETEONPAYMENTAPPROVAL1
     */
    'issue'?: ORDERCOMPLETEONPAYMENTAPPROVAL1IssueEnum;
}

type ORDERCOMPLETEONPAYMENTAPPROVAL1DescriptionEnum = 'A processing_instruction of `ORDER_COMPLETE_ON_PAYMENT_APPROVAL` is required for the specified payment_source.'
type ORDERCOMPLETEONPAYMENTAPPROVAL1IssueEnum = 'ORDER_COMPLETE_ON_PAYMENT_APPROVAL'

