import React, { useState, useEffect } from 'react';
// Removed static profile import
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Dashboard.css';
import {
  FaHome, FaUserCircle, FaCogs, FaPalette, FaSignOutAlt,
  FaGraduationCap, FaBookOpen, FaFilePdf, FaVideo, FaCode,
  FaClipboardList, FaThLarge, FaQuestionCircle
} from 'react-icons/fa';

const DEFAULT_PROFILE_PIC = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(DEFAULT_PROFILE_PIC);

  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const handleMenuClick = () => setSidebarOpen(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // Update profile image from localStorage
  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  // Optional: update image when navigating to different routes (e.g. return from Profile page)
  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, [location]);

  const routesWithoutWallpaper = ['/interview', '/courses', '/pdf', '/videos'];
  const showWallpaper = !routesWithoutWallpaper.includes(location.pathname.toLowerCase());

  return (
    <div className="disk">
      <div className="dashboard-container">
        {/* Top Navigation */}
        <div className="top-nav">
          <div className="nav-left">
            <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
            <h3 className="nav-title"><FaGraduationCap />Ignitia</h3>
          </div>
          <div className="pro" style={{ position: 'relative' }}>
            <img
              src={profileImage}
              alt="Profile"
              className="prof"
              onClick={toggleDropdown}
              style={{ cursor: 'pointer' }}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <img src={profileImage} alt="Profile" className="haa" />
                  <div className="dropdown-links">
                    <Link to="/Profile">Profile</Link>
                  </div>
                </div>
                <div className="dropdown-links">
                  <Link to="/settings">Settings</Link>
                  <Link to="/signout">Sign Out</Link>
                  <Link to="/About">About Us</Link>
                  <Link to="/Contact">Contact Us</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/Page" onClick={handleMenuClick}><FaHome /> Home</Link></li>
            <li><Link to="/SidebarDashboard" onClick={handleMenuClick}><FaThLarge /> Dashboard</Link></li>
            <li><Link to="/course" onClick={handleMenuClick}><FaBookOpen /> Courses</Link></li>
            <li><Link to="/Pdf" onClick={handleMenuClick}><FaFilePdf /> PDFs</Link></li>
            <li><Link to="/Videos" onClick={handleMenuClick}><FaVideo /> Videos</Link></li>
            <li><Link to="/interview" onClick={handleMenuClick}><FaClipboardList /> Interview Questions</Link></li>
            <li><Link to="/CodeEditor" onClick={handleMenuClick}><FaCode /> Editor</Link></li>
            <li><Link to="/Quiz" onClick={handleMenuClick}><FaQuestionCircle /> Quiz</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className={`main-content ${isSidebarOpen ? 'shift' : ''} ${showWallpaper ? 'wallpaper' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
