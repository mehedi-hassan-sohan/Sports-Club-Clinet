import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk);
const Payment = () => {   
  const data = useLoaderData();  
  const {title,image,description,price,instructor}  =data
   console.log(data);

  return (
    <div className='w-full'> 
    <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>
    
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div >  
    <h1 className='text-lg'>instructor:{instructor}</h1>
    <h2 className="card-title">Title{title}</h2>
    <p>Description: {description}</p> 
    <p className='text-xl'>Price:{price}</p>
    
  </div>
</div>
    
      
    </div>
  );
};

export default Payment;
