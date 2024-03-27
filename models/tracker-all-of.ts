/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LinkDescription } from './link-description';
import { TrackerItem } from './tracker-item';

/**
 * 
 * @export
 * @interface TrackerAllOf
 */
export interface TrackerAllOf {
    /**
     * The tracker id.
     * @type {string}
     * @memberof TrackerAllOf
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof TrackerAllOf
     */
    'status'?: any;
    /**
     * An array of details of items in the shipment.
     * @type {Array<TrackerItem>}
     * @memberof TrackerAllOf
     */
    'items'?: Array<TrackerItem>;
    /**
     * An array of request-related HATEOAS links.
     * @type {Array<LinkDescription>}
     * @memberof TrackerAllOf
     */
    'links'?: Array<LinkDescription>;
}
