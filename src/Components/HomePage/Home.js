// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/home.css'; // Assuming you will create a CSS file for styling
import Logo from '../../Assets/Logo.jpg'
const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="title">GIS Layermap</h1>
          <hr className="underline" />
          <p className="description">
            Welcome to the GIS Layermap application, where you can explore various geographic layers and gain insights into spatial data. Use this tool to navigate, analyze, and visualize geospatial information efficiently.
          </p>
          <div className="buttons">
            <Link to="/signin" className="btn btn-primary">Sign In</Link>
            <Link to="/overview" className="btn btn-secondary">Overview</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
