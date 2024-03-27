/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface NOTPATCHABLE
 */
export interface NOTPATCHABLE {
    /**
     * 
     * @type {string}
     * @memberof NOTPATCHABLE
     */
    'description'?: NOTPATCHABLEDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof NOTPATCHABLE
     */
    'issue'?: NOTPATCHABLEIssueEnum;
}

type NOTPATCHABLEDescriptionEnum = 'Cannot be patched.'
type NOTPATCHABLEIssueEnum = 'NOT_PATCHABLE'


