import React, { useState, useEffect } from 'react';
import { FaUser, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/students');
        
        const data = await res.json();
        setStudents(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching students data.</p>;
  } 


  const handleMakeAdmin = (student) => {
    fetch(`http://localhost:5000/students/admin/${student._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${student.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>role</th>
           
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.role==='admin'?'admin':<FaUserShield onClick={()=>handleMakeAdmin(student)} 
                
              className='text-orange-500' fontSize={20}></FaUserShield>}</td>
             
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
};

export default AllUser;
