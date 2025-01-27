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
 * Authentication failed due to missing Authorization header, or invalid authentication credentials.
 * @export
 * @interface Error401
 */
export interface Error401 {
    /**
     * 
     * @type {string}
     * @memberof Error401
     */
    'name'?: Error401NameEnum;
    /**
     * 
     * @type {string}
     * @memberof Error401
     */
    'message'?: Error401MessageEnum;
    /**
     * 
     * @type {Array<ErrorDetails>}
     * @memberof Error401
     */
    'details'?: Array<ErrorDetails>;
    /**
     * The PayPal internal ID. Used for correlation purposes.
     * @type {string}
     * @memberof Error401
     */
    'debug_id'?: string;
    /**
     * An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).
     * @type {Array<ErrorLinkDescription>}
     * @memberof Error401
     */
    'links'?: Array<ErrorLinkDescription>;
}

type Error401NameEnum = 'AUTHENTICATION_FAILURE'
type Error401MessageEnum = 'Authentication failed due to missing authorization header, or invalid authentication credentials.'


