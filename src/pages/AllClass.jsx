import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AllClass = () => {
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
      image:classItem.image,
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
    <div className="grid grid-cols-3 gap-4">
      {classes.map((classItem) => (
        <div key={classItem._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={classItem.image} alt={classItem.title} />
          </figure>
          <div className="">
            <p className="text-xl mt-2">
              <span className="font-bold">Instructor Name: </span>
              {classItem.instructor}
            </p>
            <h2 className="mt-2">
              <span className="text-lg font-bold">Class Name: </span>
              {classItem.title}
            </h2>
            <p className="mt-2 mb-2">
              <span className="text-xl font-bold">Description: </span>
              {classItem.description}
            </p>
            <div className="flex gap-20 text-lg">
              <p>
                <span className="font-bold">Available Seat: </span>
                {classItem.available_seats}
              </p>
              <p>
                <span className="font-bold">Price: </span>
                {classItem.price}
              </p>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => handleBookNow(classItem)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClass;
