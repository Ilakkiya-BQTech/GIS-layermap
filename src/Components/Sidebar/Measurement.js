// src/Components/MeasurementTool.js
import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet-measure/dist/leaflet-measure.css';
import { useMap } from 'react-leaflet';
import 'leaflet-measure';
import '../../Styles/sidebar.css';

const MeasurementTool = () => {
  const [unit, setUnit] = useState('metric');
  const [distance, setDistance] = useState(0);

  const map = useMap();

  React.useEffect(() => {
    const measureControl = new L.Control.Measure({
      primaryLengthUnit: unit,
      secondaryLengthUnit: unit === 'metric' ? 'kilometers' : 'miles',
      activeColor: '#db4a29',
      completedColor: '#db4a29'
    });
    measureControl.addTo(map);

    return () => {
      map.removeControl(measureControl);
    };
  }, [map, unit]);

  return (
    <>
      {/* <button
        className="measurement-tool-button"
        onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
      >
        {unit === 'metric' ? 'Switch to Imperial' : 'Switch to Metric'}
      </button> */}
    </>
  );
};

export default MeasurementTool;


