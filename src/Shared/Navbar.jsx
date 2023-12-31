import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); 


    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      // update state on toggle
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };  

      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/class">Class</Link></li>
        <li><Link to="/allinstructor">Instructor</Link></li>
          <li>   <Link to="/dashboard">
                Dashboard
            </Link>
        </li>   
        <button className="btn btn-square btn-ghost">
        <label className="swap swap-left w-20 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
             
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
           <FaSun></FaSun>
            {/* dark theme moon image */}
           <FaMoon></FaMoon>
          </label>
      </button>
        {
            user ? <> 
                   <img className='w-[50px] me-3' src={user.photoURL} alt="" />
        <p className='me-2 mt-3'>{user.displayName}</p>
        <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0}   className="menu  relative z-10 bg-white overflow-auto menu-compact dropdown-content mt-3 p-2 shadow text-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Sports Club Vacation</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
           
            </div>
        </> 
    );
};

export default Navbar;