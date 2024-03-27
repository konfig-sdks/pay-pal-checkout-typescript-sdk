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
 * @interface MISSINGREQUIREDPARAMETER
 */
export interface MISSINGREQUIREDPARAMETER {
    /**
     * 
     * @type {string}
     * @memberof MISSINGREQUIREDPARAMETER
     */
    'description'?: MISSINGREQUIREDPARAMETERDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof MISSINGREQUIREDPARAMETER
     */
    'issue'?: MISSINGREQUIREDPARAMETERIssueEnum;
}

type MISSINGREQUIREDPARAMETERDescriptionEnum = 'A required parameter is missing.'
type MISSINGREQUIREDPARAMETERIssueEnum = 'MISSING_REQUIRED_PARAMETER'


