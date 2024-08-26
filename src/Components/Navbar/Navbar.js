import React from 'react';
import { FaBars, FaSignInAlt } from 'react-icons/fa';
import '../../Styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-toggle">
      <FaBars />
      </div>
      <div className="navbar-signin">
        <FaSignInAlt /> Sign In
      </div>
    </nav>
  );
};

export default Navbar;
