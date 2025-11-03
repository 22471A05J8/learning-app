import React from "react";
import "./Start.css";
import logo from '../components/images/logo.jpg';
import learning from '../components/images/learning.webp'
import Cards from './Cards';

export default function SmartHomeLogin() {
  return (
    <div className="jk">
    <div className="shl-wrapper">
        
      {/* Navbar */}
      <nav className="shl-navbar">
        <div className="side">
       <img src={logo} alt="Logo" className="logo" />
       <h2>Welcome to Ignitia</h2></div>
        <ul className="shl-nav-linkss">
           
          <li className="iitem "><a href="/">Home</a></li>
          <li className="iitem"><a href="/Register">Register</a></li>
          <li className="iitem"><a href="/Login">Login</a></li>
          <li className="iitem"><a href="/About">About</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="shl-container">
        {/* Left Section */}
        <div className="shl-left-section">
          <h1>
            <span className="shl-title-white">Ignitia</span> </h1>
<p>Symbolically, it represents igniting a passion for learning and sparking intellectual and spiritual growth.</p>            <b>Features</b>
         
          <pre>Interactive multimedia lessons</pre>
          <pre>Automated grading and assessments</pre>
          <pre>Teacher tools and dashboards</pre>
          <pre>Personalized learning paths</pre>
          <pre>Accessibility from anywhere (fully online)</pre>
        </div>
         <div className="shl-right-image">
    <img src={learning} alt="Learning" />
  </div>

       <div>
</div>
      </div>
     <Cards/>
    
    </div></div>
  );
}
