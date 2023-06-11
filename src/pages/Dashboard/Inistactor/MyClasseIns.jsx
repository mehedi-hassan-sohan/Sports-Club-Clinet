import React, { useEffect, useState } from 'react';

const MyClasseIns = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/students/instructors')
      .then(response => response.json())
      .then(classesData => {
        setClasses(classesData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {classes.map(classData => (
          <div key={classData._id} className="max-w-sm rounded-lg shadow-2xl bg-white m-4 p-6">
            <img  src={classData.classImage} className="rounded-lg shadow-2xl w-[400px]" />
            <div>
              <h2 className="text-2xl font-bold mb-2">{classData.className}</h2>
              <p className="text-gray-600">Available Seats: {classData.availableSeats}</p>
              <p className="text-gray-600">Price: {classData.price}</p>
              <p className="text-gray-600">Status: {classData.status}</p>
              <p className="text-gray-600">Feedback: {classData.feedback}</p>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClasseIns;
