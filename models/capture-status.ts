/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaptureStatusDetails } from './capture-status-details';

/**
 * The status of a captured payment.
 * @export
 * @interface CaptureStatus
 */
export interface CaptureStatus {
    /**
     * The status of the captured payment.
     * @type {string}
     * @memberof CaptureStatus
     */
    'status'?: CaptureStatusStatusEnum;
    /**
     * 
     * @type {CaptureStatusDetails}
     * @memberof CaptureStatus
     */
    'status_details'?: CaptureStatusDetails;
}

type CaptureStatusStatusEnum = 'COMPLETED' | 'DECLINED' | 'PARTIALLY_REFUNDED' | 'PENDING' | 'REFUNDED' | 'FAILED'

