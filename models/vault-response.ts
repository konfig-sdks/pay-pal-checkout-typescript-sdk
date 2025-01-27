/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Customer } from './customer';
import { LinkDescription } from './link-description';

/**
 * The details about a saved payment source.
 * @export
 * @interface VaultResponse
 */
export interface VaultResponse {
    /**
     * The PayPal-generated ID for the saved payment source.
     * @type {string}
     * @memberof VaultResponse
     */
    'id'?: string;
    /**
     * The vault status.
     * @type {string}
     * @memberof VaultResponse
     * @deprecated
     */
    'status'?: VaultResponseStatusEnum;
    /**
     * 
     * @type {Customer}
     * @memberof VaultResponse
     */
    'customer'?: Customer;
    /**
     * An array of request-related HATEOAS links.
     * @type {Array<LinkDescription>}
     * @memberof VaultResponse
     */
    'links'?: Array<LinkDescription>;
}

type VaultResponseStatusEnum = 'VAULTED' | 'CREATED' | 'APPROVED'


