/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Money } from './money';

/**
 * The level 2 card processing data collections. If your merchant account has been configured for Level 2 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 2 data for your business.
 * @export
 * @interface Level2CardProcessingData
 */
export interface Level2CardProcessingData {
    /**
     * Use this field to pass a purchase identification value of up to 12 ASCII characters for AIB and 17 ASCII characters for all other processors.
     * @type {string}
     * @memberof Level2CardProcessingData
     */
    'invoice_id'?: string;
    /**
     * 
     * @type {Money}
     * @memberof Level2CardProcessingData
     */
    'tax_total'?: Money;
}

