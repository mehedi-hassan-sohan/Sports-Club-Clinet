import React from 'react';
import { FaAddressBook, FaBookReader, FaBookmark, FaCalendarAlt, FaGraduationCap, FaHome, FaIdCard, FaShoppingCart, FaStripe, FaUserCog, FaUserSecret, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isInstructor);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/allusers">
                    <FaUserSecret /> Admin Dashboard:
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/allusers">
                    <FaUsers />
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageuser">
                    <FaUserCog /> Manage Classes:
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard/addclass">
                    <FaGraduationCap /> Instructor Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addclass">
                    <FaAddressBook />
                    Add a Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclassins">
                    <FaBookReader /> My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/myclass">
                    <FaHome /> Student Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclass">
                    <FaBookmark /> My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myenroll">
                    <FaShoppingCart />My Enrolled Classes 
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/paymenthistory">
                    <FaStripe /> Payment History
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
