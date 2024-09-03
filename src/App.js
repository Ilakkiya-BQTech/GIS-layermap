import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import MapPage from './Components/Layermap/Layers';
import './App.css'; // Import global styles if needed
import Navbar from './Components/Navbar/Navbar';
import TableInfo from './Components/Layermap/TableInfo';
import GeoJsonMap from './Components/MapContainer/Feature';
import Filtermap from './Components/Filters/Fiters';
import SignInSignUp from './Components/LoginPage/Login';
import MapContainerComponent from './Components/Layermap/Layers';
const App = () => {
  const zoomIn = () => {
    
  };

  const zoomOut = () => {
    
  };

  const handleBaseMap = () => {
    
  };

  const handleTimeZone = () => {
    
  };

  const handleTables = () => {
    
  };

  const handleMeasurements = () => {
    
  };

  const handleBookmarks = () => {
   
  };

  const handleMarkers = () => {
    
  };

  const handlePrint = () => {
   
  };

  return (
    <>
   
    <Filtermap/>
   <GeoJsonMap/>
    {/* <Navbar/>
      <div className="app-container">
      
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
        <div className="map-container">
          <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/mapcontainer" element={<MapContainerComponent/>} />
            <Route path="/filtermap" element={<Filtermap/>} />
            
              <Route path="/geojsonmap" element={<GeoJsonMap />} />
              <Route path="/signin" element={<SignInSignUp />} />
          </Routes>
        </div>
      </div> */}
      </>
  );
};

export default App;
// import React from 'react';
// import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
// import MapPage from './Components/FilterMap/Filtermap';

// const App = () => {
//   return (
   
//       <div className="App">
//                 <MapPage/>
//       </div>
   
//   );
// };

// export default App;
