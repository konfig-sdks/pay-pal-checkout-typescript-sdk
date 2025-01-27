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
 * @interface DUPLICATEINVOICEID
 */
export interface DUPLICATEINVOICEID {
    /**
     * 
     * @type {string}
     * @memberof DUPLICATEINVOICEID
     */
    'description'?: DUPLICATEINVOICEIDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof DUPLICATEINVOICEID
     */
    'issue'?: DUPLICATEINVOICEIDIssueEnum;
}

type DUPLICATEINVOICEIDDescriptionEnum = 'Duplicate Invoice ID detected. To avoid a potential duplicate transaction your account setting requires that Invoice Id be unique for each transaction.'
type DUPLICATEINVOICEIDIssueEnum = 'DUPLICATE_INVOICE_ID'


