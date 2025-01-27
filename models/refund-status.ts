/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RefundStatusDetails } from './refund-status-details';

/**
 * The refund status.
 * @export
 * @interface RefundStatus
 */
export interface RefundStatus {
    /**
     * The status of the refund.
     * @type {string}
     * @memberof RefundStatus
     */
    'status'?: RefundStatusStatusEnum;
    /**
     * 
     * @type {RefundStatusDetails}
     * @memberof RefundStatus
     */
    'status_details'?: RefundStatusDetails;
}

type RefundStatusStatusEnum = 'CANCELLED' | 'FAILED' | 'PENDING' | 'COMPLETED'


