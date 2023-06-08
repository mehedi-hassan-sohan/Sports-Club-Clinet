import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/instructor')
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return ( 
     <div > 
        <h1 className='text-5xl mt-14 mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Popular Classes Section</h1> 
      <hr className=" border-2 border-black w-1/3 mx-auto mb-10" />
    <div className='md:grid grid-cols-3 gap-4'> 
      {teachers.map((teacher, index) => (
        <div key={index}  className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className='w-[600px]' src={teacher.picture_url} alt="Class Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"><span className='font-bold'>Name:</span> {teacher.name}</h2>
            <p className='text-lg'><span className='font-bold '>Email:</span> {teacher.email}</p>
            <p className='text-lg'><span className='font-bold'>Class Taken:</span> {teacher.classes_taken}</p>
            <div className="card-actions justify-end">
              <button  className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div> 
    </div> 
  );
};

export default PopularInstructors;
