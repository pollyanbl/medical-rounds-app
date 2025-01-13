import React, { useState } from "react";  
import "./NursePersonalInfo.css";  

const NurseProfile = () => {  
  const [nurseId, setNurseId] = useState("");  
  const [birthDate, setBirthDate] = useState("");  
  const [phone, setPhone] = useState("");  
  const [email, setEmail] = useState("");  
  const [title, setTitle] = useState("");  
  const [position, setPosition] = useState("");  
  const [department, setDepartment] = useState("");  

  const handleSave = () => {  
    // 这里可以添加保存逻辑  
    alert("信息已保存！");  
  };  

  return (  
    <div className="nurse-profile">  
      <h2>护士个人信息</h2>  
      <div className="form-row">  
        <input  
          type="text"  
          placeholder="护士编号"  
          value={nurseId}  
          onChange={(e) => setNurseId(e.target.value)}  
        />  
        <input  
          type="date"  
          placeholder="出生日期"  
          value={birthDate}  
          onChange={(e) => setBirthDate(e.target.value)}  
        />  
      </div>  
      <div className="form-row">  
        <input  
          type="text"  
          placeholder="联系电话"  
          value={phone}  
          onChange={(e) => setPhone(e.target.value)}  
        />  
        <input  
          type="email"  
          placeholder="电子邮箱"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
        />  
      </div>  
      <div className="form-row">  
        <select value={title} onChange={(e) => setTitle(e.target.value)}>  
          <option value="">职称</option>  
          <option value="护士">护士</option>  
          <option value="初级护师">初级护师</option>  
          <option value="主管护师">主管护师</option>  
          <option value="副主任护师">副主任护师</option>  
          <option value="主任护师">主任护师</option>  
        </select>  
        <select value={position} onChange={(e) => setPosition(e.target.value)}>  
          <option value="">职位</option>  
          <option value="护士">护士</option>  
          <option value="病区护士长">病区护士长</option>  
          <option value="科护士长">科护士长</option>  
          <option value="护理部主任">护理部主任</option>  
        </select>  
      </div>  
      <textarea  
        placeholder="科室"  
        value={department}  
        onChange={(e) => setDepartment(e.target.value)}  
      />  
      <button className="save-btn" onClick={handleSave}>保存</button>  
    </div>  
  );  
};  

export default NurseProfile;