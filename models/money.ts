/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The currency and amount for a financial transaction, such as a balance or payment due.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * The [three-character ISO-4217 currency code](https://raw.githubusercontent.com) that identifies the currency.
     * @type {string}
     * @memberof Money
     */
    'currency_code': string;
    /**
     * The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](https://raw.githubusercontent.com).
     * @type {string}
     * @memberof Money
     */
    'value': string;
}

