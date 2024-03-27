/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ShippingDetail } from './shipping-detail';
import { StoreInVaultInstruction } from './store-in-vault-instruction';
import { VaultInstructionBase } from './vault-instruction-base';
import { VaultPaypalWalletBaseAllOf } from './vault-paypal-wallet-base-all-of';

/**
 * @type VaultPaypalWalletBase
 * Resource consolidating common request and response attributes for vaulting PayPal Wallet.
 * @export
 */
export type VaultPaypalWalletBase = VaultInstructionBase & VaultPaypalWalletBaseAllOf;

