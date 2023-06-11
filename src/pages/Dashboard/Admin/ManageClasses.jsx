import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students/instructors');
      setClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (classId) => {
     try {
      const response = await axios.patch(`/students/instructors/${classId}`, {
        status: 'approved'
      });
      // Handle successful approval
      fetchClasses();
     } catch (error) {
      console.error(error);
    }
   };

  const handleDeny = async (classId) => {
    try {
      const response = await axios.patch(`http://localhost:5000//students/instructors/${classId}`, {
        status: 'denied'
      });
      // Handle successful denial
      fetchClasses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendFeedback = async (classId) => {
    // Code to handle sending feedback to the instructor
    // You can open a modal or form to input the feedback and make an API call to send it
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
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
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classData.classImage} alt="Class Image" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{classData.className}</td>
              <td>{classData.availableSeats}</td>
              <td>{classData.price}</td>
              <td>{classData.status}</td>
              <td className='flex'>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleApprove(classData._id)}
                  disabled={classData.status !== 'pending'}
                >
                  Approve
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDeny(classData._id)}
                  disabled={classData.status !== 'pending'}
                >
                  Deny
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleSendFeedback(classData._id)}
                >
                  Send Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageClasses;