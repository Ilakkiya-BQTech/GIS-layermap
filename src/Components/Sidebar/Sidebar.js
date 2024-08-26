import React, { useState } from 'react';
import { FaLayerGroup, FaTable, FaMap, FaChartBar, FaBookmark, FaCog, FaShareAlt, FaPrint, FaTimes } from 'react-icons/fa';
import '../../Styles/sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeExtendedSidebar, setActiveExtendedSidebar] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSidebarAction = (action) => {
    setActiveExtendedSidebar(activeExtendedSidebar === action ? null : action);
    setIsDropdownOpen(false); 
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeExtendedSidebar = () => {
    setActiveExtendedSidebar(null);
  };

  return (
    <>
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-tools">
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
            <span className="additional-sidebar-title">{activeExtendedSidebar.charAt(0).toUpperCase() + activeExtendedSidebar.slice(1)}</span></div>
            <div> <FaTimes className="additional-sidebar-close" onClick={closeExtendedSidebar} /></div>
          </div>
          <div className="separator-line"></div>
          <div className="additional-sidebar-description">
            {activeExtendedSidebar === 'layer' &&  <div className="additional-sidebar-content">
              <p>Manage layers in your map. You can add, browse, and organize various layers such as media and sketches.</p>
              <button className="dropdown-button" onClick={handleDropdownToggle}>
                <div>Add Layer</div><div> {isDropdownOpen ? '▲' : '▼'}</div>
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-content">
                  <li>Browse Layers</li>
                  <li>Add Sketch</li>
                  <li>Add Media Layer</li>
                </ul>
              )}
            </div>
            }
            {activeExtendedSidebar === 'table' && 
             <div className="additional-sidebar-content">
              <p>Manage tables related to your map. You can add new tables and edit existing ones.</p>
             
             <button className="dropdown-button">Add Table</button>
             
             </div>}
            {activeExtendedSidebar === 'basemap' &&
            <div className="additional-sidebar-content">
               <p>Choose the right basemap for your project. Select from a variety of available maps.</p>
            
            <ul>
              <li>Topographic</li>
              <li>Dark Grey Canvas</li>
              <li>Imagery</li>
              <li>Oceans</li>
              <li>Street Map</li>
            </ul>
            </div>}
            {activeExtendedSidebar === 'charts' &&
            <div className="additional-sidebar-content">
            
            <p>To add charts, select a layer or table in your map and then click the Configure charts button on the Settings toolbar.</p>
            </div>}
            {activeExtendedSidebar === 'bookmark' && 
            <div className="additional-sidebar-content">
            <h3>Bookmark Options</h3>
            <p>Create bookmarks to save and revisit specific map views and locations.</p>
            <button className="dropdown-button">Add Bookmark</button>
           
            </div>}
            {activeExtendedSidebar === 'setting' && 
            <div className="additional-sidebar-content">
               <p>Adjust the map settings including background, timezone, and other properties.</p>
          
            <ul>
              <li>Background</li>
              <li>Timezone</li>
            </ul>
           
            </div>}
            {activeExtendedSidebar === 'share' && 
            <div className="additional-sidebar-content">
             
              <p>Share your map with others. Customize the sharing options to control access and visibility.</p>
              </div>}
            {activeExtendedSidebar === 'print' && 
             <div className="additional-sidebar-content">
              
              <p>Print your map with customized layouts and settings. Set the print area and orientation before printing.</p>
              </div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;


// import React, { useState } from 'react';
// import { FaLayerGroup, FaTable, FaMap, FaChartBar, FaBookmark, FaCog, FaShareAlt, FaPrint } from 'react-icons/fa';
// import '../../Styles/sidebar.css';

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeExtendedSidebar, setActiveExtendedSidebar] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleSidebarAction = (action) => {
//     setActiveExtendedSidebar(activeExtendedSidebar === action ? null : action);
//     setIsDropdownOpen(false);
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
//         <div className="sidebar-content">
//           <div className="sidebar-tools">
//             <div className="sidebar-item" onClick={() => handleSidebarAction('layer')}>
//               <FaLayerGroup />
//               {isExpanded && <span className="sidebar-title">Layer</span>}
//             </div>
//             <div className="sidebar-item" onClick={() => handleSidebarAction('table')}>
//               <FaTable />
//               {isExpanded && <span className="sidebar-title">Table</span>}
//             </div>
//             <div className="sidebar-item" onClick={() => handleSidebarAction('basemap')}>
//               <FaMap />
//               {isExpanded && <span className="sidebar-title">Basemap</span>}
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
//             <div className="sidebar-item" onClick={() => handleSidebarAction('print')}>
//               <FaPrint />
//               {isExpanded && <span className="sidebar-title">Print</span>}
//             </div>
//           </div>
//         </div>
//         <div className="sidebar-toggle" onClick={handleToggle}>
//           {isExpanded ? '<<' : '>>'}
//         </div>
//       </div>

//       {activeExtendedSidebar && (
//         <div className={`additional-sidebar ${activeExtendedSidebar ? 'open' : ''} ${isExpanded ? 'expanded' : ''}`}>
//           {activeExtendedSidebar === 'layer' && (
//             <div className="additional-sidebar-content">
//               <button className="dropdown-button" onClick={handleDropdownToggle}>
//                 Add Layer {isDropdownOpen ? '▲' : '▼'}
//               </button>
//               {isDropdownOpen && (
//                 <ul className="dropdown-content">
//                   <li>Browse Layers</li>
//                   <li>Add Sketch</li>
//                   <li>Add Media Layer</li>
//                 </ul>
//               )}
//             </div>
//           )}
//           {activeExtendedSidebar === 'table' && (
//             <div className="additional-sidebar-content">
//               <h3>Table Options</h3>
//               <button>Add Table</button>
//             </div>
//           )}
//           {activeExtendedSidebar === 'basemap' && (
//             <div className="additional-sidebar-content">
//               <h3>Basemap Options</h3>
//               <ul>
//                 <li>Topographic</li>
//                 <li>Dark Grey Canvas</li>
//                 <li>Imagery</li>
//                 <li>Oceans</li>
//                 <li>Street Map</li>
//               </ul>
//             </div>
//           )}
//           {activeExtendedSidebar === 'charts' && (
//             <div className="additional-sidebar-content">
//               <h3>Charts Options</h3>
//               <p>To add charts, select a layer or table in your map and then click the Configure charts button on the Settings toolbar.</p>
//             </div>
//           )}
//           {activeExtendedSidebar === 'bookmark' && (
//             <div className="additional-sidebar-content">
//               <h3>Bookmark Options</h3>
//               <button>Add Bookmark</button>
//             </div>
//           )}
//           {activeExtendedSidebar === 'setting' && (
//             <div className="additional-sidebar-content">
//               <h3>Settings</h3>
//               <ul>
//                 <li>Background</li>
//                 <li>Timezone</li>
//               </ul>
//             </div>
//           )}
//           {activeExtendedSidebar === 'shareMap' && (
//             <div className="additional-sidebar-content">
//               <h3>Share Map Options</h3>
//             </div>
//           )}
//           {activeExtendedSidebar === 'print' && (
//             <div className="additional-sidebar-content">
//               <h3>Print Options</h3>
//             </div>
//           )}
//           {/* Similar blocks for basemap, charts, bookmark, setting, share, and print */}
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
