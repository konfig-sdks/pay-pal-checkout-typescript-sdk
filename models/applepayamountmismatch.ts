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
 * @interface APPLEPAYAMOUNTMISMATCH
 */
export interface APPLEPAYAMOUNTMISMATCH {
    /**
     * 
     * @type {string}
     * @memberof APPLEPAYAMOUNTMISMATCH
     */
    'description'?: APPLEPAYAMOUNTMISMATCHDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof APPLEPAYAMOUNTMISMATCH
     */
    'issue'?: APPLEPAYAMOUNTMISMATCHIssueEnum;
}

type APPLEPAYAMOUNTMISMATCHDescriptionEnum = 'The \'amount\' specified in the Order should match the amount that was viewed and authorized by the payer/buyer on Apple Pay. If the amount has changed, please redirect the buyer to authorize the order again via Apple Pay.'
type APPLEPAYAMOUNTMISMATCHIssueEnum = 'APPLE_PAY_AMOUNT_MISMATCH'


