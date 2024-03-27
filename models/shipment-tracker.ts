/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ShipmentCarrier } from './shipment-carrier';
import { ShipmentTrackingNumberType } from './shipment-tracking-number-type';
import { ShipmentTrackingStatus } from './shipment-tracking-status';

/**
 * The tracking information for a shipment.
 * @export
 * @interface ShipmentTracker
 */
export interface ShipmentTracker {
    /**
     * The PayPal transaction ID.
     * @type {string}
     * @memberof ShipmentTracker
     */
    'transaction_id': string;
    /**
     * The tracking number for the shipment. This property supports Unicode.
     * @type {string}
     * @memberof ShipmentTracker
     */
    'tracking_number'?: string;
    /**
     * The tracking number type.
     * @type {ShipmentTrackingNumberType}
     * @memberof ShipmentTracker
     */
    'tracking_number_type'?: ShipmentTrackingNumberType;
    /**
     * The status of the item shipment. For allowed values, see <a href=\"/docs/tracking/reference/shipping-status/\">Shipping Statuses</a>.
     * @type {ShipmentTrackingStatus}
     * @memberof ShipmentTracker
     */
    'status': ShipmentTrackingStatus;
    /**
     * The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.
     * @type {string}
     * @memberof ShipmentTracker
     */
    'shipment_date'?: string;
    /**
     * The carrier for the shipment. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href=\"/docs/tracking/reference/carriers/\">Carriers</a>.
     * @type {ShipmentCarrier}
     * @memberof ShipmentTracker
     */
    'carrier'?: ShipmentCarrier;
    /**
     * The name of the carrier for the shipment. Provide this value only if the carrier parameter is OTHER. This property supports Unicode.
     * @type {string}
     * @memberof ShipmentTracker
     */
    'carrier_name_other'?: string;
    /**
     * The postage payment ID. This property supports Unicode.
     * @type {string}
     * @memberof ShipmentTracker
     */
    'postage_payment_id'?: string;
    /**
     * If true, sends an email notification to the buyer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.
     * @type {boolean}
     * @memberof ShipmentTracker
     */
    'notify_buyer'?: boolean;
    /**
     * The quantity of items shipped.
     * @type {number}
     * @memberof ShipmentTracker
     */
    'quantity'?: number;
    /**
     * Indicates whether the carrier validated the tracking number.
     * @type {boolean}
     * @memberof ShipmentTracker
     */
    'tracking_number_validated'?: boolean;
    /**
     * The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>
     * @type {string}
     * @memberof ShipmentTracker
     */
    'last_updated_time'?: string;
    /**
     * To denote whether the shipment is sent forward to the receiver or returned back.
     * @type {string}
     * @memberof ShipmentTracker
     */
    'shipment_direction'?: ShipmentTrackerShipmentDirectionEnum;
    /**
     * To denote which party uploaded the shipment tracking info.
     * @type {string}
     * @memberof ShipmentTracker
     */
    'shipment_uploader'?: ShipmentTrackerShipmentUploaderEnum;
}

type ShipmentTrackerShipmentDirectionEnum = 'FORWARD' | 'RETURN'
type ShipmentTrackerShipmentUploaderEnum = 'MERCHANT' | 'CONSUMER' | 'PARTNER'

