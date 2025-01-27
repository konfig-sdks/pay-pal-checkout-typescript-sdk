/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressPortable } from './address-portable';
import { LineItem } from './line-item';
import { Money } from './money';

/**
 * The level 3 card processing data collections, If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 3 data for your business.
 * @export
 * @interface Level3CardProcessingData
 */
export interface Level3CardProcessingData {
    /**
     * 
     * @type {Money}
     * @memberof Level3CardProcessingData
     */
    'shipping_amount'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Level3CardProcessingData
     */
    'duty_amount'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Level3CardProcessingData
     */
    'discount_amount'?: Money;
    /**
     * 
     * @type {AddressPortable}
     * @memberof Level3CardProcessingData
     */
    'shipping_address'?: AddressPortable;
    /**
     * Use this field to specify the postal code of the shipping location.
     * @type {string}
     * @memberof Level3CardProcessingData
     */
    'ships_from_postal_code'?: string;
    /**
     * A list of the items that were purchased with this payment. If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf.
     * @type {Array<LineItem>}
     * @memberof Level3CardProcessingData
     */
    'line_items'?: Array<LineItem>;
}

