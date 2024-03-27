/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressPortable } from './address-portable';
import { Name } from './name';
import { ShippingDetail } from './shipping-detail';
import { ShippingOption } from './shipping-option';
import { ShippingWithTrackingDetailsAllOf } from './shipping-with-tracking-details-all-of';
import { Tracker } from './tracker';

/**
 * @type ShippingWithTrackingDetails
 * The order shipping details.
 * @export
 */
export type ShippingWithTrackingDetails = ShippingDetail & ShippingWithTrackingDetailsAllOf;

