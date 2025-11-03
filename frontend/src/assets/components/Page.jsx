import React from 'react';
import './page.css';// Save your image as elearning_kid.png in assets
import DashboardLayout from './Dashboard';
import ee from '../components/images/ee.avif';
const page= () => {
  return (<>
  <DashboardLayout/><div className="pag">
  <div className="text-block">
    <h1 className="heading-main">Welcome to Ignitia</h1>
    <h2 className="heading-sub">Build your Skills</h2>
    <h3 className="heading-tagline">Anytime, Anywhere</h3>
  </div>
  <img src={ee} alt="image" className="ppa" />
</div>

   </>
  );
};

export default page;
