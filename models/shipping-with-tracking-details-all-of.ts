/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Tracker } from './tracker';

/**
 * 
 * @export
 * @interface ShippingWithTrackingDetailsAllOf
 */
export interface ShippingWithTrackingDetailsAllOf {
    /**
     * An array of trackers for a transaction.
     * @type {Array<Tracker>}
     * @memberof ShippingWithTrackingDetailsAllOf
     */
    'trackers'?: Array<Tracker>;
}

