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
 * @interface NOTELIGIBLEFORPNREFPROCESSING
 */
export interface NOTELIGIBLEFORPNREFPROCESSING {
    /**
     * 
     * @type {string}
     * @memberof NOTELIGIBLEFORPNREFPROCESSING
     */
    'description'?: NOTELIGIBLEFORPNREFPROCESSINGDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof NOTELIGIBLEFORPNREFPROCESSING
     */
    'issue'?: NOTELIGIBLEFORPNREFPROCESSINGIssueEnum;
}

type NOTELIGIBLEFORPNREFPROCESSINGDescriptionEnum = 'API caller is not enabled to process payments with the `pnref`. Please contact customer support to request permissions to process transactions with PNREF.'
type NOTELIGIBLEFORPNREFPROCESSINGIssueEnum = 'NOT_ELIGIBLE_FOR_PNREF_PROCESSING'


