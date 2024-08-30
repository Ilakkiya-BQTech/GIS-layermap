// import React, { useState } from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import BOTP41 from '../../GeoJson/Kmz/BOTP41';
// import BOTP42 from '../../GeoJson/Kmz/BOTP42';
// import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
// import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
// import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
// import SchemesTP41 from '../../GeoJson/Kmz/SchemesTP41';
// import Plot1TP42 from '../../GeoJson/Kmz/Plot1TP42';
// import Plot2TP42 from '../../GeoJson/Kmz/Plot2TP42';
// import SchemesTP42 from '../../GeoJson/Kmz/SchemesTP42';
// import L from 'leaflet';
// import '../../Styles/features.css';

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
//   SchemesTP42: { color: 'yellow', weight: 2, fillColor: 'orange' },
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
//     }).bindTooltip(`<strong>${feature.properties.Name}</strong>`);
//   }
// };

// const parseDescription = (html) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   const rows = Array.from(doc.querySelectorAll('tr'));

//   const data = {};
//   rows.forEach(row => {
//     const cells = Array.from(row.querySelectorAll('td'));
//     if (cells.length === 2) {
//       data[cells[0].innerText] = cells[1].innerText;
//     }
//   });

//   return data;
// };

// const Filtermap = () => {
//   const [selectedFeature, setSelectedFeature] = useState(null);
//   const [areaFilter, setAreaFilter] = useState('');
//   const [filterCondition, setFilterCondition] = useState('>');
//   const [filteredPlots, setFilteredPlots] = useState(PlotsTP41);

//   const onEachFeature = (feature, layer) => {
//     layer.on({
//       click: () => {
//         const data = parseDescription(feature.properties.description);
//         setSelectedFeature(data);

//         const filteredFeature = {
//           FID: data.FID || '',
//           Join_Count: data.Join_Count || '',
//           TARGET_FID: data.TARGET_FID || '',
//           Area: data.Area || '',
//           Shape_Leng: data.Shape_Leng || '',
//           Name: data.Name || '',
//         };

//         const label = `<strong>${filteredFeature.Name || 'N/A'} || ${filteredFeature.TARGET_FID || 'N/A'} ||${filteredFeature.FID || 'N/A'}</strong>`;
//         layer.bindTooltip(label).openTooltip();
//       }
//     });
//   };

//   const filterAndSortGeoJsonData = (geoJsonData, areaValue, condition) => {
//     const filteredFeatures = geoJsonData.features
//       .filter(feature => {
//         const data = parseDescription(feature.properties.description);
//         const area = parseFloat(data.Area);

//         switch (condition) {
//           case '>':
//             return area < areaValue; // Updated to show areas less than the input
//           case '<':
//             return area > areaValue; // Updated to show areas greater than the input
//           case '=':
//             return area === areaValue;
//           default:
//             return false;
//         }
//       })
//       .sort((a, b) => {
//         const areaA = parseFloat(parseDescription(a.properties.description).Area) || 0;
//         const areaB = parseFloat(parseDescription(b.properties.description).Area) || 0;
//         return areaB - areaA; // Sort in descending order; use areaA - areaB for ascending
//       });

//     console.log('Filtered Areas:', filteredFeatures.map(feature => {
//       const data = parseDescription(feature.properties.description);
//       return { FID: data.FID, Area: data.Area };
//     }));

//     return {
//       ...geoJsonData,
//       features: filteredFeatures,
//     };
//   };

//   const handleFilterChange = (e) => {
//     setAreaFilter(e.target.value);
//   };

//   const handleConditionChange = (e) => {
//     setFilterCondition(e.target.value);
//   };

//   const applyFilter = () => {
//     const filteredData = filterAndSortGeoJsonData(PlotsTP41, parseFloat(areaFilter), filterCondition);
//     setFilteredPlots(filteredData);
//   };

