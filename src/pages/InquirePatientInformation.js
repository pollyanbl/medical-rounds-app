import React, { useState } from "react";  
import "./InquirePatientInformation.css";  

const PatientSearch = () => {  
  const [searchTerm, setSearchTerm] = useState("");  
  const [patients] = useState([  
    { name: "张晓燕", age: 39, gender: "女", condition: "乳腺癌" },  
    { name: "李四", age: 45, gender: "男", condition: "高血压" },  
    
  ]);  

  const filteredPatients = patients.filter(patient =>  
    patient.name.includes(searchTerm)  
  );  

  return (  
    <div className="patient-search">  
      <h2>查询病人信息</h2>  
      <input  
        type="text"  
        placeholder="输入病人姓名或身份证号"  
        value={searchTerm}  
        onChange={(e) => setSearchTerm(e.target.value)}  
      />  
      <button>查询</button>  
      <h4 className="search-history-title">查询历史</h4>  
      <div className="patient-results">  
        {filteredPatients.map((patient, index) => (  
          <div key={index} className="patient-card">  
            <div><strong>病人:</strong> {patient.name}</div>  
            <div><strong>年龄:</strong> {patient.age}岁</div>  
            <div><strong>性别:</strong> {patient.gender}</div>  
            <div><strong>所患疾病:</strong> {patient.condition}</div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default PatientSearch;