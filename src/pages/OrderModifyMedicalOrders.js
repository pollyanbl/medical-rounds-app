import React, { useState } from "react";  
import "./OrderModifyMedicalOrders.css";  

const DoctorOrder = () => {  
  const [selectedPatient, setSelectedPatient] = useState("");  
  const [medication, setMedication] = useState("");  
  const [injection, setInjection] = useState("");  
  const [precautions, setPrecautions] = useState("");  
  const [isEditing, setIsEditing] = useState(false); // 控制是否为修改状态  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (isEditing) {  
      // 处理修改逻辑  
      console.log("医嘱修改:", { selectedPatient, medication, injection, precautions });  
    } else {  
      // 处理下达逻辑  
      console.log("医嘱下达:", { selectedPatient, medication, injection, precautions });  
    }  
  };  

  return (  
    <div className="doctor-order">  
      <h2>{isEditing ? "修改医嘱" : "下达医嘱"}</h2>  
      <form onSubmit={handleSubmit}>  
        <label>选择病人:</label>  
        <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>  
          <option value="">请选择病人</option>  
          <option value="病人1">王晓燕</option>  
          <option value="病人2">张黎明</option>  
          <option value="病人3">何芳</option>  
        </select>  

        <label>药物服用:</label>  
        <input type="text" value={medication} onChange={(e) => setMedication(e.target.value)} />  

        <label>药剂注射:</label>  
        <input type="text" value={injection} onChange={(e) => setInjection(e.target.value)} />  

        <label>注意事项:</label>  
        <textarea rows="4" value={precautions} onChange={(e) => setPrecautions(e.target.value)} placeholder="请输入注意事项..."></textarea>  

        <button type="submit">{isEditing ? "确认修改" : "确认下达"}</button>  
      </form>  
    </div>  
  );  
};  

export default DoctorOrder;