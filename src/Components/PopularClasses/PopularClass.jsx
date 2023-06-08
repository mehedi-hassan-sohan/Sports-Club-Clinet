import React, { useEffect, useState } from 'react';

const PopularClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => setClasses(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='grid  gap-10'> 
      <h1 className='text-5xl mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Popular Classes Section</h1> 
      <hr className=" border-2 border-black w-1/3 mx-auto mb-10" />

      {classes.map((classItem, index) => ( 
        <div  key={index} className="hero  bg-base-200">
          <div className="hero-content  flex-col lg:flex-row">
            <img
              src={classItem.image}
              className="max-w-sm rounded-lg  w-[300px]"
              alt="Class Image"
            />
            <div> 
              
              <h1 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent " > <span className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Title:</span> {classItem.title}</h1> 
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'> <span className='font-bold text-lg'>Price: $</span> {classItem.price}</p>
              <p className="py-6 text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <span className='font-bold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Description:</span> {classItem.description}
              </p>
             <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'> <span className='font-bold text-lg'>Student Enrollment:</span> {classItem.students}</p>
             <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'> <span className='font-bold text-lg'>Available Seats:</span> {classItem.available_seats}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClass;
