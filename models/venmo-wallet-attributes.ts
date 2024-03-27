/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Customer } from './customer';
import { VaultVenmoWalletBase } from './vault-venmo-wallet-base';

/**
 * Additional attributes associated with the use of this Venmo Wallet.
 * @export
 * @interface VenmoWalletAttributes
 */
export interface VenmoWalletAttributes {
    /**
     * 
     * @type {Customer}
     * @memberof VenmoWalletAttributes
     */
    'customer'?: Customer;
    /**
     * 
     * @type {VaultVenmoWalletBase}
     * @memberof VenmoWalletAttributes
     */
    'vault'?: VaultVenmoWalletBase;
}

