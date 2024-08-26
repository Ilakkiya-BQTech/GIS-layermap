// import React from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import BOTP41 from '../../GeoJson/Kmz/BOTP41';
// import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
// import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
// import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
// import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
// import PlotClassTP41 from '../../GeoJson/Kmz/PlotClassTP41';
// import L from 'leaflet';
// import '../../Styles/layers.css'; 
// import Sidebar from '../Sidebar/Sidebar';

// const styles = {
//   BOTP41: {
//     color: '#FF5733', // Red-Orange
//     weight: 2,
//   },
//   PlotsTP41: {
//     color: '#33FF57', // Green
//     weight: 2,
//   },
//   SchemesTP41: {
//     color: '#3357FF', // Blue
//     weight: 2,
//   },
//   RoadTP41: {
//     color: '#FF33A8', // Pink
//     weight: 2,
//   },
//   RoadTP42: {
//     color: '#F1C40F', // Yellow
//     weight: 2,
//   },
//   PlotClassTP41: {
//     color: '#8E44AD', // Purple
//     weight: 2,
//   },
// };

// const MapPage = () => {
//   const pointToLayer = (feature, latlng) => {
//     if (feature.geometry.type === 'Point') {
//       return L.circleMarker(latlng, {
//         radius: 5,
//         fillColor: styles.SchemesTP41.color,
//         color: '#000',
//         weight: 1,
//         opacity: 1,
//         fillOpacity: 0.8,
//       });
//     }
//   };

//   return (
//     <div className="map-page-container">
//       <MapContainer center={[23.022505, 72.571362]} zoom={13} style={{ height: '100vh', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//         />
//         <GeoJSON data={BOTP41} style={styles.BOTP41} />
//         <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} />
//         <GeoJSON data={RoadTP41} style={styles.RoadTP41} />
//         <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
//         <GeoJSON data={PlotClassTP41} style={styles.PlotClassTP41} />
//         <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} />
//         <Sidebar />
//       </MapContainer>
//     </div>
//   );
// };

// export default MapPage;
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import BOTP41 from '../../GeoJson/Kmz/BOTP41';
import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
import PlotClassTP41 from '../../GeoJson/Kmz/PlotClassTP41';
import L from 'leaflet';
import '../../Styles/sidebar.css'; // Import your styles
import Sidebar from '../Sidebar/Sidebar';

const styles = {
  BOTP41: {
    color: '#FF5733', // Red-Orange
    weight: 2,
  },
  PlotsTP41: {
    color: '#33FF57', // Green
    weight: 2,
  },
  SchemesTP41: {
    color: '#3357FF', // Blue
    weight: 2,
  },
  RoadTP41: {
    color: '#FF33A8', // Pink
    weight: 2,
  },
  RoadTP42: {
    color: '#F1C40F', // Yellow
    weight: 2,
  },
  PlotClassTP41: {
    color: '#8E44AD', // Purple
    weight: 2,
  },
};

const MapPage = () => {
  const pointToLayer = (feature, latlng) => {
    if (feature.geometry.type === 'Point') {
      return L.circleMarker(latlng, {
        radius: 5,
        fillColor: styles.SchemesTP41.color,
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    }
  };

  const handleAddLayer = () => {
   
  };

  const handleAddTable = () => {
   
  };

  const handleBaseMap = (type) => {
   
  };

  const handleCharts = () => {
    
  };

  const handleAddBookmark = () => {
    
  };

  const handleSettings = () => {
    
  };

  const handleShareMap = () => {
   
  };

  const handlePrint = () => {
   
  };

  return (
    <div className="map-page-container">
      <MapContainer center={[23.073162583462938, 72.508005683621647]}
        zoom={16} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <GeoJSON data={BOTP41} style={styles.BOTP41} />
        <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} />
        <GeoJSON data={RoadTP41} style={styles.RoadTP41} />
        <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
        <GeoJSON data={PlotClassTP41} style={styles.PlotClassTP41} />
        <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} />
      </MapContainer>
      <Sidebar
        onAddLayer={handleAddLayer}
        onAddTable={handleAddTable}
        onBaseMap={handleBaseMap}
        onCharts={handleCharts}
        onAddBookmark={handleAddBookmark}
        onSettings={handleSettings}
        onShareMap={handleShareMap}
        onPrint={handlePrint}
      />
    </div>
  );
};

export default MapPage;
