import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import MapPage from './Components/Layermap/Layers';
import './App.css'; // Import global styles if needed
import Navbar from './Components/Navbar/Navbar';
import Filtermap from './Components/Filters/Fiters';
import SignInSignUp from './Components/LoginPage/Login';
import MapContainerComponent from './Components/Layermap/Layers';
import Home from './Components/HomePage/Home';

const App = () => {
  const location = useLocation();

  const zoomIn = () => {};
  const zoomOut = () => {};
  const handleBaseMap = () => {};
  const handleTimeZone = () => {};
  const handleTables = () => {};
  const handleMeasurements = () => {};
  const handleBookmarks = () => {};
  const handleMarkers = () => {};
  const handlePrint = () => {};

  
  const shouldShowNavbar = location.pathname !== '/signin';

 
  const shouldShowSidebar = location.pathname === '/mappage' ;

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div className="app-container">
        {shouldShowSidebar && (
          <Sidebar
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onBaseMap={handleBaseMap}
            onTimeZone={handleTimeZone}
            onTables={handleTables}
            onMeasurements={handleMeasurements}
            onBookmarks={handleBookmarks}
            onMarkers={handleMarkers}
            onPrint={handlePrint}
          />
        )}
        <div className="map-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mappage" element={<MapPage />} />
            {/* <Route path="/mapcontainer" element={<MapContainerComponent />} /> */}
            <Route path="/filtermap" element={<Filtermap />} />
            <Route path="/signin" element={<SignInSignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';

// import Filtermap from './Components/MapContainer/Feature';

// const App = () => {
//   return (
   
//       <div className="App">
//                <Filtermap/>
//       </div>
   
//   );
// };

// export default App;
