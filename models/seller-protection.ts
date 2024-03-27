/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).
 * @export
 * @interface SellerProtection
 */
export interface SellerProtection {
    /**
     * Indicates whether the transaction is eligible for seller protection. For information, see [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).
     * @type {string}
     * @memberof SellerProtection
     */
    'status'?: SellerProtectionStatusEnum;
    /**
     * An array of conditions that are covered for the transaction.
     * @type {Array<string>}
     * @memberof SellerProtection
     */
    'dispute_categories'?: Array<SellerProtectionDisputeCategoriesEnum>;
}

type SellerProtectionStatusEnum = 'ELIGIBLE' | 'PARTIALLY_ELIGIBLE' | 'NOT_ELIGIBLE'
type SellerProtectionDisputeCategoriesEnum = 'ITEM_NOT_RECEIVED' | 'UNAUTHORIZED_TRANSACTION'


