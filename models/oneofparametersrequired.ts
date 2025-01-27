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
 * @interface ONEOFPARAMETERSREQUIRED
 */
export interface ONEOFPARAMETERSREQUIRED {
    /**
     * 
     * @type {string}
     * @memberof ONEOFPARAMETERSREQUIRED
     */
    'description'?: ONEOFPARAMETERSREQUIREDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof ONEOFPARAMETERSREQUIRED
     */
    'issue'?: ONEOFPARAMETERSREQUIREDIssueEnum;
}

type ONEOFPARAMETERSREQUIREDDescriptionEnum = 'One or more field is required to continue with this request.'
type ONEOFPARAMETERSREQUIREDIssueEnum = 'ONE_OF_PARAMETERS_REQUIRED'


