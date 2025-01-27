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
 * @interface INVALIDPATCHOPERATION
 */
export interface INVALIDPATCHOPERATION {
    /**
     * 
     * @type {string}
     * @memberof INVALIDPATCHOPERATION
     */
    'description'?: INVALIDPATCHOPERATIONDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof INVALIDPATCHOPERATION
     */
    'issue'?: INVALIDPATCHOPERATIONIssueEnum;
}

type INVALIDPATCHOPERATIONDescriptionEnum = 'The operation cannot be honored. Cannot add a property that\'s already present, use replace. Cannot remove a property thats not present, use add. Cannot replace a property thats not present, use add.'
type INVALIDPATCHOPERATIONIssueEnum = 'INVALID_PATCH_OPERATION'


