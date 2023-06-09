import React from 'react';
import { FaAddressBook, FaBookReader, FaBookmark, FaCalendarAlt, FaGraduationCap, FaHome, FaShoppingCart, FaUserCog, FaUserSecret, FaUsers, FaWallet } from 'react-icons/fa';

import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => { 
 const isStudent = true 
  const isAdmin =true 
  const isInstructor =true

    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {isStudent && (
        <>
          <li>
            <Link to="/dashboard/myclass">
              <FaHome /> Student Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myclass">
              <FaBookmark /> My Enrolled Classes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/mycart">
              <FaShoppingCart /> My Selected Classes
            </Link>
          </li>
        </>
      )}

      {isAdmin && (
        
        <>
        <li>
          <Link to="/dashboard/myclass">
            <FaUserSecret /> Admin Dashboard:

          </Link>
        </li>
        <li>
          <Link to="/dashboard/allusers">
            <FaUsers />Manage Users
          </Link>
        </li>
        <li>
          <Link to="/dashboard/mycart">
            <FaUserCog/> Manage Classes: 
          </Link>
        </li>
      </>
        
      )}

      {isInstructor && (
         <>
         <li>
           <Link to="/dashboard/myclass">
             <FaGraduationCap /> Instructor Home
           </Link>
         </li>
         <li>
           <Link to="/dashboard/myclass">
             <FaAddressBook />Add a Class
           </Link>
         </li>
         <li>
           <Link to="/dashboard/mycart">
             <FaBookReader /> My Classes
           </Link>
         </li>
       </>
      )}
    </ul>
  
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
