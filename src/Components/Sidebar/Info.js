import React from 'react';
import '../../Styles/layers.css'


const FeatureInfoPage = ({ feature }) => {
    return (
      <div className="feature-info-container">
        {feature ? (
          <>
            <p><strong>ID:</strong> {feature.id}</p>
            <p><strong>Name:</strong> {feature.name}</p>
            {feature.additionalInfo && <p><strong>Additional Info:</strong> {feature.additionalInfo}</p>}
          </>
        ) : (
          <p>Click a feature to see details.</p>
        )}
      </div>
    );
  };
  

export default FeatureInfoPage;



