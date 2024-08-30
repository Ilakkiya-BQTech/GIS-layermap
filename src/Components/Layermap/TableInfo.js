import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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

import Road_TP41 from '../../GeoJson/Geojson/Road_TP41.json';
import Road_TP42 from '../../GeoJson/Geojson/Road_TP42.json';
import BO_TP41 from '../../GeoJson/Geojson/BO_TP41.json';
import BO_TP42 from '../../GeoJson/Geojson/BO_TP42.json';
import Schemes_TP41 from '../../GeoJson/Geojson/Schemes_TP41.json';
import Schemes_TP42 from '../../GeoJson/Geojson/Schemes_TP42.json';
import PlotClassTP42 from '../../GeoJson/Geojson/PlotClassTP42.json';
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
  SchemesTP42: { color: 'yellow', weight: 2, fillColor: 'orange' },
};

const pointToLayer = (feature, latlng) => {
  if (feature.geometry.type === 'Point') {
    const { properties } = feature;
    let label = '';
    if (properties.Area) {
      label = properties.TARGET_FID || properties.FID || 'N/A';
    } else if (properties.Road_Width) {
      label = properties.Road_Width || 'N/A';
    } else if (properties.Name) {
      label = properties.Name || 'N/A';
    }

    const marker = L.circleMarker(latlng, {
      radius: 5,
      fillColor: styles.SchemesTP41.color,
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });

    marker.bindTooltip(label, { permanent: true, direction: 'top', offset: [0, -10] });

    return marker;
  }
};

const getJsonData = (name) => {
  console.log("Searching for:", name);

  const data = {
    Road_TP41,
    Road_TP42,
    BO_TP41,
    BO_TP42,
    Schemes_TP41,
    Schemes_TP42,
    PlotClassTP42,
  };

  for (let key in data) {
    console.log(`Checking data for: ${key}`);

    const item = data[key].features.find(
      (feature) => feature.properties.Name === name || feature.properties.Name?.includes(name)
    );
    
    if (item) {
      console.log(`Found item in ${key}:`, item);
      return item;
    }
  }

  console.log("No matching data found.");
  return null;
};

const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      // Extract properties with default values
      const {
        Name ,
        description,
        FID,
        Join_Count ,
        TARGET_FID ,
        Area ,
        Shape_Leng  ,
        Road_Width  ,
      } = feature.properties;
  
      // Create popup content
      const generatePopupContent = (feature) => {
        // Ensure `feature` and `feature.properties` are defined
        if (!feature || !feature.properties) {
          return `<body style="margin:0px;overflow:auto;background:#FFFFFF;">
            <table style="font-family:Arial,Verdana,Times;font-size:12px;text-align:left;width:100%;border-collapse:collapse;padding:3px;">
              <tr style="text-align:center;font-weight:bold;background:#9CBCE2">
                <td>Data not available</td>
              </tr>
            </table>
          </body>`;
        }
      
        const properties = feature.properties;
      
        // Construct the HTML content
        return `
          <body style="margin:0px;overflow:auto;background:#FFFFFF;">
            <table style="font-family:Arial,Verdana,Times;font-size:12px;text-align:left;width:100%;border-collapse:collapse;padding:3px;">
              <tr style="text-align:center;font-weight:bold;background:#9CBCE2">
                <td>${properties.Name || 'N/A'}</td>
              </tr>
              <tr>
                <td>
                  <table style="font-family:Arial,Verdana,Times;font-size:12px;text-align:left;width:100%;border-spacing:0px;padding:3px;">
                    <tr><td>FID</td><td>${properties.FID || 'N/A'}</td></tr>
                    <tr bgcolor="#D4E4F3"><td>OID_</td><td>${properties.OID_ || 'N/A'}</td></tr>
                    <tr><td>Name</td><td>${properties.Name || 'N/A'}</td></tr>
                    <tr bgcolor="#D4E4F3"><td>FolderPath</td><td>${properties.FolderPath || 'N/A'}</td></tr>
                    <tr><td>SymbolID</td><td>${properties.SymbolID || 'N/A'}</td></tr>
                    <tr bgcolor="#D4E4F3"><td>AltMode</td><td>${properties.AltMode || 'N/A'}</td></tr>
                    <tr><td>Base</td><td>${properties.Base || 'N/A'}</td></tr>
                    <tr bgcolor="#D4E4F3"><td>Snippet</td><td>${properties.Snippet || 'N/A'}</td></tr>
                    <tr><td>PopupInfo</td><td>${properties.PopupInfo || 'N/A'}</td></tr>
                    <tr bgcolor="#D4E4F3"><td>HasLabel</td><td>${properties.HasLabel || 'N/A'}</td></tr>
                    <tr><td>LabelID</td><td>${properties.LabelID || 'N/A'}</td></tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        `;
      };
    //    console.log("Feature data:", feature.properties); // Debug log
    //   const popupContent = generatePopupContent(feature.properties);
    //   layer.bindPopup(popupContent);
      
      // Add click event to log feature properties
      layer.on({
        click: () => {
           
        //   console.log('Clicked feature properties:', feature.properties);
          const jsonData = getJsonData(Name);
        //   console.log('JSON Data:', jsonData);
        }
      });
    } else {
      console.log('No properties found for this feature.');
    }
  };
  

