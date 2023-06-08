import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/instructor');
      setInstructors(response.data);
    } catch (error) {
      console.error('Error fetching instructors:', error);
    }
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
            <th>Name</th>
            <th>Email</th>
            <th>Classes Taken</th>
            <th>Picture</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor._id}>
              <th>
                <label>
                  <img className="w-[100px] rounded-3xl" src={instructor.picture_url} alt="" />
                </label>
              </th>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
              <td>{instructor.classes_taken}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Classes Taken</th>
            <th>Picture</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllInstructor;
