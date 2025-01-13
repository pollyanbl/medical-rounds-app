import React from 'react';
import DoctorSidebar from '../components/DoctorSidebar';
import './DoctorDashboard.css';
import { Outlet } from 'react-router-dom';

function DoctorDashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <DoctorSidebar />
      </div>
      <div className="main">
        <div className="header">移动查房系统</div>
        <div className="content">
          <Outlet />         
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