const TableInfo = () => {
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
  const [allFeatures, setAllFeatures] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const collectedFeatures = [
      ...BOTP41.features,
      ...PlotsTP41.features,
      ...SchemesTP41.features,
      ...RoadTP41.features,
      ...RoadTP42.features,
      ...BOTP42.features,
      ...Plot1TP42.features,
      ...Plot2TP42.features,
      ...SchemesTP42.features,
    ];
    setAllFeatures(collectedFeatures);
    setFilteredFeatures(collectedFeatures);
  }, []);

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
      // Handle sketch action
    }
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    const filtered = allFeatures.filter((feature) =>
      feature.properties.Name?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredFeatures(filtered);
  };

  return (
    <div className="map-page-container">
      <Sidebar onAction={handleSidebarAction} />
      
      {isLayerPanelOpen && (
        <div className="layerpanel">
          <button
            className="close-button"
            style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
            onClick={toggleLayerPanel}
            aria-label="Close Layer Panel"
          >
            &#x2715;
          </button>
          <h3>Layer Panel</h3>
          <div className="layer-checkboxes">
            {Object.keys(selectedLayers).map((layerName) => (
              <div key={layerName}>
                <input
                  type="checkbox"
                  id={layerName}
                  name={layerName}
                  checked={selectedLayers[layerName]}
                  onChange={handleLayerChange}
                />
                <label htmlFor={layerName}>{layerName}</label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="map-container">
        <MapContainer center={[23.0225, 72.5714]} zoom={16} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {selectedLayers.BOTP41 && (
            <GeoJSON
              data={BOTP41}
              style={() => styles.BOTP41}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.PlotsTP41 && (
            <GeoJSON
              data={PlotsTP41}
              style={() => styles.PlotsTP41}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.SchemesTP41 && (
            <GeoJSON
              data={SchemesTP41}
              style={() => styles.SchemesTP41}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.RoadTP41 && (
            <GeoJSON
              data={RoadTP41}
              style={() => styles.RoadTP41}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.RoadTP42 && (
            <GeoJSON
              data={RoadTP42}
              style={() => styles.RoadTP42}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.BOTP42 && (
            <GeoJSON
              data={BOTP42}
              style={() => styles.BOTP42}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.Plot1TP42 && (
            <GeoJSON
              data={Plot1TP42}
              style={() => styles.Plot1TP42}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.Plot2TP42 && (
            <GeoJSON
              data={Plot2TP42}
              style={() => styles.Plot2TP42}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
          {selectedLayers.SchemesTP42 && (
            <GeoJSON
              data={SchemesTP42}
              style={() => styles.SchemesTP42}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default TableInfo;
