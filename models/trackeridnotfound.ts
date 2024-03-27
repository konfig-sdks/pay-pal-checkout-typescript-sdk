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
 * @interface TRACKERIDNOTFOUND
 */
export interface TRACKERIDNOTFOUND {
    /**
     * 
     * @type {string}
     * @memberof TRACKERIDNOTFOUND
     */
    'description'?: TRACKERIDNOTFOUNDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof TRACKERIDNOTFOUND
     */
    'issue'?: TRACKERIDNOTFOUNDIssueEnum;
}

type TRACKERIDNOTFOUNDDescriptionEnum = 'Specified tracker ID does not exist. Check the tracker ID and try again.'
type TRACKERIDNOTFOUNDIssueEnum = 'TRACKER_ID_NOT_FOUND'

