/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ActivityTimestamps } from './activity-timestamps';
import { LinkDescription } from './link-description';
import { MerchantPayableBreakdown } from './merchant-payable-breakdown';
import { Money } from './money';
import { PayeeBase } from './payee-base';
import { RefundAllOf } from './refund-all-of';
import { RefundStatus } from './refund-status';
import { RefundStatusDetails } from './refund-status-details';

/**
 * @type Refund
 * The refund information.
 * @export
 */
export type Refund = ActivityTimestamps & RefundAllOf & RefundStatus;

