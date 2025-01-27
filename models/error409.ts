/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ErrorDetails } from './error-details';
import { ErrorLinkDescription } from './error-link-description';

/**
 * The server has detected a conflict while processing this request.
 * @export
 * @interface Error409
 */
export interface Error409 {
    /**
     * 
     * @type {string}
     * @memberof Error409
     */
    'name'?: Error409NameEnum;
    /**
     * 
     * @type {string}
     * @memberof Error409
     */
    'message'?: Error409MessageEnum;
    /**
     * 
     * @type {Array<ErrorDetails>}
     * @memberof Error409
     */
    'details'?: Array<ErrorDetails>;
    /**
     * The PayPal internal ID. Used for correlation purposes.
     * @type {string}
     * @memberof Error409
     */
    'debug_id'?: string;
    /**
     * An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).
     * @type {Array<ErrorLinkDescription>}
     * @memberof Error409
     */
    'links'?: Array<ErrorLinkDescription>;
}

type Error409NameEnum = 'RESOURCE_CONFLICT'
type Error409MessageEnum = 'The server has detected a conflict while processing this request.'


