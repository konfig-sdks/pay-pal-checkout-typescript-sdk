/*
Orders

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

The version of the OpenAPI document: 2.13


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplePayRequest } from './apple-pay-request';
import { BancontactRequest } from './bancontact-request';
import { BlikRequest } from './blik-request';
import { CardRequest } from './card-request';
import { EpsRequest } from './eps-request';
import { GiropayRequest } from './giropay-request';
import { IdealRequest } from './ideal-request';
import { MybankRequest } from './mybank-request';
import { P24Request } from './p24-request';
import { PaypalWallet } from './paypal-wallet';
import { SofortRequest } from './sofort-request';
import { Token } from './token';
import { TrustlyRequest } from './trustly-request';
import { VenmoWalletRequest } from './venmo-wallet-request';

/**
 * The payment source definition.
 * @export
 * @interface PaymentSource
 */
export interface PaymentSource {
    /**
     * 
     * @type {CardRequest}
     * @memberof PaymentSource
     */
    'card'?: CardRequest;
    /**
     * 
     * @type {Token}
     * @memberof PaymentSource
     */
    'token'?: Token;
    /**
     * 
     * @type {PaypalWallet}
     * @memberof PaymentSource
     */
    'paypal'?: PaypalWallet;
    /**
     * 
     * @type {BancontactRequest}
     * @memberof PaymentSource
     */
    'bancontact'?: BancontactRequest;
    /**
     * 
     * @type {BlikRequest}
     * @memberof PaymentSource
     */
    'blik'?: BlikRequest;
    /**
     * 
     * @type {EpsRequest}
     * @memberof PaymentSource
     */
    'eps'?: EpsRequest;
    /**
     * 
     * @type {GiropayRequest}
     * @memberof PaymentSource
     */
    'giropay'?: GiropayRequest;
    /**
     * 
     * @type {IdealRequest}
     * @memberof PaymentSource
     */
    'ideal'?: IdealRequest;
    /**
     * 
     * @type {MybankRequest}
     * @memberof PaymentSource
     */
    'mybank'?: MybankRequest;
    /**
     * 
     * @type {P24Request}
     * @memberof PaymentSource
     */
    'p24'?: P24Request;
    /**
     * 
     * @type {SofortRequest}
     * @memberof PaymentSource
     */
    'sofort'?: SofortRequest;
    /**
     * 
     * @type {TrustlyRequest}
     * @memberof PaymentSource
     */
    'trustly'?: TrustlyRequest;
    /**
     * 
     * @type {ApplePayRequest}
     * @memberof PaymentSource
     */
    'apple_pay'?: ApplePayRequest;
    /**
     * 
     * @type {any}
     * @memberof PaymentSource
     */
    'google_pay'?: any;
    /**
     * 
     * @type {VenmoWalletRequest}
     * @memberof PaymentSource
     */
    'venmo'?: VenmoWalletRequest;
}

