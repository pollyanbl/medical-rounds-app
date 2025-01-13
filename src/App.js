import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Register from './Register';
import PatientDashboard from './pages/PatientDashboard';
import PersonalInfo from './pages/PersonalInfo';
import DischargeRequest from './pages/DischargeRequest';
import DoctorOrders from './pages/DoctorOrders';
import Feedback from './pages/Feedback';
import RoundsRecords from './pages/RoundsRecords';

import DoctorDashboard from './pages/DoctorDashboard';
import DoctorPersonalInfo from './pages/DoctorPersonalInfo';
import OrderModifyMedicalOrders from './pages/OrderModifyMedicalOrders';
import TodayWardRoundPlan from './pages/TodayWardRoundPlan';
import InquirePatientInformation from './pages/InquirePatientInformation';
import DiseaseAnalysis from './pages/DiseaseAnalysis';

import NurseDashboard from './pages/NurseDashboard';
import NursePersonalInfo from './pages/NursePersonalInfo';
import MedicalOrders from './pages/MedicalOrders';
import RecordPatientInformation from './pages/RecordPatientInformation';
import PrintReports from './pages/PrintReports';
import ShiftChangeRequest from './pages/ShiftChangeRequest';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} >
            <Route path="patient-PersonalInfo" element={<PersonalInfo />} />
            <Route path="patient-DischargeRequest" element={<DischargeRequest />} />
            <Route path="patient-DoctorOrders" element={<DoctorOrders />} />
            <Route path="patient-Feedback" element={<Feedback />} />
            <Route path="patient-RoundsRecords" element={<RoundsRecords />} />
          </Route>
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} >
            <Route path="doctor-PersonalInfo" element={<DoctorPersonalInfo />} />
            <Route path="doctor-OrderModifyMedicalOrders" element={<OrderModifyMedicalOrders />} />
            <Route path="doctor-TodayWardRoundPlan" element={<TodayWardRoundPlan />} />
            <Route path="doctor-InquirePatientInformation" element={<InquirePatientInformation />} />
            <Route path="doctor-DiseaseAnalysis" element={<DiseaseAnalysis />} />
          </Route>
          <Route path="/nurse-dashboard" element={<NurseDashboard />} >
            <Route path="nurse-PersonalInfo" element={<NursePersonalInfo />} />
            <Route path="nurse-MedicalOrders" element={<MedicalOrders />} />
            <Route path="nurse-TodayWardRoundPlan" element={<TodayWardRoundPlan />} />
            <Route path="nurse-RecordPatientInformation" element={<RecordPatientInformation />} />
            <Route path="nurse-PrintReports" element={<PrintReports />} />
            <Route path="nurse-ShiftChangeRequest" element={<ShiftChangeRequest />} />
          </Route>     
      </Routes>
    </Router>
  );
};

export default App;
