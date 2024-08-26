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
    // Logic to zoom in, typically handled within MapPage or passed down via props
  };

  const zoomOut = () => {
    // Logic to zoom out
  };

  const handleBaseMap = () => {
    // Logic to handle base map changes
  };

  const handleTimeZone = () => {
    // Logic to open the time zone options
  };

  const handleTables = () => {
    // Logic to handle table options
  };

  const handleMeasurements = () => {
    // Logic to handle measurements
  };

  const handleBookmarks = () => {
    // Logic to handle bookmarks
  };

  const handleMarkers = () => {
    // Logic to handle markers
  };

  const handlePrint = () => {
    // Logic to handle print functionality
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
            {/* Add other routes if needed */}
          </Routes>
        </div>
      </div>
      </>
  );
};

export default App;
