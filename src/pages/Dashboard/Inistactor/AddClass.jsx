import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../Provider/AuthProvider';
axios.defaults.baseURL = 'http://localhost:5000';

const AddClass = () => { 
  const {user} = useContext(AuthContext)  
  

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    students: '',
    instructor: '',
    available_seats: '',
    price: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/classes', formData);
      console.log(response.data); // handle the response as needed
      // reset form data
      setFormData({
        title: '',
        image: '',
        description: '',
        students: '',
        instructor: '',
        available_seats: '',
        price: ''
      });
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl mb-4">Add Class</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <textarea
          name="description"
          value={formData.description} 
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="email"
          value={formData.students} 
        
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        /> 
          <input
          type="text"
          name="instructor" 
      
          value={formData.instructor}
          onChange={handleChange}
          placeholder="Instructor Name"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
          
        <input
          type="text"
          name="available_seats"
          value={formData.available_seats}
          onChange={handleChange}
          placeholder="Available Seats"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
