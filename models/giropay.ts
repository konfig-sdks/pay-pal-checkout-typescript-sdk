/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information needed to pay using giropay.
 * @export
 * @interface Giropay
 */
export interface Giropay {
    /**
     * The full name representation like Mr J Smith.
     * @type {string}
     * @memberof Giropay
     */
    'name'?: string;
    /**
     * The [two-character ISO 3166-1 code](https://raw.githubusercontent.com) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>
     * @type {string}
     * @memberof Giropay
     */
    'country_code'?: string;
    /**
     * The business identification code (BIC). In payments systems, a BIC is used to identify a specific business, most commonly a bank.
     * @type {string}
     * @memberof Giropay
     */
    'bic'?: string;
}

