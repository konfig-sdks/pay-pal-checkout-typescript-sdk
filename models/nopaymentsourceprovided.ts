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
 * @interface NOPAYMENTSOURCEPROVIDED
 */
export interface NOPAYMENTSOURCEPROVIDED {
    /**
     * 
     * @type {string}
     * @memberof NOPAYMENTSOURCEPROVIDED
     */
    'description'?: NOPAYMENTSOURCEPROVIDEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof NOPAYMENTSOURCEPROVIDED
     */
    'issue'?: NOPAYMENTSOURCEPROVIDEDIssueEnum;
}

type NOPAYMENTSOURCEPROVIDEDDescriptionEnum = 'At least one payment method is required within the payment source.'
type NOPAYMENTSOURCEPROVIDEDIssueEnum = 'NO_PAYMENT_SOURCE_PROVIDED'


