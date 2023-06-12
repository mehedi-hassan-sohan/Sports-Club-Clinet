import { loadStripe } from "@stripe/stripe-js";


import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData, useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk);

const Payment = () => {     
  

  const data = useLoaderData() 
  
  console.log(data);


 

  return (
    <div className='w-full'> 
    <Elements stripe={stripePromise}>
               <CheckOutForm data={data}></CheckOutForm>
            </Elements>
    
    
  </div>

  );
};

export default Payment;
