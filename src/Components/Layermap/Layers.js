

// import React,{useState} from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Import KMZ data converted to GeoJSON
// import BOTP41 from '../../GeoJson/Kmz/BOTP41';
// import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
// import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
// import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
// import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
// import BOTP42 from '../../GeoJson/Kmz/BOTP42';
// import Plot1TP42 from '../../GeoJson/Kmz/Plot1TP42';
// import Plot2TP42 from '../../GeoJson/Kmz/Plot2TP42';
// import SchemesTP42 from '../../GeoJson/Kmz/SchemesTP42';
// import Sidebar from '../Sidebar/Sidebar';
// // Import JSON data for detailed information
// import Road_TP41 from '../../GeoJson/Geojson/Road_TP41.json';
// import Road_TP42 from '../../GeoJson/Geojson/Road_TP42.json';
// import BO_TP41 from '../../GeoJson/Geojson/BO_TP41.json';
// import BO_TP42 from '../../GeoJson/Geojson/BO_TP42.json';
// import Schemes_TP41 from '../../GeoJson/Geojson/Schemes_TP41.json';
// import Schemes_TP42 from '../../GeoJson/Geojson/Schemes_TP42.json';
// import PlotClassTP42 from '../../GeoJson/Geojson/PlotClassTP42.json';
// import '../../Styles/layers.css'
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
//   SchemesTP42: { color: 'yellow', weight: 2 ,fillColor: 'orange' },
// };

// const pointToLayer = (feature, latlng) => {
//   if (feature.geometry.type === 'Point') {
//     return L.circleMarker(latlng, {
//       radius: 5,
//       fillColor: styles.SchemesTP41.color,
//       color: '#000',
//       weight: 1,
//       opacity: 1,
//       fillOpacity: 0.8,
//     });
//   }
// };


// // Assuming `Name` is the property used to match with JSON data
// const getJsonData = (name) => {
//   console.log('Fetching JSON data for:', name);

//   // Log all available JSON data to ensure it's being imported correctly
//   console.log('Available JSON data:', {
//     Road_TP41,
//     Road_TP42,
//     BO_TP41,
//     BO_TP42,
//     Schemes_TP41,
//     Schemes_TP42,
//     PlotClassTP42
//   });

//   // Check if the name matches any of the JSON objects' keys
//   if (Road_TP41[name]) return Road_TP41[name];
//   if (Road_TP42[name]) return Road_TP42[name];
//   if (BO_TP41[name]) return BO_TP41[name];
//   if (BO_TP42[name]) return BO_TP42[name];
//   if (Schemes_TP41[name]) return Schemes_TP41[name];
//   if (Schemes_TP42[name]) return Schemes_TP42[name];
//   if (PlotClassTP42[name]) return PlotClassTP42[name];

//   return null; 
// };


// const onEachFeature = (feature, layer) => {
//   if (feature.properties) {
//     const { Name, description } = feature.properties;
//     const popupContent = `
//       <div>
//         <strong>Name:</strong> ${Name || 'N/A'}<br />
//         <strong>Description:</strong> ${description || 'N/A'}
//       </div>
//     `;
//     layer.bindPopup(popupContent);

//     layer.on({
//       click: () => {
//         console.log('Clicked feature properties:', feature.properties);
//         const jsonData = getJsonData(Name); 
//         console.log('JSON Data:', jsonData);
//       }
//     });
//   }
// };

// const MapContainerComponent = () => {
//     const [isLayerPanelOpen, setIsLayerPanelOpen] = useState(false);
//   const [selectedLayers, setSelectedLayers] = useState({
//     BOTP41: true,
//     PlotsTP41: true,
//     SchemesTP41: true,
//     RoadTP41: true,
//     RoadTP42: true,
//     BOTP42: true,
//     Plot1TP42: true,
//     Plot2TP42: true,
//     SchemesTP42: true,
//   });
//   const [selectedFeature, setSelectedFeature] = useState(null);
//     const handleLayerChange = (e) => {
//     const { name, checked } = e.target;
//     setSelectedLayers((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };

//   const toggleLayerPanel = () => {
//     setIsLayerPanelOpen(!isLayerPanelOpen);
//   };

