/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Error422 } from './error422';
import { ErrorLinkDescription } from './error-link-description';
import { OrdersAuthorize422 } from './orders-authorize422';
import { OrdersAuthorize422DetailsInner } from './orders-authorize422-details-inner';

/**
 * @type OrdersAuthorizePaymentOrder422Response
 * @export
 */
export type OrdersAuthorizePaymentOrder422Response = Error422 & OrdersAuthorize422;

