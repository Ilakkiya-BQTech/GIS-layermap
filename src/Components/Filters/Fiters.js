
import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import BOTP41 from '../../GeoJson/Kmz/BOTP41';
import BOTP42 from '../../GeoJson/Kmz/BOTP42';
import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
import Plot1TP42 from '../../GeoJson/Kmz/Plot1TP42';
import Plot2TP42 from '../../GeoJson/Kmz/Plot2TP42';
import SchemesTP42 from '../../GeoJson/Kmz/SchemesTP42';
import L from 'leaflet';
import '../../Styles/features.css';

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
    return L.circleMarker(latlng, {
      radius: 5,
      fillColor: styles.SchemesTP41.color,
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    }).bindTooltip(`<strong>${feature.properties.Name}</strong>`);
  }
};

const parseDescription = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const rows = Array.from(doc.querySelectorAll('tr'));

  const data = {};
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    if (cells.length === 2) {
      data[cells[0].innerText] = cells[1].innerText;
    }
  });

  return data;
};

const Filtermap = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [areaFilter, setAreaFilter] = useState('');
  const [shapeLengthFilter, setShapeLengthFilter] = useState('');
  const [targetFidFilter, setTargetFidFilter] = useState('');
  const [filterConditionArea, setFilterConditionArea] = useState('>');
  const [filterConditionShapeLength, setFilterConditionShapeLength] = useState('>');
  const [filterConditionTargetFid, setFilterConditionTargetFid] = useState('>');
  const [layerFilter, setLayerFilter] = useState('PlotsTP41');
 
  const [filteredPlots, setFilteredPlots] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filter) => {
      setActiveFilter(filter);
  };

  const handleClose = () => {
      setActiveFilter(null);
  };
  const renderFilterContainer = () => {
    switch (activeFilter) {
        case 'Area':
            return (
                <div className="filter-container">
                    <div className="filter-header">
                        <h3>Filter by Area</h3>
                        <button onClick={handleClose} className="close-button">×</button>
                    </div>
                    <div className="filter-body">
                        <label>
                            Condition:
                            <select onChange={handleConditionChangeArea}>
                                <option value=">">Greater Than</option>
                                <option value="<">Lesser Than</option>
                                <option value="=">Equal To</option>
                            </select>
                        </label>
                        <input type="number" placeholder="Enter area..."  value={areaFilter} onChange={handleFilterChange}/>
                        <button className="filter-button" onClick={() => {applyFilter();handleClose();}}>Filter</button>
                    </div>
                </div>
            );
        case 'Shapelength':
            return (
                <div className="filter-container">
                    <div className="filter-header">
                        <h3>Filter by Shapelength</h3>
                        <button onClick={handleClose} className="close-button">×</button>
                    </div>
                    <div className="filter-body">
                        <label>
                            Condition:
                            <select onChange={handleConditionChangeShapeLength}>
                                <option value=">">Greater Than</option>
                                <option value="<">Lesser Than</option>
                                <option value="=">Equal To</option>
                            </select>
                        </label>
                        <input type="number" placeholder="Enter shapelength..."  value={shapeLengthFilter} onChange={handleShapeLengthFilterChange}/>
                        <button className="filter-button" onClick={() => {applyFilter();handleClose();}}>Filter</button>
                    </div>
                </div>
            );
        case 'TargetFID':
            return (
                <div className="filter-container">
                    <div className="filter-header">
                        <h3>Filter by Target FID</h3>
                        <button onClick={handleClose} className="close-button">×</button>
                    </div>
                    <div className="filter-body">
                        <label>
                            Condition:
                            <select onChange={handleConditionChangeTargetFid}>
                                <option value=">">Greater Than</option>
                                <option value="<">Lesser Than</option>
                                <option value="=">Equal To</option>
                            </select>
                        </label>
                        <input type="number" placeholder="Enter target FID..." value={targetFidFilter} onChange={handleTargetFidFilterChange} />
                        <button className="filter-button" onClick={() => {applyFilter();handleClose();}}>Filter</button>
                    </div>
                    </div>
            );
        case 'Layer':
            return (
                <div className="filter-container">
                    <div className="filter-header">
                        <h3>Filter by Layer</h3>
                        <button onClick={handleClose} className="close-button">×</button>
                    </div>
                    <div className="filter-body">
                        <label>
                            Layer:
                            <select onChange={LayerFilterChange}>
    <option value="all">All Layers</option>
    <option value="PlotsTP41">PlotsTP41</option>
    <option value="BOTP41">BOTP41</option>
    <option value="RoadTP41">RoadTP41</option>
    <option value="SchemesTP41">SchemesTP41</option>
    <option value="Plot1TP42">Plot1TP42</option>
    <option value="Plot2TP42">Plot2TP42</option>
    <option value="SchemesTP42">SchemesTP42</option>
  </select>
                        </label>
                        <input type="text" placeholder="Enter Feature name to search..." value={nameFilter} onChange={handleNameFilterChange}/>
                        <button className="filter-button" onClick={() => {applyFilter();handleClose();}}>Filter</button>
                    </div>
                </div>
            );
        default:
            return null;
    }
};
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        const data = parseDescription(feature.properties.description);
        setSelectedFeature(data);

        const filteredFeature = {
          FID: data.FID || '',
          Join_Count: data.Join_Count || '',
          TARGET_FID: data.TARGET_FID || '',
          Area: data.Area || '',
          Shape_Leng: data.Shape_Leng || '',
          Name: data.Name || '',
        };

        const label = `<strong>${filteredFeature.Name || 'N/A'} || ${filteredFeature.TARGET_FID || 'N/A'} || ${filteredFeature.FID || 'N/A'}</strong>`;
        layer.bindTooltip(label).openTooltip();
      }
    });
  };
  const filterAndSortGeoJsonData = (geoJsonData, filters) => {
    const { areaValue, shapeLengthValue, targetFidValue, nameFilter, conditionArea, conditionShapeLength, conditionTargetFid, sortBy } = filters;
  
    const filteredFeatures = geoJsonData.features
      .filter(feature => {
        const data = parseDescription(feature.properties.description);
        const area = parseFloat(data.Area);
        const shapeLength = parseFloat(data.Shape_Leng);
        const targetFid = parseFloat(data.TARGET_FID);
        const name = data.Name || "";
  
        let passesAreaFilter = true;
        let passesShapeLengthFilter = true;
        let passesTargetFidFilter = true;
        let passesNameFilter = true;
  
        if (areaValue) {
          switch (conditionArea) {
            case '>':
              passesAreaFilter = area > areaValue;
              break;
            case '<':
              passesAreaFilter = area < areaValue;
              break;
            case '=':
              passesAreaFilter = area === areaValue;
              break;
            default:
              passesAreaFilter = true;
          }
        }
  
        if (shapeLengthValue) {
          switch (conditionShapeLength) {
            case '>':
              passesShapeLengthFilter = shapeLength > shapeLengthValue;
              break;
            case '<':
              passesShapeLengthFilter = shapeLength < shapeLengthValue;
              break;
            case '=':
              passesShapeLengthFilter = shapeLength === shapeLengthValue;
              break;
            default:
              passesShapeLengthFilter = true;
          }
        }
  
        if (targetFidValue) {
          switch (conditionTargetFid) {
            case '>':
              passesTargetFidFilter = targetFid > targetFidValue;
              break;
            case '<':
              passesTargetFidFilter = targetFid < targetFidValue;
              break;
            case '=':
              passesTargetFidFilter = targetFid === targetFidValue;
              break;
            default:
              passesTargetFidFilter = true;
          }
        }
  
        if (nameFilter) {
          passesNameFilter = name.toLowerCase().includes(nameFilter.toLowerCase());
        }
  
        return passesAreaFilter && passesShapeLengthFilter && passesTargetFidFilter && passesNameFilter;
      })
      .sort((a, b) => {
        const dataA = parseDescription(a.properties.description);
        const dataB = parseDescription(b.properties.description);
        const valueA = sortBy === 'name' ? (dataA.Name || "") : (sortBy === 'area' ? parseFloat(dataA.Area) : parseFloat(dataA.FID));
        const valueB = sortBy === 'name' ? (dataB.Name || "") : (sortBy === 'area' ? parseFloat(dataB.Area) : parseFloat(dataB.FID));
  
        if (sortBy === 'name') {
          return valueA.localeCompare(valueB); // Sort alphabetically by name
        }
        return valueB - valueA; // Sort numerically for area and FID
      });
  
    return {
      type: "FeatureCollection",
      features: filteredFeatures,
    };
  };
  

  const handleFilterChange = (e) => {
    setAreaFilter(e.target.value);
  };

  const handleShapeLengthFilterChange = (e) => {
    setShapeLengthFilter(e.target.value);
  };

  const handleTargetFidFilterChange = (e) => {
    setTargetFidFilter(e.target.value);
  };
  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleConditionChangeArea = (e) => {
    setFilterConditionArea(e.target.value);
  };

  const handleConditionChangeShapeLength = (e) => {
    setFilterConditionShapeLength(e.target.value);
  };

  const handleConditionChangeTargetFid = (e) => {
    setFilterConditionTargetFid(e.target.value);
  };

  const LayerFilterChange = (e) => {
    setLayerFilter(e.target.value);
  };
  const handleLayerFilterChange = (event) => {
    const selectedLayer = event.target.value;
    
    if (selectedLayer === 'all') {
      // Code to display all layers
      // For example, you might have a function to set all layers visible:
      showAllLayers();
    } else {
      // Code to display the selected layer
      showLayer(selectedLayer);
    }
  };
  
  const showAllLayers = () => {
    // Implement logic to show all layers on the map
  };
  
  const showLayer = (layer) => {
    // Implement logic to show the specific layer on the map
  };
  

  const applyFilter = () => {
    const filters = {
      areaValue: parseFloat(areaFilter),
      shapeLengthValue: parseFloat(shapeLengthFilter),
      targetFidValue: parseFloat(targetFidFilter),
      nameFilter,
      conditionArea: filterConditionArea,
      conditionShapeLength: filterConditionShapeLength,
      conditionTargetFid: filterConditionTargetFid,
    };

    let geoJsonData;

    switch (layerFilter) {
      case 'PlotsTP41':
        geoJsonData = PlotsTP41;
        break;
      case 'BOTP41':
        geoJsonData = BOTP41;
        break;
      case 'RoadTP41':
        geoJsonData = RoadTP41;
        break;
      case 'SchemesTP41':
        geoJsonData = SchemesTP41;
        break;
      case 'Plot1TP42':
        geoJsonData = Plot1TP42;
        break;
      case 'Plot2TP42':
        geoJsonData = Plot2TP42;
        break;
      case 'SchemesTP42':
        geoJsonData = SchemesTP42;
        break;
      default:
        geoJsonData = null;
    }

    if (geoJsonData) {
      setFilteredPlots(filterAndSortGeoJsonData(geoJsonData, filters));
    }
  };
  return (
    <div>
       <div className="filter-icon-container">
                <button onClick={() => handleFilterClick('Area')}>Area</button>
                <button onClick={() => handleFilterClick('Shapelength')}>Shapelength</button>
                <button onClick={() => handleFilterClick('TargetFID')}>Target FID</button>
                <button onClick={() => handleFilterClick('Layer')}>Layer</button>
            </div>
            {renderFilterContainer()}
      
      <MapContainer center={[23.078431794456741, 72.510097885360603]} zoom={15} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredPlots && (
          <GeoJSON
            data={filteredPlots}
            style={(feature) => styles[feature.properties.layerName] || styles['default']}
            pointToLayer={pointToLayer}
            onEachFeature={onEachFeature}
          />
        )}
                {!filteredPlots && (
          <>
            <GeoJSON
              data={PlotsTP41}
              onEachFeature={onEachFeature}
              style={styles.PlotsTP41}
            />
            <GeoJSON
              data={RoadTP41}
              onEachFeature={onEachFeature}
              style={styles.RoadTP41}
            />
            <GeoJSON
              data={RoadTP42}
              onEachFeature={onEachFeature}
              style={styles.RoadTP42}
            />
            <GeoJSON
              data={SchemesTP41}
              onEachFeature={onEachFeature}
              style={styles.SchemesTP41}
              pointToLayer={pointToLayer}
            />
            <GeoJSON
              data={Plot1TP42}
              onEachFeature={onEachFeature}
              style={styles.Plot1TP42}
            />
            <GeoJSON
              data={Plot2TP42}
              onEachFeature={onEachFeature}
              style={styles.Plot2TP42}
            />
            <GeoJSON
              data={SchemesTP42}
              onEachFeature={onEachFeature}
              style={styles.SchemesTP42}
              pointToLayer={pointToLayer}
            />
          </>
        )}


      </MapContainer>
      {selectedFeature && (
  <div className="feature-details">
    <h2>Selected Feature Details:</h2>
    <div className="details-container">
      {Object.entries(selectedFeature)
        .filter(([key, value]) => value && value !== 'N/A' && !['SymbolID', 'AltMode', 'Base', 'HasLabel', 'LabelID'].includes(key)) // Filter out specific keys and unwanted values
        .map(([key, value]) => (
          <div key={key} className="detail-item">
            <strong className="detail-key">{key}:</strong>
            <span className="detail-value">{value}</span>
          </div>
        ))}
    </div>
  </div>
)}

    </div>
  );
};

export default Filtermap;