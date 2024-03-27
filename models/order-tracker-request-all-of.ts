/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TrackerItem } from './tracker-item';

/**
 * 
 * @export
 * @interface OrderTrackerRequestAllOf
 */
export interface OrderTrackerRequestAllOf {
    /**
     * The PayPal capture ID.
     * @type {string}
     * @memberof OrderTrackerRequestAllOf
     */
    'capture_id': string;
    /**
     * If true, sends an email notification to the payer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.
     * @type {boolean}
     * @memberof OrderTrackerRequestAllOf
     */
    'notify_payer'?: boolean;
    /**
     * An array of details of items in the shipment.
     * @type {Array<TrackerItem>}
     * @memberof OrderTrackerRequestAllOf
     */
    'items'?: Array<TrackerItem>;
}

