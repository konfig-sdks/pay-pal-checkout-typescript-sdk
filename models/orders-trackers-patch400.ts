/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersTrackersPatch400DetailsInner } from './orders-trackers-patch400-details-inner';

/**
 * 
 * @export
 * @interface OrdersTrackersPatch400
 */
export interface OrdersTrackersPatch400 {
    /**
     * 
     * @type {Array<OrdersTrackersPatch400DetailsInner>}
     * @memberof OrdersTrackersPatch400
     */
    'details'?: Array<OrdersTrackersPatch400DetailsInner>;
}

