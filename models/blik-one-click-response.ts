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
 * @interface BlikOneClickResponse
 */
export interface BlikOneClickResponse {
    /**
     * The merchant generated, unique reference serving as a primary identifier for accounts connected between Blik and a merchant.
     * @type {string}
     * @memberof BlikOneClickResponse
     */
    'consumer_reference'?: string;
}

