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
 * @interface VAULTINSTRUCTIONREQUIRED
 */
export interface VAULTINSTRUCTIONREQUIRED {
    /**
     * 
     * @type {string}
     * @memberof VAULTINSTRUCTIONREQUIRED
     */
    'description'?: VAULTINSTRUCTIONREQUIREDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof VAULTINSTRUCTIONREQUIRED
     */
    'issue'?: VAULTINSTRUCTIONREQUIREDIssueEnum;
}

type VAULTINSTRUCTIONREQUIREDDescriptionEnum = 'Vault instruction is required. Please use `vault.store_in_vault` to provide vault instruction.'
type VAULTINSTRUCTIONREQUIREDIssueEnum = 'VAULT_INSTRUCTION_REQUIRED'

