/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ShippingDetail } from './shipping-detail';

/**
 * 
 * @export
 * @interface VaultPaypalWalletBaseAllOf
 */
export interface VaultPaypalWalletBaseAllOf {
    /**
     * The description displayed to PayPal consumer on the approval flow for PayPal, as well as on the PayPal payment token management experience on PayPal.com.
     * @type {string}
     * @memberof VaultPaypalWalletBaseAllOf
     */
    'description'?: string;
    /**
     * Expected business/pricing model for the billing agreement.
     * @type {string}
     * @memberof VaultPaypalWalletBaseAllOf
     */
    'usage_pattern'?: VaultPaypalWalletBaseAllOfUsagePatternEnum;
    /**
     * 
     * @type {ShippingDetail}
     * @memberof VaultPaypalWalletBaseAllOf
     */
    'shipping'?: ShippingDetail;
    /**
     * The usage type associated with the PayPal payment token.
     * @type {string}
     * @memberof VaultPaypalWalletBaseAllOf
     */
    'usage_type'?: VaultPaypalWalletBaseAllOfUsageTypeEnum;
    /**
     * 
     * @type {any}
     * @memberof VaultPaypalWalletBaseAllOf
     */
    'owner_id'?: any;
    /**
     * The customer type associated with the PayPal payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.
     * @type {string}
     * @memberof VaultPaypalWalletBaseAllOf
     */
    'customer_type'?: VaultPaypalWalletBaseAllOfCustomerTypeEnum;
    /**
     * Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.
     * @type {boolean}
     * @memberof VaultPaypalWalletBaseAllOf
     */
    'permit_multiple_payment_tokens'?: boolean;
}

type VaultPaypalWalletBaseAllOfUsagePatternEnum = 'IMMEDIATE' | 'DEFERRED' | 'RECURRING_PREPAID' | 'RECURRING_POSTPAID' | 'THRESHOLD_PREPAID' | 'THRESHOLD_POSTPAID'
type VaultPaypalWalletBaseAllOfUsageTypeEnum = 'MERCHANT' | 'PLATFORM'
type VaultPaypalWalletBaseAllOfCustomerTypeEnum = 'CONSUMER' | 'BUSINESS'


