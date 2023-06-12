import React, { useEffect, useState } from 'react';

const MyEnrollClass = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/Payments')
      .then(response => response.json())
      .then(paymentData => {
        setPayments(paymentData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className='mb-12'>My enroll Classes</h1>
      {payments.map(payment => (
        <div   key={payment.transactionId} className=" grid grid-cols-2 ">
          <figure><img className='w-[300px] rounded-3xl' src={payment.image} /></figure>
          <div > 
            <h2 className='text-xl'>Email:{payment.email}</h2>
            <h2 className='text-lg' >Course Name {payment.item}</h2>
            <p className='text-lg'>Price: {payment.price}</p>  
             <h1 className='text-3xl text-green-700'>
                Enroll Successfully
             </h1> 

            
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyEnrollClass;
