import React from 'react';
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

// Import JSON data for detailed information
import Road_TP41 from '../../GeoJson/Geojson/Road_TP41.json';
import Road_TP42 from '../../GeoJson/Geojson/Road_TP42.json';
import BO_TP41 from '../../GeoJson/Geojson/BO_TP41.json';
import BO_TP42 from '../../GeoJson/Geojson/BO_TP42.json';
import Schemes_TP41 from '../../GeoJson/Geojson/Schemes_TP41.json';
import Schemes_TP42 from '../../GeoJson/Geojson/Schemes_TP42.json';
import PlotClassTP42 from '../../GeoJson/Geojson/PlotClassTP42.json';

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
  return (
    <div>
      <MapContainer center={[23.073162583462938, 72.508005683621647]} zoom={16} style={{ height: '600px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={BOTP41} style={styles.BOTP41} onEachFeature={onEachFeature} />
        <GeoJSON data={PlotsTP41} style={styles.PlotsTP41} onEachFeature={onEachFeature} />
        <GeoJSON data={SchemesTP41} style={styles.SchemesTP41} pointToLayer={pointToLayer} onEachFeature={onEachFeature} />
        <GeoJSON data={RoadTP41} style={styles.RoadTP41} onEachFeature={onEachFeature} />
        <GeoJSON data={RoadTP42} style={styles.RoadTP42} onEachFeature={onEachFeature} />
        <GeoJSON data={BOTP42} style={styles.BOTP42} onEachFeature={onEachFeature} />
        <GeoJSON data={Plot1TP42} style={styles.Plot1TP42} onEachFeature={onEachFeature} />
        <GeoJSON data={Plot2TP42} style={styles.Plot2TP42} onEachFeature={onEachFeature} />
        <GeoJSON data={SchemesTP42} style={styles.SchemesTP42} pointToLayer={pointToLayer} onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  );
};

export default MapContainerComponent;