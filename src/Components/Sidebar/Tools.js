import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import Sidebar from './Sidebar';  // Import your Sidebar component

const MyMapComponent = () => {
  const [showSketchTools, setShowSketchTools] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      {/* Pass the onSketchToggle prop here */}
      <Sidebar onSketchToggle={() => setShowSketchTools(!showSketchTools)} />

      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showSketchTools && (
          <FeatureGroup>
            <EditControl
              position='topright'
              draw={{
                rectangle: true,
                polyline: true,
                polygon: true,
                circle: true,
                marker: true,
              }}
            />
          </FeatureGroup>
        )}
      </MapContainer>
    </div>
  );
};

export default MyMapComponent;

