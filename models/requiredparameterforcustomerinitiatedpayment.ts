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
 * @interface REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENT
 */
export interface REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENT {
    /**
     * 
     * @type {string}
     * @memberof REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENT
     */
    'description'?: REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENTDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENT
     */
    'issue'?: REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENTIssueEnum;
}

type REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENTDescriptionEnum = 'This parameter is required when the customer is present. If the customer is not present, indicate so by sending payment_initiator=`MERCHANT`. For details, see <a href=\"https://developer.paypal.com/docs/api/orders/v2/#definition-card_stored_credential\">Stored Credential</a>.'
type REQUIREDPARAMETERFORCUSTOMERINITIATEDPAYMENTIssueEnum = 'REQUIRED_PARAMETER_FOR_CUSTOMER_INITIATED_PAYMENT'


