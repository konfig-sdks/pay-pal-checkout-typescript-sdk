/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The tax ID of the customer. The customer is also known as the payer. Both `tax_id` and `tax_id_type` are required.
 * @export
 * @interface TaxInfo
 */
export interface TaxInfo {
    /**
     * The customer\'s tax ID value.
     * @type {string}
     * @memberof TaxInfo
     */
    'tax_id': string;
    /**
     * The customer\'s tax ID type.
     * @type {string}
     * @memberof TaxInfo
     */
    'tax_id_type': TaxInfoTaxIdTypeEnum;
}

type TaxInfoTaxIdTypeEnum = 'BR_CPF' | 'BR_CNPJ'


