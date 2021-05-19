import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PayButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Isu0CGx2zD1CBSVJDOSgi4qKS9aXPZmwU9WHtWgKheOpu0FMfjaXzI254eZd99rTtV6JUo5gSbdNp0wgJAFZCII004VNFOGVx';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay'
            name='gamershop Ltd.'
            currency="USD"
            billingAddress
            shippingAddress
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    );

};

export default PayButton;