import React from 'react'
import GooglePayButton from '@google-pay/button-react';
import { useDataStore } from '../../State/state';
import './Feed.css'

export default function GooglePay(){

    const setSubscription = useDataStore(state => state.setSubscription)

    return(
        <div className='mb-5' id='google-pay'>
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
                    merchantId: 'BCR2DN4TR2G3VOSN',
                    merchantName: 'ConnectVerse',
                    },
                    transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '0.01',
                    currencyCode: 'USD',
                    countryCode: 'US',
                    },
                }}
                onLoadPaymentData={paymentRequest => {
                    setSubscription(true)
                }}
                buttonType="subscribe"
            />
        </div>
    )
}