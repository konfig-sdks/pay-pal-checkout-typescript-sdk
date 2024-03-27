/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaypalWalletCustomer } from './paypal-wallet-customer';
import { VaultPaypalWalletBase } from './vault-paypal-wallet-base';

/**
 * Additional attributes associated with the use of this PayPal Wallet.
 * @export
 * @interface PaypalWalletAttributes
 */
export interface PaypalWalletAttributes {
    /**
     * 
     * @type {PaypalWalletCustomer}
     * @memberof PaypalWalletAttributes
     */
    'customer'?: PaypalWalletCustomer;
    /**
     * 
     * @type {VaultPaypalWalletBase}
     * @memberof PaypalWalletAttributes
     */
    'vault'?: VaultPaypalWalletBase;
}

