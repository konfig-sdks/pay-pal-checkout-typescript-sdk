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
 * @interface PERMISSIONDENIED
 */
export interface PERMISSIONDENIED {
    /**
     * 
     * @type {string}
     * @memberof PERMISSIONDENIED
     */
    'description'?: PERMISSIONDENIEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PERMISSIONDENIED
     */
    'issue'?: PERMISSIONDENIEDIssueEnum;
}

type PERMISSIONDENIEDDescriptionEnum = 'You do not have permission to access or perform operations on this resource.'
type PERMISSIONDENIEDIssueEnum = 'PERMISSION_DENIED'


