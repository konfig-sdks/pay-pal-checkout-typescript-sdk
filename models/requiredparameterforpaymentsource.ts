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
 * @interface REQUIREDPARAMETERFORPAYMENTSOURCE
 */
export interface REQUIREDPARAMETERFORPAYMENTSOURCE {
    /**
     * 
     * @type {string}
     * @memberof REQUIREDPARAMETERFORPAYMENTSOURCE
     */
    'description'?: REQUIREDPARAMETERFORPAYMENTSOURCEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof REQUIREDPARAMETERFORPAYMENTSOURCE
     */
    'issue'?: REQUIREDPARAMETERFORPAYMENTSOURCEIssueEnum;
}

type REQUIREDPARAMETERFORPAYMENTSOURCEDescriptionEnum = 'The parameter is required for provided payment source.'
type REQUIREDPARAMETERFORPAYMENTSOURCEIssueEnum = 'REQUIRED_PARAMETER_FOR_PAYMENT_SOURCE'

