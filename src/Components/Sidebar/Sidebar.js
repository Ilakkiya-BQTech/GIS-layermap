// import React, { useState } from 'react';
// import { FaLayerGroup, FaTable, FaMap, FaChartBar, FaBookmark, FaCog, FaShareAlt, FaPrint, FaTimes, FaPencilAlt } from 'react-icons/fa';
// import { FeatureGroup } from 'react-leaflet';
// import { EditControl } from 'react-leaflet-draw';
// import SharePopup from './Share';
// import '../../Styles/sidebar.css';
// import 'leaflet-draw/dist/leaflet.draw.css';
// import L from 'leaflet';
// import Marker from '../../Assets/Marker-removebg-preview.png'
// const customMarkerIcon = new L.Icon({
//   iconUrl: Marker,
//   iconSize: [30, 30], 
//   iconAnchor: [12, 41], 
//   popupAnchor: [1, -34], 
//   shadowSize: [41, 41] 
// });
// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeExtendedSidebar, setActiveExtendedSidebar] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [showSketchTools, setShowSketchTools] = useState(false);
//   const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleSidebarAction = (action) => {
//     if (action === 'sketch') {
//       setShowSketchTools(!showSketchTools);
//       setActiveExtendedSidebar(null);
//     } else if (action === 'share') {
//       setIsSharePopupOpen(true);
//     } else {
//       setActiveExtendedSidebar(activeExtendedSidebar === action ? null : action);
//       setShowSketchTools(false);
//     }
//     setIsDropdownOpen(false);
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeExtendedSidebar = () => {
//     setActiveExtendedSidebar(null);
//     setShowSketchTools(false);
//   };

//   const closeSharePopup = () => {
//     setIsSharePopupOpen(false);
//   };

//   const currentPageLink = window.location.href;

//   return (
//     <>
//       <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
//         <div className="sidebar-content">
//           <div className="sidebar-tools">
//             {/* Other Sidebar Items */}
//             <div className="sidebar-item" onClick={() => handleSidebarAction('sketch')}>
//               <FaPencilAlt />
//               {isExpanded && <span className="sidebar-title">Sketch</span>}
//             </div>
//             <div className="sidebar-item" onClick={() => handleSidebarAction('layer')}>
//               <FaLayerGroup />
//               {isExpanded && <span className="sidebar-title">Layer</span>}
//             </div>
//             <div className="sidebar-item" onClick={() => handleSidebarAction('table')}>
//               <FaTable />
//               {isExpanded && <span className="sidebar-title">Table</span>}
//             </div>
           
//             <div className="sidebar-item" onClick={() => handleSidebarAction('charts')}>
//               <FaChartBar />
//               {isExpanded && <span className="sidebar-title">Charts</span>}
//             </div>
//             <div className="sidebar-item" onClick={() => handleSidebarAction('bookmark')}>
//               <FaBookmark />
//               {isExpanded && <span className="sidebar-title">Bookmark</span>}
//             </div>
//             <div className="sidebar-item" onClick={() => handleSidebarAction('setting')}>
//               <FaCog />
//               {isExpanded && <span className="sidebar-title">Setting</span>}
//             </div>
//             <div className="sidebar-item" onClick={() => handleSidebarAction('share')}>
//               <FaShareAlt />
//               {isExpanded && <span className="sidebar-title">Share Map</span>}
//             </div>
            
//           </div>
//         </div>
//         <div className="sidebar-toggle" onClick={handleToggle}>
//           {isExpanded ? '<< Collapse' : '>>'}
//         </div>
//       </div>

//       {activeExtendedSidebar && (
//         <div className={`additional-sidebar ${activeExtendedSidebar ? 'open' : ''} ${isExpanded ? 'expanded' : ''}`}>
//           <div className="additional-sidebar-header">
//             <div>
//               <span className="additional-sidebar-title">{activeExtendedSidebar.charAt(0).toUpperCase() + activeExtendedSidebar.slice(1)}</span>
//             </div>
//             <div>
//               <FaTimes className="additional-sidebar-close" onClick={closeExtendedSidebar} />
//             </div>
//           </div>
//           <div className="separator-line"></div>
//           <div className="additional-sidebar-description">
//           {activeExtendedSidebar === 'layer' && (
//               <div className="additional-sidebar-content">
//                 <p>Manage layers in your map. You can add, browse, and organize various layers such as media and sketches.</p>
//                 <button className="dropdown-button" onClick={handleDropdownToggle}>
//                   <div>Add Layer</div>
//                   <div>{isDropdownOpen ? '▲' : '▼'}</div>
//                 </button>
//                 {isDropdownOpen && (
//                   <ul className="dropdown-content">
//                     <li>Browse Layers</li>
//                     <li onClick={() => handleSidebarAction('sketch')}>Add Sketch</li>
//                     <li>Add Media Layer</li>
//                   </ul>
//                 )}
//               </div>
//             )}
//              {activeExtendedSidebar === 'table' && (
//               <div className="additional-sidebar-content">
//                 <p>Manage tables related to your map. You can add new tables and edit existing ones.</p>
//                 <button className="dropdown-button">Add Table</button>
//               </div>
//             )}
           
//             {activeExtendedSidebar === 'charts' && (
//               <div className="additional-sidebar-content">
//                 <p>To add charts, select a layer or table in your map and then click the Configure charts button on the Settings toolbar.</p>
//               </div>
//             )}
//             {activeExtendedSidebar === 'bookmark' && (
//               <div className="additional-sidebar-content">
//                 <h3>Bookmark Options</h3>
//                 <p>Create bookmarks to save and revisit specific map views and locations.</p>
//                 <button className="dropdown-button">Add Bookmark</button>
//               </div>
//             )}
//             {activeExtendedSidebar === 'setting' && (
//               <div className="additional-sidebar-content">
//                 <p>Adjust the map settings including background, timezone, and other properties.</p>
//                 <ul>
//                   <li>Background</li>
//                   <li>Timezone</li>
//                 </ul>
//               </div>
//             )}
//             {activeExtendedSidebar === 'share' && (
//               <div className="additional-sidebar-content">
//                 <p>Share your map with others. Customize the sharing options to control access and visibility.</p>
//               </div>
//             )}
           
//           </div>
//         </div>
//       )}


//       {showSketchTools && (
//         <div className="sketch-tools-container">
//           <FeatureGroup>
//             <EditControl
//               position='topright'
//               draw={{
//                 rectangle: true,
//                 polyline: true,
//                 polygon: true,
//                 circle: true,
//                 marker: {
//                   icon: customMarkerIcon, 
//                 },
//               }}
//             />
//           </FeatureGroup>
//         </div>
//       )}

//       {isSharePopupOpen && <SharePopup onClose={closeSharePopup} pageLink={currentPageLink} />}
//     </>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { FaLayerGroup, FaTable, FaMap, FaChartBar, FaBookmark, FaCog, FaShareAlt, FaPrint, FaTimes, FaPencilAlt, FaRuler } from 'react-icons/fa';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import SharePopup from './Share';
import MeasurementTool from './Measurement';
import '../../Styles/sidebar.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import Marker from '../../Assets/Marker-removebg-preview.png';

const customMarkerIcon = new L.Icon({
  iconUrl: Marker,
  iconSize: [30, 30], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34], 
  shadowSize: [41, 41] 
});

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeExtendedSidebar, setActiveExtendedSidebar] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSketchTools, setShowSketchTools] = useState(false);
  const [isMeasurementToolVisible, setIsMeasurementToolVisible] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSidebarAction = (action) => {
    if (action === 'sketch') {
      setShowSketchTools(true);
      setIsMeasurementToolVisible(false);
      setIsSharePopupOpen(false);
      setActiveExtendedSidebar(null);
    } else if (action === 'measurement') {
      setIsMeasurementToolVisible(true);
      setShowSketchTools(false);
      setIsSharePopupOpen(false);
      setActiveExtendedSidebar(null);
    } else if (action === 'share') {
      setIsSharePopupOpen(true);
      setShowSketchTools(false);
      setIsMeasurementToolVisible(false);
      setActiveExtendedSidebar(null);
    } else {
      setActiveExtendedSidebar(activeExtendedSidebar === action ? null : action);
      setShowSketchTools(false);
      setIsMeasurementToolVisible(false);
      setIsSharePopupOpen(false);
    }
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeExtendedSidebar = () => {
    setActiveExtendedSidebar(null);
    setShowSketchTools(false);
    setIsMeasurementToolVisible(false);
    setIsSharePopupOpen(false);
  };

  const closeSharePopup = () => {
    setIsSharePopupOpen(false);
  };

  const currentPageLink = window.location.href;

  return (
    <>
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-tools">
            {/* Other Sidebar Items */}
            <div className="sidebar-item" onClick={() => handleSidebarAction('sketch')}>
              <FaPencilAlt />
              {isExpanded && <span className="sidebar-title">Sketch</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('measurement')}>
              <FaRuler /> {/* Measurement icon */}
              {isExpanded && <span className="sidebar-title">Measurement</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('layer')}>
              <FaLayerGroup />
              {isExpanded && <span className="sidebar-title">Layer</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('table')}>
              <FaTable />
              {isExpanded && <span className="sidebar-title">Table</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('charts')}>
              <FaChartBar />
              {isExpanded && <span className="sidebar-title">Charts</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('bookmark')}>
              <FaBookmark />
              {isExpanded && <span className="sidebar-title">Bookmark</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('setting')}>
              <FaCog />
              {isExpanded && <span className="sidebar-title">Setting</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('share')}>
              <FaShareAlt />
              {isExpanded && <span className="sidebar-title">Share Map</span>}
            </div>
          </div>
        </div>
        <div className="sidebar-toggle" onClick={handleToggle}>
          {isExpanded ? '<< Collapse' : '>>'}
        </div>
      </div>

      {activeExtendedSidebar && (
        <div className={`additional-sidebar ${activeExtendedSidebar ? 'open' : ''} ${isExpanded ? 'expanded' : ''}`}>
          <div className="additional-sidebar-header">
            <div>
              <span className="additional-sidebar-title">{activeExtendedSidebar.charAt(0).toUpperCase() + activeExtendedSidebar.slice(1)}</span>
            </div>
            <div>
              <FaTimes className="additional-sidebar-close" onClick={closeExtendedSidebar} />
            </div>
          </div>
          <div className="separator-line"></div>
          <div className="additional-sidebar-description">
            {activeExtendedSidebar === 'layer' && (
              <div className="additional-sidebar-content">
                <p>Manage layers in your map. You can add, browse, and organize various layers such as media and sketches.</p>
                <button className="dropdown-button" onClick={handleDropdownToggle}>
                  <div>Add Layer</div>
                  <div>{isDropdownOpen ? '▲' : '▼'}</div>
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-content">
                    <li>Browse Layers</li>
                    <li onClick={() => handleSidebarAction('sketch')}>Add Sketch</li>
                    <li>Add Media Layer</li>
                  </ul>
                )}
              </div>
            )}
            
          </div>
        </div>
      )}

      {showSketchTools && (
        <div className="sketch-tools-container">
          <FeatureGroup>
            <EditControl
              position='topright'
              draw={{
                rectangle: true,
                polyline: true,
                polygon: true,
                circle: true,
                marker: {
                  icon: customMarkerIcon, 
                },
              }}
            />
          </FeatureGroup>
        </div>
      )}

      {isMeasurementToolVisible && (
        <MeasurementTool />
      )}

      {isSharePopupOpen && <SharePopup onClose={closeSharePopup} pageLink={currentPageLink} />}
    </>
  );
};

export default Sidebar;
