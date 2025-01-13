import React from 'react';
import Sidebar from '../components/Sidebar';
import './PatientDashboard.css';
import { Outlet } from 'react-router-dom';

function PatientDashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
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

export default PatientDashboard;