//   const handleSidebarAction = (action) => {
//     console.log('Sidebar action:', action); 
//     if (action === 'browseLayers') {
//       toggleLayerPanel();
//     } else if (action === 'sketch') {
      
//     }
//   };
//    return (
//     <div className="map-page-container">
//       <MapContainer center={[23.073162583462938, 72.508005683621647]} zoom={16} style={{ height: '100vh', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//         />

//         {selectedLayers.BOTP41 && <GeoJSON data={BOTP41} style={styles.BOTP41}onEachFeature={onEachFeature}  />}
//         {selectedLayers.PlotsTP41 && <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} onEachFeature={onEachFeature} />}
//         {selectedLayers.SchemesTP41 && (
//           <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} style={styles.SchemesTP41} onEachFeature={onEachFeature}  />
//         )}
//         {selectedLayers.RoadTP41 && <GeoJSON data={RoadTP41} style={styles.RoadTP41} onEachFeature={onEachFeature}  />}
//         {selectedLayers.RoadTP42 && <GeoJSON data={RoadTP42} style={styles.RoadTP42}onEachFeature={onEachFeature}  />}
     
//         {selectedLayers.BOTP42 && <GeoJSON data={BOTP42} style={styles.BOTP42}onEachFeature={onEachFeature}  />}
//         {selectedLayers.Plot1TP42 && <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} onEachFeature={onEachFeature}  />}
//         {selectedLayers.Plot2TP42 && <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} onEachFeature={onEachFeature}  />}
//         {selectedLayers.SchemesTP42 && (
//           <GeoJSON data={SchemesTP42} pointToLayer={pointToLayer} style={styles.SchemesTP42} onEachFeature={onEachFeature}  />
//         )}

//         <Sidebar onAction={handleSidebarAction}  />

//         {isLayerPanelOpen && (
//   <div className='layerpanel'>
//     <button  className='close-button'
//         style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
//         onClick={toggleLayerPanel}
//         aria-label="Close Layer Panel"
//       >
//         &#x2715; 
//       </button>
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//       <h4>Toggle Layers</h4>
      
//     </div>
//     {Object.keys(selectedLayers).map((layer) => (
//       <div key={layer}>
//         <input
//           type="checkbox"
//           name={layer}
//           checked={selectedLayers[layer]}
//           onChange={handleLayerChange}
//         />
//         <label style={{ marginLeft: '8px' }}>{layer}</label>
//       </div>
//     ))}
//   </div>
// )}
        
         
//       </MapContainer>
//     </div>
//   );
// };


// export default MapContainerComponent;


import React,{useState} from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import KMZ data converted to GeoJSON
import BOTP41 from '../../GeoJson/Kmz/BOTP41';
import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
import BOTP42 from '../../GeoJson/Kmz/BOTP42';
import Plot1TP42 from '../../GeoJson/Kmz/Plot1TP42';
import Plot2TP42 from '../../GeoJson/Kmz/Plot2TP42';
import SchemesTP42 from '../../GeoJson/Kmz/SchemesTP42';
import Sidebar from '../Sidebar/Sidebar';
// Import JSON data for detailed information
import Road_TP41 from '../../GeoJson/Geojson/Road_TP41.json';
import Road_TP42 from '../../GeoJson/Geojson/Road_TP42.json';
import BO_TP41 from '../../GeoJson/Geojson/BO_TP41.json';
import BO_TP42 from '../../GeoJson/Geojson/BO_TP42.json';
import Schemes_TP41 from '../../GeoJson/Geojson/Schemes_TP41.json';
import Schemes_TP42 from '../../GeoJson/Geojson/Schemes_TP42.json';
import PlotClassTP42 from '../../GeoJson/Geojson/PlotClassTP42.json';
import '../../Styles/layers.css'
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
  SchemesTP42: { color: 'yellow', weight: 2 ,fillColor: 'orange' },
};

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


