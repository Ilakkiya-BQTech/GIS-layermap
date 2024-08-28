import React, { useState } from 'react';
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
import Road_TP41 from '../../GeoJson/Shapefile/Road_TP41';
import Road_TP42 from '../../GeoJson/Shapefile/Road_TP42';
import BO_TP41 from '../../GeoJson/Shapefile/BO_TP41';
import BO_TP42 from '../../GeoJson/Shapefile/BO_TP42';
import Schemes_TP41 from '../../GeoJson/Shapefile/Schemes_TP41';
import Schemes_TP42 from '../../GeoJson/Shapefile/Schemes_TP42';

import PlotClassTP42 from '../../GeoJson/Shapefile/PlotClassTP42';
import '../../Styles/layers.css';

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

const MapPage = () => {
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

  const handleFeatureClick = (event) => {
    console.log('Event:', event);
   
  
    if (event && event.target && event.target.feature) {
      const feature = event.target.feature;
      const properties = feature.properties;
  
      let featureInfo = {
        id: 'No ID',
        name: 'No Name',
        additionalInfo: 'No Additional Info'
      };
  
      if (properties.Id !== undefined) {
        featureInfo.id = properties.Id || 'No ID';
        featureInfo.name = properties.Name || 'No Name';
        featureInfo.additionalInfo = properties.Road_Width || properties.Area || 'No Additional Info';
      } else if (properties.OID_ !== undefined) {
        featureInfo.id = properties.OID_ || 'No ID';
        featureInfo.name = properties.Name || 'No Name';
        featureInfo.additionalInfo = 'No Additional Info';
      } else if (properties.TARGET_FID !== undefined) {
        featureInfo.id = properties.TARGET_FID || 'No ID';
        featureInfo.name = properties.Name || 'No Name';
        featureInfo.additionalInfo = properties.Area || 'No Additional Info';
      } else if (properties.Name !== undefined) {
        featureInfo.name = properties.Name || 'No Name';
        featureInfo.additionalInfo = properties.Area || properties.Road_Width || 'No Additional Info';
      }
  
      setSelectedFeature(featureInfo);
    } else {
      console.error('Invalid event or event.target.feature');
    }
  };
  

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

        {selectedLayers.BOTP41 && <GeoJSON data={BOTP41} style={styles.BOTP41} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />}
        {selectedLayers.PlotsTP41 && <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />}
        {selectedLayers.SchemesTP41 && (
          <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} style={styles.SchemesTP41} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />
        )}
        {selectedLayers.RoadTP41 && <GeoJSON data={RoadTP41} style={styles.RoadTP41} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />}
        {selectedLayers.RoadTP42 && <GeoJSON data={RoadTP42} style={styles.RoadTP42} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />}
        {selectedLayers.PlotClassTP41 && (
          <GeoJSON data={PlotClassTP41} style={styles.PlotClassTP41} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />
        )}
        {selectedLayers.BOTP42 && <GeoJSON data={BOTP42} style={styles.BOTP42} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />}
        {selectedLayers.Plot1TP42 && <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />}
        {selectedLayers.Plot2TP42 && <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />}
        {selectedLayers.SchemesTP42 && (
          <GeoJSON data={SchemesTP42} pointToLayer={pointToLayer} style={styles.SchemesTP42} onEachFeature={(feature, layer) => layer.on({ click: handleFeatureClick })} />
        )}

        <Sidebar onAction={handleSidebarAction} onFeatureClick={handleFeatureClick} />

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

export default MapPage;


// import React, { useState } from 'react';
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
// import Road_TP41 from '../../GeoJson/Shapefile/Road_TP41';
// import Road_TP42 from '../../GeoJson/Shapefile/Road_TP42';
// import BO_TP41 from '../../GeoJson/Shapefile/BO_TP41';
// import BO_TP42 from '../../GeoJson/Shapefile/BO_TP42';
// import Schemes_TP41 from '../../GeoJson/Shapefile/Schemes_TP41';
// import Schemes_TP42 from '../../GeoJson/Shapefile/Schemes_TP42';
// import PlotClassTP41 from '../../GeoJson/Shapefile/PlotClassTP41';
// import PlotClassTP42 from '../../GeoJson/Shapefile/PlotClassTP42';
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

// const MapPage = () => {
//   const [isLayerPanelOpen, setIsLayerPanelOpen] = useState(false);
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
 
//   const handleLayerChange = (e) => {
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

//   return (
//     <div className="map-page-container" >
//       <MapContainer center={[23.073162583462938, 72.508005683621647]} zoom={16} style={{ height: '100vh', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//         />

//         {selectedLayers.BOTP41 && <GeoJSON data={BOTP41} style={styles.BOTP41} />}
//         {selectedLayers.PlotsTP41 && <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} />}
//         {selectedLayers.SchemesTP41 && (
//           <GeoJSON data={SchemesTP41} pointToLayer={pointToLayer} style={styles.SchemesTP41} />
//         )}
//         {selectedLayers.RoadTP41 && <GeoJSON data={RoadTP41} style={styles.RoadTP41} />}
//         {selectedLayers.RoadTP42 && <GeoJSON data={RoadTP42} style={styles.RoadTP42} />}
//           {selectedLayers.PlotClassTP41 && (
//             <GeoJSON data={PlotClassTP41} style={styles.PlotClassTP41} />
//           )}
//         {selectedLayers.BOTP42 && <GeoJSON data={BOTP42} style={styles.BOTP42} />}
//         {selectedLayers.Plot1TP42 && <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} />}
//         {selectedLayers.Plot2TP42 && <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} />}
//         {selectedLayers.SchemesTP42 && (
//           <GeoJSON data={SchemesTP42} pointToLayer={pointToLayer} style={styles.SchemesTP42} />
//         )}

//         <Sidebar onAction={handleSidebarAction} /> 

        
//         {isLayerPanelOpen && (
//           <div
//             className='layerpanel'
//           >
//             <h4>Toggle Layers</h4>
//             {Object.keys(selectedLayers).map((layer) => (
//               <div key={layer}>
//                 <input
//                   type="checkbox"
//                   name={layer}
//                   checked={selectedLayers[layer]}
//                   onChange={handleLayerChange}
//                 />
//                 <label style={{ marginLeft: '8px' }}>{layer}</label>
//               </div>
//             ))}
//           </div>
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapPage;
