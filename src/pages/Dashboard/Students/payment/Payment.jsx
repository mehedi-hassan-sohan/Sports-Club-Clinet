import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import StripeCheckout from 'react-stripe-checkout';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk);

const Payment = () => {
    return (
        <div>
            <h1>here is payment</h1>  
            <Elements  stripe={stripePromise}>
             <StripeCheckout></StripeCheckout>
    </Elements> 
    
        
        </div>
    );
};

export default Payment;