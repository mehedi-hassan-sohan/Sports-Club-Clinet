import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk);

const Payment = () => {
    return (
        <div className='w-full'>
            <h1>here is payment</h1>  
            <Elements  stripe={stripePromise}>
           <CheckOutForm></CheckOutForm>
    </Elements> 
    
        
        </div>
    );
};

export default Payment;