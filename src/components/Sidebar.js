import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // 新增一个 CSS 文件专门管理侧边栏样式

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="patient-PersonalInfo" activeClassName="active">
      🧑 个人信息
      </NavLink>
      <NavLink to="patient-DoctorOrders" activeClassName="active">
        📋 查看医嘱
      </NavLink>
      <NavLink to="patient-DischargeRequest" activeClassName="active">
        🏥 请求出院/转院
      </NavLink>
      <NavLink to="patient-RoundsRecords" activeClassName="active">
        📜 查看查房记录
      </NavLink>
      <NavLink to="patient-Feedback" activeClassName="active">
        ⭐ 个人评价
      </NavLink>
    </div>
  );
};

export default Sidebar;
