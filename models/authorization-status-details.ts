/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The details of the authorized payment status.
 * @export
 * @interface AuthorizationStatusDetails
 */
export interface AuthorizationStatusDetails {
    /**
     * The reason why the authorized status is `PENDING`.
     * @type {string}
     * @memberof AuthorizationStatusDetails
     */
    'reason'?: AuthorizationStatusDetailsReasonEnum;
}

type AuthorizationStatusDetailsReasonEnum = 'PENDING_REVIEW'


