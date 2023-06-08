import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div className="grid grid-cols-3 gap-4">
      {classes.map((classItem) => (
        <div key={classItem._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={classItem.image} alt={classItem.title} />
          </figure>
          <div className="">
            <p className='text-xl mt-2'><span className='font-bold'>Instructor Name: </span> {classItem.instructor}</p> 
            <h2 className=" mt-2 "><span className='text-lg font-bold'>Class Name: </span> {classItem.title}</h2>
            <p className='mt-2 mb-2'><span className='text-xl font-bold'>Description:</span> {classItem.description}</p> 
             <div className='flex gap-20 text-lg'>
             <p> <span className='font-bold'>Available Seat:</span> {classItem.available_seats}</p> 
            <p> <span className='font-bold'>Price: </span>{classItem.price}</p> 
            
             </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClass;
