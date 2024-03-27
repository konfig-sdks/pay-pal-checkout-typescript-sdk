/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DisbursementMode } from './disbursement-mode';
import { PlatformFee } from './platform-fee';

/**
 * Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order.
 * @export
 * @interface PaymentInstruction
 */
export interface PaymentInstruction {
    /**
     * An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability.
     * @type {Array<PlatformFee>}
     * @memberof PaymentInstruction
     */
    'platform_fees'?: Array<PlatformFee>;
    /**
     * The funds that are held on behalf of the merchant.
     * @type {DisbursementMode}
     * @memberof PaymentInstruction
     */
    'disbursement_mode'?: DisbursementMode;
    /**
     * This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction. The list of eligible \'payee_pricing_tier_id\' would be provided to you by your Account Manager. Specifying values other than the one provided to you by your account manager would result in an error.
     * @type {string}
     * @memberof PaymentInstruction
     */
    'payee_pricing_tier_id'?: string;
    /**
     * FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account.
     * @type {string}
     * @memberof PaymentInstruction
     */
    'payee_receivable_fx_rate_id'?: string;
}

