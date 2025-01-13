import React from "react";  
import "./DoctorPersonalInfo.css";  

const DoctorPersonalInfo = () => {  
  return (  
    <div className="doctor-personal-info">  
      <h2>医生个人信息</h2>  
      <form>  
        <label>出生日期:</label>  
        <input type="date" />  

        <div className="contact-info">  
          <div className="contact-field">  
            <label>联系电话:</label>  
            <input type="tel" />  
          </div>  
          <div className="contact-field">  
            <label>电子邮箱:</label>  
            <input type="email" />  
          </div>  
        </div>  

        <label>科室编号:</label>  
        <input type="text" />  

        <label>职称:</label>  
        <select>  
          <option value="">请选择职称</option>  
          <option value="正高级">正高级</option>  
          <option value="副高级">副高级</option>  
          <option value="中级">中级</option>  
          <option value="初级">初级</option>  
        </select>  

        <label>个人简介:</label>  
        <textarea rows="4" placeholder="请输入您的学历、论文、研究成果、事迹等..."></textarea>  

        <button type="submit">保存</button>  
      </form>  
    </div>  
  );  
};  

export default DoctorPersonalInfo;