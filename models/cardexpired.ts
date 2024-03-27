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
 * @interface CARDEXPIRED
 */
export interface CARDEXPIRED {
    /**
     * 
     * @type {string}
     * @memberof CARDEXPIRED
     */
    'description'?: CARDEXPIREDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof CARDEXPIRED
     */
    'issue'?: CARDEXPIREDIssueEnum;
}

type CARDEXPIREDDescriptionEnum = 'The card is expired'
type CARDEXPIREDIssueEnum = 'CARD_EXPIRED'

