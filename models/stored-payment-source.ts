/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NetworkTransactionReference } from './network-transaction-reference';
import { PaymentInitiator } from './payment-initiator';
import { StoredPaymentSourcePaymentType } from './stored-payment-source-payment-type';
import { StoredPaymentSourceUsageType } from './stored-payment-source-usage-type';

/**
 * Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul>
 * @export
 * @interface StoredPaymentSource
 */
export interface StoredPaymentSource {
    /**
     * The person or party who initiated or triggered the payment.
     * @type {PaymentInitiator}
     * @memberof StoredPaymentSource
     */
    'payment_initiator': PaymentInitiator;
    /**
     * Indicates the type of the stored payment_source payment.
     * @type {StoredPaymentSourcePaymentType}
     * @memberof StoredPaymentSource
     */
    'payment_type': StoredPaymentSourcePaymentType;
    /**
     * Indicates if this is a `first` or `subsequent` payment using a stored payment source (also referred to as stored credential or card on file).
     * @type {StoredPaymentSourceUsageType}
     * @memberof StoredPaymentSource
     */
    'usage'?: StoredPaymentSourceUsageType;
    /**
     * 
     * @type {NetworkTransactionReference}
     * @memberof StoredPaymentSource
     */
    'previous_network_transaction_reference'?: NetworkTransactionReference;
}

