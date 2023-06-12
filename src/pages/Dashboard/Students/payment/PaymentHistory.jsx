import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(response => response.json())
            .then(data => {
                setPaymentHistory(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table p-48">
                <thead>
                    <tr>
                        
                        <td>Email</td> 
                         <td>item</td>
                        <th>Transaction ID</th>
                        <th>Amount</th> 

                    </tr>
                </thead>
                <tbody>
                    {paymentHistory.map(payment => (
                        <tr key={payment.transactionId}> 
                        
                            <td>{payment.email}</td>
                            <td>{payment.item}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;

