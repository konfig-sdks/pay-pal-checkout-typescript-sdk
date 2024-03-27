/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersTrackCreate403DetailsInner } from './orders-track-create403-details-inner';

/**
 * 
 * @export
 * @interface OrdersTrackersPatch403
 */
export interface OrdersTrackersPatch403 {
    /**
     * 
     * @type {Array<OrdersTrackCreate403DetailsInner>}
     * @memberof OrdersTrackersPatch403
     */
    'details'?: Array<OrdersTrackCreate403DetailsInner>;
}
