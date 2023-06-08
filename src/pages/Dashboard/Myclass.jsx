import React from 'react';

const Myclass = () => {
  // Retrieve booked classes from local storage
  const bookedClasses = JSON.parse(localStorage.getItem('bookedClasses')) || [];

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
              </tr>
            </thead>
            <tbody>
              {bookedClasses.map((classItem) => (
                <tr key={classItem.id}>
                  <td className="w-64">
                    <img  src={classItem.image} alt={classItem.title} className="h-22 w-32 object-cover" />
                  </td>
                  <td className="text-md">{classItem.title}</td>
                  <td className="text-md">{classItem.instructor}</td>
                  <td className="text-md">{classItem.price}</td>
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
