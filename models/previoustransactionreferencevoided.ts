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
 * @interface PREVIOUSTRANSACTIONREFERENCEVOIDED
 */
export interface PREVIOUSTRANSACTIONREFERENCEVOIDED {
    /**
     * 
     * @type {string}
     * @memberof PREVIOUSTRANSACTIONREFERENCEVOIDED
     */
    'description'?: PREVIOUSTRANSACTIONREFERENCEVOIDEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PREVIOUSTRANSACTIONREFERENCEVOIDED
     */
    'issue'?: PREVIOUSTRANSACTIONREFERENCEVOIDEDIssueEnum;
}

type PREVIOUSTRANSACTIONREFERENCEVOIDEDDescriptionEnum = 'The status of authorization referenced by `previous_transaction_reference` is `VOIDED` and hence cannot be used for this order. Please use a `previous_transaction_reference` whose status is not `VOIDED`.'
type PREVIOUSTRANSACTIONREFERENCEVOIDEDIssueEnum = 'PREVIOUS_TRANSACTION_REFERENCE_VOIDED'

