import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const PopularClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleBookNow = (classItem) => {
    const bookedClass = {
      id: classItem._id,
      image: classItem.image,
      title: classItem.title,
      instructor: classItem.instructor,
      price: classItem.price,
    };

    // Save the booked class data in local storage
    const bookedClasses = JSON.parse(localStorage.getItem('bookedClasses')) || [];
    bookedClasses.push(bookedClass);
    localStorage.setItem('bookedClasses', JSON.stringify(bookedClasses));

    Swal.fire({
      title: 'Booked!',
      text: `You have booked the class: ${classItem.title}`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className='grid  gap-10'>
      <h1 className='text-5xl mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
        Popular Classes Section
      </h1>
      <hr className=' border-2 border-black w-1/3 mx-auto mb-10' />

      {classes.map((classItem, index) => (
        <div key={index} className='hero  bg-base-200'>
          <div className='hero-content  flex-col lg:flex-row'>
            <img
              src={classItem.image}
              className='max-w-sm rounded-lg  w-[300px]'
              alt='Class Image'
            />
            <div>
              <h1 className='text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                <span className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                  Title:
                </span>{' '}
                {classItem.title}
              </h1>
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                <span className='font-bold text-lg'>Price: $</span> {classItem.price}
              </p>
              <p className='py-6 text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                <span className='font-bold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                  Description:
                </span>{' '}
                {classItem.description}
              </p>
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                <span className='font-bold text-lg'>Student Enrollment:</span>{' '}
                {classItem.students}
              </p>
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                <span className='font-bold text-lg'>Available Seats:</span>{' '}
                {classItem.available_seats}
              </p>
            </div>
            <button
              className='btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
              onClick={() => handleBookNow(classItem)}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClass;
