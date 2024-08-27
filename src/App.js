// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';
// import MapPage from './Components/Layermap/Layers';
// import './App.css'

// const App = () => {
//   return (
   
//       <div className="App">
//         <div className="layout">
//           <Sidebar />
//           <div className="map-container">
//             <Routes>
//               <Route path="/" element={<MapPage />} />
//               {/* Add more routes here if needed */}
//             </Routes>
//           </div>
//         </div>
//       </div>
   
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import MapPage from './Components/Layermap/Layers';
import './App.css'; // Import global styles if needed
import Navbar from './Components/Navbar/Navbar';

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
    <Navbar/>
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
           
          </Routes>
        </div>
      </div>
      </>
  );
};

export default App;
