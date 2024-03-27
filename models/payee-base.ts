/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee.
 * @export
 * @interface PayeeBase
 */
export interface PayeeBase {
    /**
     * The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>
     * @type {string}
     * @memberof PayeeBase
     */
    'email_address'?: string;
    /**
     * The account identifier for a PayPal account.
     * @type {string}
     * @memberof PayeeBase
     */
    'merchant_id'?: string;
}

