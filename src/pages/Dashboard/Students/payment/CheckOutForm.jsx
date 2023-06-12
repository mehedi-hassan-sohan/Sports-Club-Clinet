import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOutForm = ({data}) => {
  const stripe = useStripe();
  const {user} =useContext(AuthContext)
  const elements = useElements();
  const [cardError, setCardError] = useState(''); 
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

useEffect(() => {

 if(data?.price>0) {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ price:data.price })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.clientSecret);
      setClientSecret(data.clientSecret);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
},[data?.price] );



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message);
    }   

    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  ); 

  if (confirmError) {
    console.log(confirmError);
}

console.log('payment intent', paymentIntent)  
setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);   
            const payment ={email:user?.email, 
              transactionId:paymentIntent.id,
            price:data?.price,
            item:data?.title,
            image:data?.image
            
           }  
           
           fetch('http://localhost:5000/payments', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(payment)
           })
             .then(response => response.json())
             .then(data => {
               console.log(data);
               if (data.insertedId) {
                 Swal.fire({
                   icon: 'success',
                   title: 'Payment Successful',
                   text: 'Thank you for your purchase!',
                 });
               }
             })
             .catch(error => {
               console.error('Error:', error);
             });
   };  
          } 
  

  return (
    <form className="w-2/3 m-8" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {cardError && <p className="text-red-500 mt-2">{cardError}</p>} 
     
      <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
      {transactionId && <p className="text-green-500 text-md w-full">Transaction complete with transactionId: {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
