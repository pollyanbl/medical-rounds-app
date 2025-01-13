import React from "react";
import { NavLink } from "react-router-dom";
import "./NurseSidebar.css"; // 新增一个 CSS 文件专门管理侧边栏样式

const NurseSidebar = () => {  
    return (  
      <div className="nurse-sidebar">  
        <NavLink to="nurse-PersonalInfo" activeClassName="active">  
          👩‍⚕️ 个人信息    
        </NavLink>  
        <NavLink to="nurse-MedicalOrders" activeClassName="active">  
          📝 查询/执行医嘱  
        </NavLink>  
        <NavLink to="nurse-TodayWardRoundPlan" activeClassName="active">  
          🏥 今日查房计划  
        </NavLink>  
        <NavLink to="nurse-RecordPatientInformation" activeClassName="active">  
          📋 查房记录  
        </NavLink>  
        <NavLink to="nurse-ShiftChangeRequest" activeClassName="active">  
          🔄 请求换班  
        </NavLink>  
        <NavLink to="nurse-PrintReports" activeClassName="active">  
          🖨️ 打印报告  
        </NavLink>  
      </div>  
  );
};

export default NurseSidebar;