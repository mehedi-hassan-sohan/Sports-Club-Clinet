import React from 'react';
import { Link,  } from 'react-router-dom';

const Errors = () => {
    
    return (
        <div>
            
               <img className='img'  src='https://i.ibb.co/xHVWqcN/404-error-with-tired-person-concept-illustration-114360-7899.jpg' alt="" />
               <Link className='text-xl font-medium  bg-slate-800 hover:text-teal-300 duration-1000' to='/'> <button  className=' button-container btn mt-40  bg-emerald-700-800 '>Back To home</button></Link>
            




        </div>
    );
};

export default Errors;