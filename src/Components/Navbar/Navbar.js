// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/navbar.css'; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink 
          to="/mappage" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Layers
        </NavLink>
        <NavLink 
          to="/filtermap" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          FilterMap
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink 
          to="/signin" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the toggle button
// import '../../Styles/navbar.css';

// const Navbar = () => {
//     const [ispanelOpen, setIspanelOpen] = useState(false);

//     const handleTogglepanel = () => {
//         setIspanelOpen(!ispanelOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-toggle" onClick={handleTogglepanel}>
//                 {ispanelOpen ? <FaTimes /> : <FaBars />}
//             </div>
           
//             <div className={`panel ${ispanelOpen ? 'open' : 'closed'}`}>
//                 <nav>
//                     <Link to="/filtermap" onClick={handleTogglepanel}>Filter Map</Link>
//                     <Link to="/geojsonmap" onClick={handleTogglepanel}>GeoJson Map</Link>
//                 </nav>
//             </div>
//             <div className="navbar-signin">
//                 <Link to="/signin">Sign In</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
