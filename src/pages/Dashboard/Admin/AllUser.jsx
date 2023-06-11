import React, { useState, useEffect } from 'react';
import { FaUser, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [adminClicked, setAdminClicked] = useState(false);
  const [instructorClicked, setInstructorClicked] = useState(false);

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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${student.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          });
          setAdminClicked(true);
        }
      });
  };

  const handleMakeInstructor = (student) => {
    fetch(`http://localhost:5000/students/instructor/${student._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${student.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          setInstructorClicked(true);
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
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
             
              <td>
                {student.role === 'admin' ? (
                   <button className="btn" disabled="disabled">Admin</button>
                ) : (
                  <>
                    {!adminClicked && (
                      <button
                        onClick={() => handleMakeAdmin(student)}
                        className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      >
                        Make Admin
                      </button>
                    )}
                  </>
                )}
                
              </td> 
              <td>
              {student.role === 'instructor' ? (
                 <button className="btn" disabled="disabled">Instructor</button>
                ) : (
                  <>
                    {!instructorClicked && (
                      <button
                        onClick={() => handleMakeInstructor(student)}
                        className="btn btn-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      >
                        Make Instructor
                      </button>
                    )}
                  </>
                )}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
