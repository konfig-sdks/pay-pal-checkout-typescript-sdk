/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ErrorLinkDescription } from './error-link-description';

/**
 * The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.
 * @export
 * @interface Error503
 */
export interface Error503 {
    /**
     * 
     * @type {string}
     * @memberof Error503
     */
    'name'?: Error503NameEnum;
    /**
     * 
     * @type {string}
     * @memberof Error503
     */
    'message'?: Error503MessageEnum;
    /**
     * The PayPal internal ID. Used for correlation purposes.
     * @type {string}
     * @memberof Error503
     */
    'debug_id'?: string;
    /**
     * An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).
     * @type {Array<ErrorLinkDescription>}
     * @memberof Error503
     */
    'links'?: Array<ErrorLinkDescription>;
}

type Error503NameEnum = 'SERVICE_UNAVAILABLE'
type Error503MessageEnum = 'Service Unavailable.'


