/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersAuthorize422DetailsInner } from './orders-authorize422-details-inner';

/**
 * 
 * @export
 * @interface OrdersAuthorize422
 */
export interface OrdersAuthorize422 {
    /**
     * 
     * @type {Array<OrdersAuthorize422DetailsInner>}
     * @memberof OrdersAuthorize422
     */
    'details'?: Array<OrdersAuthorize422DetailsInner>;
}

