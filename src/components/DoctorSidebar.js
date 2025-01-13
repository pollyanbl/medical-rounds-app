import React from "react";
import { NavLink } from "react-router-dom";
import "./DoctorSidebar.css"; // 新增一个 CSS 文件专门管理侧边栏样式

const DoctorSidebar = () => {
  return (
    <div className="doctor-sidebar">
      <NavLink to="doctor-PersonalInfo" activeClassName="active">
        🧑‍⚕️ 个人信息
      </NavLink>
      <NavLink to="doctor-OrderModifyMedicalOrders" activeClassName="active">
        📋 下达医嘱
      </NavLink>
      <NavLink to="doctor-TodayWardRoundPlan" activeClassName="active">
        🏥 今日查房计划
      </NavLink>
      <NavLink to="doctor-InquirePatientInformation" activeClassName="active">
        📜 查询病人信息
      </NavLink>
      <NavLink to="doctor-DiseaseAnalysis" activeClassName="active">
        ⭐ 病情分析
      </NavLink>
    </div>
  );
};

export default DoctorSidebar;