//   return (
//     <div style={{ position: 'relative', height: '99vh', width: '100%' }}>
//       <div style={{ padding: '10px' }}>
//         <label htmlFor="filterCondition">Condition: </label>
//         <select id="filterCondition" value={filterCondition} onChange={handleConditionChange}>
//           <option value="<">Less than</option>
//           <option value=">">Greater than</option>
//           <option value="=">Equal to</option>
//         </select>
//         <label htmlFor="areaFilter"> Area: </label>
//         <input
//           type="number"
//           id="areaFilter"
//           value={areaFilter}
//           onChange={handleFilterChange}
//           placeholder="Enter area value"
//         />
//         <button onClick={applyFilter}>Apply Filter</button>
//       </div>
//       <MapContainer center={[23.078431794456741, 72.510097885360603]} zoom={15} style={{ height: "100%", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <GeoJSON
//           data={BOTP41}
//           onEachFeature={onEachFeature}
//           style={styles.BOTP41}
//         />
//         <GeoJSON
//           data={filteredPlots}
//           onEachFeature={onEachFeature}
//           style={styles.PlotsTP41}
//         />
//         <GeoJSON
//           data={RoadTP41}
//           onEachFeature={onEachFeature}
//           style={styles.RoadTP41}
//         />
//         <GeoJSON
//           data={RoadTP42}
//           onEachFeature={onEachFeature}
//           style={styles.RoadTP42}
//         />
//         <GeoJSON
//           data={SchemesTP41}
//           onEachFeature={onEachFeature}
//           style={styles.SchemesTP41}
//           pointToLayer={pointToLayer}
//         />
//         <GeoJSON
//           data={Plot1TP42}
//           onEachFeature={onEachFeature}
//           style={styles.Plot1TP42}
//         />
//         <GeoJSON
//           data={Plot2TP42}
//           onEachFeature={onEachFeature}
//           style={styles.Plot2TP42}
//         />
//         <GeoJSON
//           data={SchemesTP42}
//           onEachFeature={onEachFeature}
//           style={styles.SchemesTP42}
//           pointToLayer={pointToLayer}
//         />
//       </MapContainer>

//       {selectedFeature && (
//         <div className='feature-details'>
//           <h2>Feature Details</h2>
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <tbody>
//               {Object.entries(selectedFeature)
//                 .filter(([_, value]) => value) // Filter out empty or null values
//                 .slice(0, 8)
//                 .map(([key, value]) => (
//                   <tr key={key}>
//                     <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}><strong>{key}:</strong></td>
//                     <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{value}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filtermap;
import React, { useState, useCallback } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import BOTP41 from '../../GeoJson/Kmz/BOTP41';
import PlotsTP41 from '../../GeoJson/Kmz/PlotsTP41';
import RoadTP41 from '../../GeoJson/Kmz/RoadTP41';
import RoadTP42 from '../../GeoJson/Kmz/RoadTP42';
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
  const [filterCondition, setFilterCondition] = useState('>');
  const [filteredPlots, setFilteredPlots] = useState(PlotsTP41);

  const map = useMap(); // Get Leaflet map instance

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

  const filterAndSortGeoJsonData = (geoJsonData, areaValue, condition) => {
    const filteredFeatures = geoJsonData.features
      .filter(feature => {
        const data = parseDescription(feature.properties.description);
        const area = parseFloat(data.Area);

        switch (condition) {
          case '>':
            return area < areaValue;
          case '<':
            return area > areaValue;
          case '=':
            return area === areaValue;
          default:
            return false;
        }
      })
      .sort((a, b) => {
        const areaA = parseFloat(parseDescription(a.properties.description).Area) || 0;
        const areaB = parseFloat(parseDescription(b.properties.description).Area) || 0;
        return areaB - areaA;
      });

    console.log('Filtered Areas:', filteredFeatures.map(feature => {
      const data = parseDescription(feature.properties.description);
      return { FID: data.FID, Area: data.Area };
    }));

    return {
      ...geoJsonData,
      features: filteredFeatures,
    };
  };

  const handleFilterChange = (e) => {
    setAreaFilter(e.target.value);
  };

  const handleConditionChange = (e) => {
    setFilterCondition(e.target.value);
  };

  const applyFilter = () => {
    const filteredData = filterAndSortGeoJsonData(PlotsTP41, parseFloat(areaFilter), filterCondition);
    setFilteredPlots(filteredData);

    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof L.GeoJSON) {
          map.removeLayer(layer);
        }
      });
    }
  };

  return (
    <div style={{ position: 'relative', height: '99vh', width: '100%' }}>
      <div style={{ padding: '10px' }}>
        <label htmlFor="filterCondition">Condition: </label>
        <select id="filterCondition" value={filterCondition} onChange={handleConditionChange}>
          <option value="<">Less than</option>
          <option value=">">Greater than</option>
          <option value="=">Equal to</option>
        </select>
        <label htmlFor="areaFilter"> Area: </label>
        <input
          type="number"
          id="areaFilter"
          value={areaFilter}
          onChange={handleFilterChange}
          placeholder="Enter area value"
        />
        <button onClick={applyFilter}>Apply Filter</button>
      </div>
      <MapContainer
        center={[23.078431794456741, 72.510097885360603]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={BOTP41}
          onEachFeature={onEachFeature}
          style={styles.BOTP41}
        />
        <GeoJSON
          data={filteredPlots}
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
      </MapContainer>

      {selectedFeature && (
        <div className='feature-details'>
          <h2>Feature Details</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {Object.entries(selectedFeature)
                .filter(([_, value]) => value) // Filter out empty or null values
                .slice(0, 8)
                .map(([key, value]) => (
                  <tr key={key}>
                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{key}:</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Filtermap;
