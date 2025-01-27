/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StoreInVaultInstruction } from './store-in-vault-instruction';

/**
 * Basic vault instruction specification that can be extended by specific payment sources that supports vaulting.
 * @export
 * @interface VaultInstructionBase
 */
export interface VaultInstructionBase {
    /**
     * Defines how and when the payment source gets vaulted.
     * @type {StoreInVaultInstruction}
     * @memberof VaultInstructionBase
     */
    'store_in_vault'?: StoreInVaultInstruction;
}

