/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersCapture422DetailsInner } from './orders-capture422-details-inner';

/**
 * 
 * @export
 * @interface OrdersCapture422
 */
export interface OrdersCapture422 {
    /**
     * 
     * @type {Array<OrdersCapture422DetailsInner>}
     * @memberof OrdersCapture422
     */
    'details'?: Array<OrdersCapture422DetailsInner>;
}

