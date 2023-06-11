import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';



const AddClassForm = () => { 
  const {user} = useContext(AuthContext)
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState(''); 



  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data to be sent to the backend
    const classData = {
      className,
      classImage,
      availableSeats,
      price,
      status: "pending"
    };  
    console.log(classData);

    // Send the data to the backend
    fetch('http://localhost:5000/students/instructors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(classData) 
    })
   
      .then(response => {
        if (response.ok) {
          // Operation successful
          console.log('Class added successfully.');
          // Reset the form fields
          setClassName('');
          setClassImage('');
          setAvailableSeats('');
          setPrice('');
        } else {
          // Handle errors
          console.log('Error adding class.');
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };
 
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a Class</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="className" className="block font-medium mb-1">Class Name</label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={event => setClassName(event.target.value)}
            className="w-full border-gray-300 border rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="classImage" className="block font-medium mb-1">Class Image</label>
          <input
            type="text"
            id="classImage"
            value={classImage}
            onChange={event => setClassImage(event.target.value)}
            className="w-full border-gray-300 border rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Instructor Name</label>
          {user ? (
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="w-full bg-gray-100 border-gray-300 border rounded py-2 px-3"
            />
          ) : (
            <></>
          )}
        </div>
       
        <div className="mb-4">
          <label className="block font-medium mb-1">Instructor Email</label>
          {user ? (
            <input
              type="text"
              value={user.email}
              readOnly
              className="w-full bg-gray-100 border-gray-300 border rounded py-2 px-3"
            />
          ) : (
            <></>
          )}
        </div>
       
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block font-medium mb-1">Available Seats</label>
          <input
            type="number"
            id="availableSeats"
            value={availableSeats}
            onChange={event => setAvailableSeats(event.target.value)}
            className="w-full border-gray-300 border rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={event => setPrice(event.target.value)}
            className="w-full border-gray-300 border rounded py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClassForm;
