/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information used to pay using BLIK one-click flow.
 * @export
 * @interface BlikOneClick
 */
export interface BlikOneClick {
    /**
     * The 6-digit code used to authenticate a consumer within BLIK.
     * @type {string}
     * @memberof BlikOneClick
     */
    'auth_code'?: string;
    /**
     * The merchant generated, unique reference serving as a primary identifier for accounts connected between Blik and a merchant.
     * @type {string}
     * @memberof BlikOneClick
     */
    'consumer_reference': string;
    /**
     * A bank defined identifier used as a display name to allow the payer to differentiate between multiple registered bank accounts.
     * @type {string}
     * @memberof BlikOneClick
     */
    'alias_label'?: string;
    /**
     * A Blik-defined identifier for a specific Blik-enabled bank account that is associated with a given merchant. Used only in conjunction with a Consumer Reference.
     * @type {string}
     * @memberof BlikOneClick
     */
    'alias_key'?: string;
}