// Assuming `Name` is the property used to match with JSON data
const getJsonData = (name) => {
  console.log('Fetching JSON data for:', name);

  // Log all available JSON data to ensure it's being imported correctly
  console.log('Available JSON data:', {
    Road_TP41,
    Road_TP42,
    BO_TP41,
    BO_TP42,
    Schemes_TP41,
    Schemes_TP42,
    PlotClassTP42
  });

  // Check if the name matches any of the JSON objects' keys
  if (Road_TP41[name]) return Road_TP41[name];
  if (Road_TP42[name]) return Road_TP42[name];
  if (BO_TP41[name]) return BO_TP41[name];
  if (BO_TP42[name]) return BO_TP42[name];
  if (Schemes_TP41[name]) return Schemes_TP41[name];
  if (Schemes_TP42[name]) return Schemes_TP42[name];
  if (PlotClassTP42[name]) return PlotClassTP42[name];

  return null; 
};


const onEachFeature = (feature, layer) => {
  if (feature.properties) {
    const { Name, description } = feature.properties;
    const popupContent = `
      <div>
        <strong>Name:</strong> ${Name || 'N/A'}<br />
        <strong>Description:</strong> ${description || 'N/A'}
      </div>
    `;
    layer.bindPopup(popupContent);

    layer.on({
      click: () => {
        console.log('Clicked feature properties:', feature.properties);
        const jsonData = getJsonData(Name); 
        console.log('JSON Data:', jsonData);
      }
    });
  }
};

const MapContainerComponent = () => {
    const [isLayerPanelOpen, setIsLayerPanelOpen] = useState(false);
  const [selectedLayers, setSelectedLayers] = useState({
    BOTP41: true,
    PlotsTP41: true,
    SchemesTP41: true,
    RoadTP41: true,
    RoadTP42: true,
    BOTP42: true,
    Plot1TP42: true,
    Plot2TP42: true,
    SchemesTP42: true,
  });
  const [selectedFeature, setSelectedFeature] = useState(null);
    const handleLayerChange = (e) => {
    const { name, checked } = e.target;
    setSelectedLayers((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const toggleLayerPanel = () => {
    setIsLayerPanelOpen(!isLayerPanelOpen);
  };

  const handleSidebarAction = (action) => {
    console.log('Sidebar action:', action); 
    if (action === 'browseLayers') {
      toggleLayerPanel();
    } else if (action === 'sketch') {
      
    }
  };
   return (
    <div className="map-page-container">
      <MapContainer center={[23.073162583462938, 72.508005683621647]} zoom={16} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {selectedLayers.BOTP41 && <GeoJSON data={BOTP41} style={styles.BOTP41}onEachFeature={onEachFeature}  />}
        {selectedLayers.PlotsTP41 && <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} onEachFeature={onEachFeature} />}
        {selectedLayers.SchemesTP41 && (
          <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} style={styles.SchemesTP41} onEachFeature={onEachFeature}  />
        )}
        {selectedLayers.RoadTP41 && <GeoJSON data={RoadTP41} style={styles.RoadTP41} onEachFeature={onEachFeature}  />}
        {selectedLayers.RoadTP42 && <GeoJSON data={RoadTP42} style={styles.RoadTP42}onEachFeature={onEachFeature}  />}
     
        {selectedLayers.BOTP42 && <GeoJSON data={BOTP42} style={styles.BOTP42}onEachFeature={onEachFeature}  />}
        {selectedLayers.Plot1TP42 && <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} onEachFeature={onEachFeature}  />}
        {selectedLayers.Plot2TP42 && <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} onEachFeature={onEachFeature}  />}
        {selectedLayers.SchemesTP42 && (
          <GeoJSON data={SchemesTP42} pointToLayer={pointToLayer} style={styles.SchemesTP42} onEachFeature={onEachFeature}  />
        )}

        <Sidebar onAction={handleSidebarAction}  />

        {isLayerPanelOpen && (
  <div className='layerpanel'>
    <button  className='close-button'
        style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
        onClick={toggleLayerPanel}
        aria-label="Close Layer Panel"
      >
        &#x2715; 
      </button>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h4>Toggle Layers</h4>
      
    </div>
    {Object.keys(selectedLayers).map((layer) => (
      <div key={layer}>
        <input
          type="checkbox"
          name={layer}
          checked={selectedLayers[layer]}
          onChange={handleLayerChange}
        />
        <label style={{ marginLeft: '8px' }}>{layer}</label>
      </div>
    ))}
  </div>
)}
        
         
      </MapContainer>
    </div>
  );
};


export default MapContainerComponent;