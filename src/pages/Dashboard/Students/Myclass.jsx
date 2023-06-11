import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Myclass = () => {
  const [bookedClasses, setBookedClasses] = useState(JSON.parse(localStorage.getItem('bookedClasses')) || []);

  const handleDeleteClass = (id) => {
    const updatedClasses = bookedClasses.filter((classItem) => classItem.id !== id);
    setBookedClasses(updatedClasses);
    localStorage.setItem('bookedClasses', JSON.stringify(updatedClasses));

    Swal.fire({
      title: 'Deleted Successfully',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  };
    console.log(bookedClasses);
  return (
    <div className="xl:p-10">
      <h1 className="text-3xl font-bold mb-4">My Booked Classes</h1>
      {bookedClasses.length === 0 ? (
        <p>No booked classes</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-lg font-bold">Name</th>
                <th className="text-lg font-bold">Instructor</th>
                <th className="text-lg font-bold">Price</th>
                <th className="text-lg font-bold">Bill Pay</th>

                <th className="text-lg font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookedClasses.map((classItem) => (
                <tr key={classItem.id}>
                  <td className="w-64"> 
                    <img src={classItem.image} alt={classItem.title} className="h-22 w-32 object-cover" />
                  </td>
                  <td className="text-md">{classItem.title}</td>
                  <td className="text-md">{classItem.instructor}</td>
                  <td className="text-md">{classItem.price}</td>
                  <td>
                    <Link to={`/dashboard/payment/${classItem.id}`}>
                      <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Pay Now</button>
                    </Link>

                  </td>
                  <td className="text-2xl">
                    <FaRegTrashAlt onClick={() => handleDeleteClass(classItem.id)} />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Myclass;
