import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  };

  const NavItem = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/users">Users</Link></li>
    </>
  );

  return (
    <div className="navbar bg-cyan-700 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItem}
          </ul>
        </div>
        {/* Logo */}
        <img
          className="h-20 w-25 rounded-2xl"
          src="https://i.ibb.co/x8rsZP4H/633-removebg-preview.png"
          alt="Helpyra Logo"
        />
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-amber-50 gap-4">
          {NavItem}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning mr-4">Appointment</button>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-white hidden sm:inline">{user.email}</span>
              <button onClick={handleLogout} className="btn bg-red-600 text-white">Logout</button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn bg-green-600 text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
