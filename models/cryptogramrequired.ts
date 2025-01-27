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
 * @interface CRYPTOGRAMREQUIRED
 */
export interface CRYPTOGRAMREQUIRED {
    /**
     * 
     * @type {string}
     * @memberof CRYPTOGRAMREQUIRED
     */
    'description'?: CRYPTOGRAMREQUIREDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof CRYPTOGRAMREQUIRED
     */
    'issue'?: CRYPTOGRAMREQUIREDIssueEnum;
}

type CRYPTOGRAMREQUIREDDescriptionEnum = 'Cryptogram is required if authentication method is CRYPTOGRAM 3DS.'
type CRYPTOGRAMREQUIREDIssueEnum = 'CRYPTOGRAM_REQUIRED'


