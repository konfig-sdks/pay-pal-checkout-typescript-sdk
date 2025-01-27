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
 * The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.
 * @export
 * @interface Error404
 */
export interface Error404 {
    /**
     * 
     * @type {string}
     * @memberof Error404
     */
    'name'?: Error404NameEnum;
    /**
     * 
     * @type {string}
     * @memberof Error404
     */
    'message'?: Error404MessageEnum;
    /**
     * 
     * @type {Array<ErrorDetails>}
     * @memberof Error404
     */
    'details'?: Array<ErrorDetails>;
    /**
     * The PayPal internal ID. Used for correlation purposes.
     * @type {string}
     * @memberof Error404
     */
    'debug_id'?: string;
    /**
     * An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).
     * @type {Array<ErrorLinkDescription>}
     * @memberof Error404
     */
    'links'?: Array<ErrorLinkDescription>;
}

type Error404NameEnum = 'RESOURCE_NOT_FOUND'
type Error404MessageEnum = 'The specified resource does not exist.'


