// src/Pages/MapPage.js
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../../Styles/sidebar.css'; 
import Sidebar from '../Sidebar/Sidebar';
import BOTP41 from '../../GeoJson/Kmz/BOTP41';
import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
import PlotClassTP41 from '../../GeoJson/Shapefile/PlotClassTP41';
import BOTP42 from '../../GeoJson/Kmz/BOTP42';
import Plot1TP42 from '../../GeoJson/Kmz/Plot1TP42';
import Plot2TP42 from '../../GeoJson/Kmz/Plot2TP42';
import SchemesTP42 from '../../GeoJson/Kmz/SchemesTP42';

const styles = {
  BOTP41: { color: '#FF5733', weight: 2 },
  PlotsTP41: { color: '#33FF57', weight: 2 },
  SchemesTP41: { color: 'blue', weight: 2 },
  RoadTP41: { color: '#FF33A8', weight: 2 },
  RoadTP42: { color: '#F1C40F', weight: 2 },
  PlotClassTP41: { color: '#8E44AD', weight: 2 },
  BOTP42: { color: '#E67E22', weight: 2 },
  Plot1TP42: { color: '#1ABC9C', weight: 2 },
  Plot2TP42: { color: '#9B59B6', weight: 2 },
  SchemesTP42: { color: 'yellow', weight: 2 },
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

  return (
    <div className="map-page-container">
      <MapContainer center={[23.073162583462938, 72.508005683621647]} zoom={16} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <GeoJSON data={BOTP41} style={styles.BOTP41} />
        <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} />
        <GeoJSON data={RoadTP41} style={styles.RoadTP41} />
        <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
        <GeoJSON data={PlotClassTP41} style={styles.PlotClassTP41} />
        <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} style={{ color: 'blue', weight: 2 }} />
        <GeoJSON data={BOTP42} style={styles.BOTP42} />
        <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} />
        <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} />
        <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
        <GeoJSON data={SchemesTP42} pointToLayer={pointToLayer} style={{ color: 'orange', weight: 2, fillColor: 'orange' }} />

        <Sidebar /> {/* Ensure Sidebar is correctly imported and used within MapContainer */}
      
      </MapContainer>
    </div>
  );
};

export default MapPage;

// import React from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import '../../Styles/sidebar.css'; 
// import Sidebar from '../Sidebar/Sidebar';
// import BOTP41 from '../../GeoJson/Kmz/BOTP41';
// import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
// import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
// import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
// import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
// import PlotClassTP41 from '../../GeoJson/Shapefile/PlotClassTP41';
// import BOTP42 from '../../GeoJson/Kmz/BOTP42';
// import Plot1TP42 from '../../GeoJson/Kmz/Plot1TP42';
// import Plot2TP42 from '../../GeoJson/Kmz/Plot2TP42';
// import SchemesTP42 from '../../GeoJson/Kmz/SchemesTP42';

// const styles = {
//   BOTP41: { color: '#FF5733', weight: 2 },
//   PlotsTP41: { color: '#33FF57', weight: 2 },
//   SchemesTP41: { color: 'blue', weight: 2 },
//   RoadTP41: { color: '#FF33A8', weight: 2 },
//   RoadTP42: { color: '#F1C40F', weight: 2 },
//   PlotClassTP41: { color: '#8E44AD', weight: 2 },
//   BOTP42: { color: '#E67E22', weight: 2 },
//   Plot1TP42: { color: '#1ABC9C', weight: 2 },
//   Plot2TP42: { color: '#9B59B6', weight: 2 },
//   SchemesTP42: { color: 'yellow', weight: 2 },
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
//   <MapContainer center={[23.073162583462938, 72.508005683621647]} zoom={16} style={{ height: '100vh', width: '100%' }}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//     />
//     <GeoJSON data={BOTP41} style={styles.BOTP41} />
//     <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} />
//     <GeoJSON data={RoadTP41} style={styles.RoadTP41} />
//     <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
//     <GeoJSON data={PlotClassTP41} style={styles.PlotClassTP41} />
//     <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} style={{ color: 'blue', weight: 2 }} />
//     <GeoJSON data={BOTP42} style={styles.BOTP42} />
//     <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} />
//     <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} />
//     <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
//     <GeoJSON data={SchemesTP42} pointToLayer={pointToLayer} style={{ color: 'orange', weight: 2, fillColor: 'orange' }} />

//     <Sidebar /> {/* Ensure Sidebar is correctly imported and used within MapContainer */}
//   </MapContainer>
// </div>

//   );
// };

// export default MapPage;


// import React,{useState}from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import '../../Styles/sidebar.css'; 
// import Sidebar from '../Sidebar/Sidebar';
// import BOTP41 from '../../GeoJson/Kmz/BOTP41';
// import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
// import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
// import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
// import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
// import PlotClassTP41 from '../../GeoJson/Shapefile/PlotClassTP41';
// import BOTP42 from '../../GeoJson/Kmz/BOTP42';
// import Plot1TP42 from '../../GeoJson/Kmz/Plot1TP42';
// import Plot2TP42 from '../../GeoJson/Kmz/Plot2TP42';
// import SchemesTP42 from '../../GeoJson/Kmz/SchemesTP42';
// const styles = {
//   BOTP41: { color: '#FF5733', weight: 2 },
//   PlotsTP41: { color: '#33FF57', weight: 2 },
//   SchemesTP41: { color: 'blue', weight: 2 },
//   RoadTP41: { color: '#FF33A8', weight: 2 },
//   RoadTP42: { color: '#F1C40F', weight: 2 },
//   PlotClassTP41: { color: '#8E44AD', weight: 2 },
//   BOTP42: { color: '#E67E22', weight: 2 },
//   Plot1TP42: { color: '#1ABC9C', weight: 2 },
//   Plot2TP42: { color: '#9B59B6', weight: 2 },
//   SchemesTP42: { color: 'yellow', weight: 2 },
//   RoadTP42: { color: '#E74C3C', weight: 2 },
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

//   const handleAddLayer = () => {
   
//   };

//   const handleAddTable = () => {
   
//   };

//   const handleBaseMap = (type) => {
   
//   };

//   const handleCharts = () => {
    
//   };

//   const handleAddBookmark = () => {
    
//   };

//   const handleSettings = () => {
    
//   };

//   const handleShareMap = () => {
   
//   };

//   const handlePrint = () => {
   
//   };

//   return (
//     <div className="map-page-container">
//       <MapContainer center={[23.073162583462938, 72.508005683621647]}
//         zoom={16} style={{ height: '100vh', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//         />
//         <GeoJSON data={BOTP41} style={styles.BOTP41} />
//           <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} />
//           <GeoJSON data={RoadTP41} style={styles.RoadTP41} />
//           <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
//           <GeoJSON data={PlotClassTP41} style={styles.PlotClassTP41} />
//           <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} style={{ color: 'blue', weight: 2 }} />
//           <GeoJSON data={BOTP42} style={styles.BOTP42} />
//           <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} />
//           <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} />
//           <GeoJSON data={RoadTP42} style={styles.RoadTP42} />
//           <GeoJSON data={SchemesTP42} pointToLayer={pointToLayer} style={{ color: 'orange', weight: 2, fillColor:'orange' }} />
//       </MapContainer>
//       <Sidebar
//         onAddLayer={handleAddLayer}
//         onAddTable={handleAddTable}
//         onBaseMap={handleBaseMap}
//         onCharts={handleCharts}
//         onAddBookmark={handleAddBookmark}
//         onSettings={handleSettings}
//         onShareMap={handleShareMap}
//         onPrint={handlePrint}
//       />
//     </div>
//   );
// };

// export default MapPage;