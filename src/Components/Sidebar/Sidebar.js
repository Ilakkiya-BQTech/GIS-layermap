import React, { useState } from 'react';
import { FaLayerGroup, FaTable, FaMap, FaChartBar, FaBookmark, FaCog, FaShareAlt, FaPrint, FaTimes, FaPencilAlt } from 'react-icons/fa';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import SharePopup from './Share';
import '../../Styles/sidebar.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeExtendedSidebar, setActiveExtendedSidebar] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSketchTools, setShowSketchTools] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSidebarAction = (action) => {
    if (action === 'sketch') {
      setShowSketchTools(!showSketchTools);
      setActiveExtendedSidebar(null);
    } else if (action === 'share') {
      setIsSharePopupOpen(true);
    } else {
      setActiveExtendedSidebar(activeExtendedSidebar === action ? null : action);
      setShowSketchTools(false);
    }
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeExtendedSidebar = () => {
    setActiveExtendedSidebar(null);
    setShowSketchTools(false);
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
            <div className="sidebar-item" onClick={() => handleSidebarAction('layer')}>
              <FaLayerGroup />
              {isExpanded && <span className="sidebar-title">Layer</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('table')}>
              <FaTable />
              {isExpanded && <span className="sidebar-title">Table</span>}
            </div>
            <div className="sidebar-item" onClick={() => handleSidebarAction('basemap')}>
              <FaMap />
              {isExpanded && <span className="sidebar-title">Basemap</span>}
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
            <div className="sidebar-item" onClick={() => handleSidebarAction('print')}>
              <FaPrint />
              {isExpanded && <span className="sidebar-title">Print</span>}
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
             {activeExtendedSidebar === 'table' && (
              <div className="additional-sidebar-content">
                <p>Manage tables related to your map. You can add new tables and edit existing ones.</p>
                <button className="dropdown-button">Add Table</button>
              </div>
            )}
            {activeExtendedSidebar === 'basemap' && (
              <div className="additional-sidebar-content">
                <p>Choose the right basemap for your project. Select from a variety of available maps.</p>
                <ul>
                  <li>Topographic</li>
                  <li>Dark Grey Canvas</li>
                  <li>Imagery</li>
                  <li>Oceans</li>
                  <li>Street Map</li>
                </ul>
              </div>
            )}
            {activeExtendedSidebar === 'charts' && (
              <div className="additional-sidebar-content">
                <p>To add charts, select a layer or table in your map and then click the Configure charts button on the Settings toolbar.</p>
              </div>
            )}
            {activeExtendedSidebar === 'bookmark' && (
              <div className="additional-sidebar-content">
                <h3>Bookmark Options</h3>
                <p>Create bookmarks to save and revisit specific map views and locations.</p>
                <button className="dropdown-button">Add Bookmark</button>
              </div>
            )}
            {activeExtendedSidebar === 'setting' && (
              <div className="additional-sidebar-content">
                <p>Adjust the map settings including background, timezone, and other properties.</p>
                <ul>
                  <li>Background</li>
                  <li>Timezone</li>
                </ul>
              </div>
            )}
            {activeExtendedSidebar === 'share' && (
              <div className="additional-sidebar-content">
                <p>Share your map with others. Customize the sharing options to control access and visibility.</p>
              </div>
            )}
            {activeExtendedSidebar === 'print' && (
              <div className="additional-sidebar-content">
                <p>Print your map with customized layouts and settings. Set the print area and orientation before printing.</p>
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
                marker: true,
              }}
            />
          </FeatureGroup>
        </div>
      )}

      {isSharePopupOpen && <SharePopup onClose={closeSharePopup} pageLink={currentPageLink} />}
    </>
  );
};

export default Sidebar;
