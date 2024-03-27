/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrderConfirmApplicationContext } from './order-confirm-application-context';
import { PaymentSource } from './payment-source';
import { ProcessingInstruction } from './processing-instruction';

/**
 * Payer confirms the intent to pay for the Order using the provided payment source.
 * @export
 * @interface ConfirmOrderRequest
 */
export interface ConfirmOrderRequest {
    /**
     * 
     * @type {PaymentSource}
     * @memberof ConfirmOrderRequest
     */
    'payment_source': PaymentSource;
    /**
     * The instruction to process an order.
     * @type {ProcessingInstruction}
     * @memberof ConfirmOrderRequest
     */
    'processing_instruction'?: ProcessingInstruction;
    /**
     * 
     * @type {OrderConfirmApplicationContext}
     * @memberof ConfirmOrderRequest
     */
    'application_context'?: OrderConfirmApplicationContext;
}
