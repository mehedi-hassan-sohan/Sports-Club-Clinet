import React, { useEffect, useState } from 'react';

const MyClasseIns = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://assignment-12-server-ecru-chi.vercel.app/students/instructors')
      .then(response => response.json())
      .then(classesData => {
        setClasses(classesData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Class Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {classes.map(classData => (
            <tr key={classData._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" /> 

                </label>
              </th> 
               <img className='w-[100px]' src={classData.classImage} alt="" />
              <td>{classData.className}</td>
              <td>{classData.availableSeats}</td>
              <td>{classData.price}</td>
              <td>{classData.status}</td>
              <td>{classData.feedback}</td>
            </tr>
          ))}
        </tbody>
       
      </table>
    </div>
  );
};

export default MyClasseIns;

