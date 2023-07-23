import React from 'react'
import GooglePayButton from '@google-pay/button-react';
import { useDataStore } from '../../State/state';

export default function GooglePay(){

    const setSubscription = useDataStore(state => state.setSubscription)

    return(
        <div className='mb-5'>
            <p>Subscribe to view more posts</p>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                        },
                    },
                    ],
                    merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '0.10',
                    currencyCode: 'USD',
                    countryCode: 'US',
                    },
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}
                onPaymentAuthorized={paymentData => {
                    console.log(paymentData)
                    return setSubscription(true)
                }}
                buttonType="subscribe"
            />
        </div>
    )
}