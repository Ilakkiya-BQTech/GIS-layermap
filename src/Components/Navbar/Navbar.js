// import React from 'react';
// import { FaBars, FaSignInAlt } from 'react-icons/fa';
// import '../../Styles/navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-toggle">
//       <FaBars />
//       </div>
//       <div className="navbar-signin">
//       <Link to="/signin">Sign In</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the toggle button
import '../../Styles/navbar.css';

const Navbar = () => {
    const [ispanelOpen, setIspanelOpen] = useState(false);

    const handleTogglepanel = () => {
        setIspanelOpen(!ispanelOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-toggle" onClick={handleTogglepanel}>
                {ispanelOpen ? <FaTimes /> : <FaBars />}
            </div>
           
            <div className={`panel ${ispanelOpen ? 'open' : 'closed'}`}>
                <nav>
                    <Link to="/filtermap" onClick={handleTogglepanel}>Filter Map</Link>
                    <Link to="/geojsonmap" onClick={handleTogglepanel}>GeoJson Map</Link>
                </nav>
            </div>
            <div className="navbar-signin">
                <Link to="/signin">Sign In</Link>
            </div>
        </nav>
    );
};

export default Navbar;
