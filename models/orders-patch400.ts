/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersPatch400DetailsInner } from './orders-patch400-details-inner';

/**
 * 
 * @export
 * @interface OrdersPatch400
 */
export interface OrdersPatch400 {
    /**
     * 
     * @type {Array<OrdersPatch400DetailsInner>}
     * @memberof OrdersPatch400
     */
    'details'?: Array<OrdersPatch400DetailsInner>;
}

