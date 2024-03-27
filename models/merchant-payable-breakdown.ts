/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Money } from './money';
import { NetAmountBreakdownItem } from './net-amount-breakdown-item';
import { PlatformFee } from './platform-fee';

/**
 * The breakdown of the refund.
 * @export
 * @interface MerchantPayableBreakdown
 */
export interface MerchantPayableBreakdown {
    /**
     * 
     * @type {Money}
     * @memberof MerchantPayableBreakdown
     */
    'gross_amount'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof MerchantPayableBreakdown
     */
    'paypal_fee'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof MerchantPayableBreakdown
     */
    'paypal_fee_in_receivable_currency'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof MerchantPayableBreakdown
     */
    'net_amount'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof MerchantPayableBreakdown
     */
    'net_amount_in_receivable_currency'?: Money;
    /**
     * An array of platform or partner fees, commissions, or brokerage fees for the refund.
     * @type {Array<PlatformFee>}
     * @memberof MerchantPayableBreakdown
     */
    'platform_fees'?: Array<PlatformFee>;
    /**
     * An array of breakdown values for the net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the payee holds their funds.
     * @type {Array<NetAmountBreakdownItem>}
     * @memberof MerchantPayableBreakdown
     */
    'net_amount_breakdown'?: Array<NetAmountBreakdownItem>;
    /**
     * 
     * @type {Money}
     * @memberof MerchantPayableBreakdown
     */
    'total_refunded_amount'?: Money;
}
