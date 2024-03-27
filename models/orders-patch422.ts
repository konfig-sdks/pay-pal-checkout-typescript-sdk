/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrdersPatch422DetailsInner } from './orders-patch422-details-inner';

/**
 * 
 * @export
 * @interface OrdersPatch422
 */
export interface OrdersPatch422 {
    /**
     * 
     * @type {Array<OrdersPatch422DetailsInner>}
     * @memberof OrdersPatch422
     */
    'details'?: Array<OrdersPatch422DetailsInner>;
}
