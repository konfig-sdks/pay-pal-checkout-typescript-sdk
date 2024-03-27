<div align="left">

[![Visit Paypal](./header.png)](https://www.paypal.com&#x2F;)

# [Paypal](https://www.paypal.com&#x2F;)<a id="paypal"></a>

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`paypalcheckout.orders.addTrackingInformation`](#paypalcheckoutordersaddtrackinginformation)
  * [`paypalcheckout.orders.authorizePaymentOrder`](#paypalcheckoutordersauthorizepaymentorder)
  * [`paypalcheckout.orders.capturePayment`](#paypalcheckoutorderscapturepayment)
  * [`paypalcheckout.orders.confirmPaymentSource`](#paypalcheckoutordersconfirmpaymentsource)
  * [`paypalcheckout.orders.createOrder`](#paypalcheckoutorderscreateorder)
  * [`paypalcheckout.orders.showDetails`](#paypalcheckoutordersshowdetails)
  * [`paypalcheckout.orders.updateOrderStatus`](#paypalcheckoutordersupdateorderstatus)
  * [`paypalcheckout.trackers.updateTrackingInfo`](#paypalcheckouttrackersupdatetrackinginfo)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=PayPal&serviceName=Checkout&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { PayPalCheckout } from "pay-pal-checkout-typescript-sdk";

const paypalcheckout = new PayPalCheckout({
  // Defining the base path is optional and defaults to https://api-m.sandbox.paypal.com
  // basePath: "https://api-m.sandbox.paypal.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const addTrackingInformationResponse =
  await paypalcheckout.orders.addTrackingInformation({
    id: "8",
    transaction_id: "Cu2LC4aWwWL9Y864DZtaGR",
    tracking_number_type: "CARRIER_PROVIDED",
    status: "CANCELLED",
    carrier: "DPD_RU",
    notify_buyer: false,
    shipment_direction: "FORWARD",
    shipment_uploader: "MERCHANT",
    capture_id: "Cu2LC4aWwWL9Y864DZtaGR",
    notify_payer: false,
  });

console.log(addTrackingInformationResponse);
```

## Reference<a id="reference"></a>


### `paypalcheckout.orders.addTrackingInformation`<a id="paypalcheckoutordersaddtrackinginformation"></a>

Adds tracking information for an Order.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTrackingInformationResponse =
  await paypalcheckout.orders.addTrackingInformation({
    id: "8",
    transaction_id: "Cu2LC4aWwWL9Y864DZtaGR",
    tracking_number_type: "CARRIER_PROVIDED",
    status: "CANCELLED",
    carrier: "DPD_RU",
    notify_buyer: false,
    shipment_direction: "FORWARD",
    shipment_uploader: "MERCHANT",
    capture_id: "Cu2LC4aWwWL9Y864DZtaGR",
    notify_payer: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the order that the tracking information is associated with.

##### transaction_id: `string`<a id="transaction_id-string"></a>

The PayPal transaction ID.

##### tracking_number: `string`<a id="tracking_number-string"></a>

The tracking number for the shipment. This property supports Unicode.

##### tracking_number_type: [`ShipmentTrackingNumberType`](./models/shipment-tracking-number-type.ts)<a id="tracking_number_type-shipmenttrackingnumbertypemodelsshipment-tracking-number-typets"></a>

The tracking number type.

##### status: [`ShipmentTrackingStatus`](./models/shipment-tracking-status.ts)<a id="status-shipmenttrackingstatusmodelsshipment-tracking-statusts"></a>

The status of the item shipment. For allowed values, see <a href=\\\"/docs/tracking/reference/shipping-status/\\\">Shipping Statuses</a>.

##### shipment_date: `string`<a id="shipment_date-string"></a>

The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.

##### carrier: [`ShipmentCarrier`](./models/shipment-carrier.ts)<a id="carrier-shipmentcarriermodelsshipment-carrierts"></a>

The carrier for the shipment. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href=\\\"/docs/tracking/reference/carriers/\\\">Carriers</a>.

##### carrier_name_other: `string`<a id="carrier_name_other-string"></a>

The name of the carrier for the shipment. Provide this value only if the carrier parameter is OTHER. This property supports Unicode.

##### postage_payment_id: `string`<a id="postage_payment_id-string"></a>

The postage payment ID. This property supports Unicode.

##### notify_buyer: `boolean`<a id="notify_buyer-boolean"></a>

If true, sends an email notification to the buyer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.

##### quantity: `number`<a id="quantity-number"></a>

The quantity of items shipped.

##### tracking_number_validated: `boolean`<a id="tracking_number_validated-boolean"></a>

Indicates whether the carrier validated the tracking number.

##### last_updated_time: `string`<a id="last_updated_time-string"></a>

The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>

##### shipment_direction: `string`<a id="shipment_direction-string"></a>

To denote whether the shipment is sent forward to the receiver or returned back.

##### shipment_uploader: `string`<a id="shipment_uploader-string"></a>

To denote which party uploaded the shipment tracking info.

##### capture_id: `string`<a id="capture_id-string"></a>

The PayPal capture ID.

##### notify_payer: `boolean`<a id="notify_payer-boolean"></a>

If true, sends an email notification to the payer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.

##### items: [`TrackerItem`](./models/tracker-item.ts)[]<a id="items-trackeritemmodelstracker-itemts"></a>

An array of details of items in the shipment.

##### PayPalAuthAssertion: `string`<a id="paypalauthassertion-string"></a>

An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href=\"/api/rest/requests/#paypal-auth-assertion\">PayPal-Auth-Assertion</a>.

#### 🔄 Return<a id="🔄-return"></a>

[Order](./models/order.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders/{id}/track` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalcheckout.orders.authorizePaymentOrder`<a id="paypalcheckoutordersauthorizepaymentorder"></a>

Authorizes payment for an order. To successfully authorize payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="/api/rest/reference/orders/v2/errors/#authorize-order">Orders v2 errors</a>.</blockquote>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizePaymentOrderResponse =
  await paypalcheckout.orders.authorizePaymentOrder({
    prefer: "return=minimal",
    id: "8",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the order that the tracking information is associated with.

##### payment_source: [`PaymentSource`](./models/payment-source.ts)<a id="payment_source-paymentsourcemodelspayment-sourcets"></a>

##### PayPalRequestId: `string`<a id="paypalrequestid-string"></a>

The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

##### PayPalClientMetadataId: `string`<a id="paypalclientmetadataid-string"></a>

##### PayPalAuthAssertion: `string`<a id="paypalauthassertion-string"></a>

An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href=\"/api/rest/requests/#paypal-auth-assertion\">PayPal-Auth-Assertion</a>.

#### 🔄 Return<a id="🔄-return"></a>

[OrderAuthorizeResponse](./models/order-authorize-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders/{id}/authorize` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalcheckout.orders.capturePayment`<a id="paypalcheckoutorderscapturepayment"></a>

Captures payment for an order. To successfully capture payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="/api/rest/reference/orders/v2/errors/#capture-order">Orders v2 errors</a>.</blockquote>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const capturePaymentResponse = await paypalcheckout.orders.capturePayment({
  prefer: "return=minimal",
  id: "8",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the order that the tracking information is associated with.

##### payment_source: [`PaymentSource`](./models/payment-source.ts)<a id="payment_source-paymentsourcemodelspayment-sourcets"></a>

##### PayPalRequestId: `string`<a id="paypalrequestid-string"></a>

The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

##### PayPalClientMetadataId: `string`<a id="paypalclientmetadataid-string"></a>

##### PayPalAuthAssertion: `string`<a id="paypalauthassertion-string"></a>

An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href=\"/api/rest/requests/#paypal-auth-assertion\">PayPal-Auth-Assertion</a>.

#### 🔄 Return<a id="🔄-return"></a>

[Order](./models/order.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders/{id}/capture` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalcheckout.orders.confirmPaymentSource`<a id="paypalcheckoutordersconfirmpaymentsource"></a>

Payer confirms their intent to pay for the the Order with the given payment source.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const confirmPaymentSourceResponse =
  await paypalcheckout.orders.confirmPaymentSource({
    id: "8",
    prefer: "return=minimal",
    payment_source: {},
    processing_instruction: "NO_INSTRUCTION",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payment_source: [`PaymentSource`](./models/payment-source.ts)<a id="payment_source-paymentsourcemodelspayment-sourcets"></a>

##### id: `string`<a id="id-string"></a>

The ID of the order that the tracking information is associated with.

##### processing_instruction: [`ProcessingInstruction`](./models/processing-instruction.ts)<a id="processing_instruction-processinginstructionmodelsprocessing-instructionts"></a>

The instruction to process an order.

##### application_context: [`OrderConfirmApplicationContext`](./models/order-confirm-application-context.ts)<a id="application_context-orderconfirmapplicationcontextmodelsorder-confirm-application-contextts"></a>

##### PayPalClientMetadataId: `string`<a id="paypalclientmetadataid-string"></a>

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

#### 🔄 Return<a id="🔄-return"></a>

[Order](./models/order.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders/{id}/confirm-payment-source` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalcheckout.orders.createOrder`<a id="paypalcheckoutorderscreateorder"></a>

Creates an order. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="/api/rest/reference/orders/v2/errors/#create-order">Orders v2 errors</a>.</blockquote>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrderResponse = await paypalcheckout.orders.createOrder({
  prefer: "return=minimal",
  intent: "CAPTURE",
  purchase_units: [
    {
      amount: {},
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### intent: [`CheckoutPaymentIntent`](./models/checkout-payment-intent.ts)<a id="intent-checkoutpaymentintentmodelscheckout-payment-intentts"></a>

The intent to either capture payment immediately or authorize a payment for an order after order creation.

##### purchase_units: [`PurchaseUnitRequest`](./models/purchase-unit-request.ts)[]<a id="purchase_units-purchaseunitrequestmodelspurchase-unit-requestts"></a>

An array of purchase units. Each purchase unit establishes a contract between a payer and the payee. Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.

##### payer: [`Payer`](./models/payer.ts)<a id="payer-payermodelspayerts"></a>

##### payment_source: [`PaymentSource`](./models/payment-source.ts)<a id="payment_source-paymentsourcemodelspayment-sourcets"></a>

##### application_context: [`OrderApplicationContext`](./models/order-application-context.ts)<a id="application_context-orderapplicationcontextmodelsorder-application-contextts"></a>

##### PayPalRequestId: `string`<a id="paypalrequestid-string"></a>

The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.

##### PayPalPartnerAttributionId: `string`<a id="paypalpartnerattributionid-string"></a>

##### PayPalClientMetadataId: `string`<a id="paypalclientmetadataid-string"></a>

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

#### 🔄 Return<a id="🔄-return"></a>

[Order](./models/order.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalcheckout.orders.showDetails`<a id="paypalcheckoutordersshowdetails"></a>

Shows details for an order, by ID.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="/api/rest/reference/orders/v2/errors/#get-order">Orders v2 errors</a>.</blockquote>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await paypalcheckout.orders.showDetails({
  id: "8",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the order that the tracking information is associated with.

##### fields: `string`<a id="fields-string"></a>

A comma-separated list of fields that should be returned for the order. Valid filter field is `payment_source`.

#### 🔄 Return<a id="🔄-return"></a>

[Order](./models/order.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalcheckout.orders.updateOrderStatus`<a id="paypalcheckoutordersupdateorderstatus"></a>

Updates an order with a `CREATED` or `APPROVED` status. You cannot update an order with the `COMPLETED` status.<br/><br/>To make an update, you must provide a `reference_id`. If you omit this value with an order that contains only one purchase unit, PayPal sets the value to `default` which enables you to use the path: <code>\"/purchase_units/@reference_id=='default'/{attribute-or-object}\"</code>. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href=\"/api/rest/reference/orders/v2/errors/#patch-order\">Orders v2 errors</a>.</blockquote>Patchable attributes or objects:<br/><br/><table><thead><th>Attribute</th><th>Op</th><th>Notes</th></thead><tbody><tr><td><code>intent</code></td><td>replace</td><td></td></tr><tr><td><code>payer</code></td><td>replace, add</td><td>Using replace op for <code>payer</code> will replace the whole <code>payer</code> object with the value sent in request.</td></tr><tr><td><code>purchase_units</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].custom_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].description</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payee.email</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].shipping.name</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.address</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.type</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].soft_descriptor</code></td><td>replace, remove</td><td></td></tr><tr><td><code>purchase_units[].amount</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].items</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].invoice_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction.disbursement_mode</code></td><td>replace</td><td>By default, <code>disbursement_mode</code> is <code>INSTANT</code>.</td></tr><tr><td><code>purchase_units[].payment_instruction.platform_fees</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.airline</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.card</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>application_context.client_configuration</code></td><td>replace, add</td><td></td></tr></tbody></table>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOrderStatusResponse = await paypalcheckout.orders.updateOrderStatus(
  {
    id: "8",
    requestBody: [
      {
        op: "add",
      },
    ],
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the order that the tracking information is associated with.

##### requestBody: [`Patch`](./models/patch.ts)[]<a id="requestbody-patchmodelspatchts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalcheckout.trackers.updateTrackingInfo`<a id="paypalcheckouttrackersupdatetrackinginfo"></a>

Updates or cancels the tracking information for a PayPal order, by ID. Updatable attributes or objects:<br/><br/><table><thead><th>Attribute</th><th>Op</th><th>Notes</th></thead><tbody></tr><tr><td><code>items</code></td><td>replace</td><td>Using replace op for <code>items</code> will replace the entire <code>items</code> object with the value sent in request.</td></tr><tr><td><code>notify_payer</code></td><td>replace, add</td><td></td></tr><tr><td><code>status</code></td><td>replace</td><td>Only patching status to CANCELLED is currently supported.</td></tr></tbody></table>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTrackingInfoResponse =
  await paypalcheckout.trackers.updateTrackingInfo({
    id: "8",
    trackerId: "8",
    requestBody: [
      {
        op: "replace",
        path: "/purchase_units/@reference_id=='PUHF'/shipping/address",
        value: {
          address_line_1: "2211 N First Street",
          address_line_2: "Building 17",
          admin_area_2: "San Jose",
          admin_area_1: "CA",
          postal_code: "95131",
          country_code: "US",
        },
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the order that the tracking information is associated with.

##### trackerId: `string`<a id="trackerid-string"></a>

The order tracking ID.

##### requestBody: [`Patch`](./models/patch.ts)[]<a id="requestbody-patchmodelspatchts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout/orders/{id}/trackers/{tracker_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
