import React, { useState } from 'react'; 
import "./RecordPatientInformation.css";   

const NurseRounds = () => {  
  const [records, setRecords] = useState([  
    {  
      id: 1,  
      patientName: "张三",  
      roundTime: "2025-01-02 09:00",  
      temperature: "36.5°C",  
      bloodPressure: "120/80 mmHg",  
      bloodSugar: "5.5 mmol/L",  
      injectionDrug: "青霉素",  
      injectionDose: "0.5 ML",  
      medication: "阿莫西林",  
      frequency: "一日两次",  
      patientCondition: "状态良好",  
    },  
    {  
      id: 2,  
      patientName: "李四",  
      roundTime: "2025-01-02 09:30",  
      temperature: "37.0°C",  
      bloodPressure: "130/85 mmHg",  
      bloodSugar: "6.0 mmol/L",  
      injectionDrug: "胰岛素",  
      injectionDose: "0.5 ML",  
      medication: "降压药",  
      frequency: "一日一次",  
      patientCondition: "稍感不适",  
    },  
  ]);  

  const [isFormVisible, setIsFormVisible] = useState(false);  
  const [newRecord, setNewRecord] = useState({  
    patientName: "",  
    roundTime: "",  
    temperature: "",  
    bloodPressure: "",  
    bloodSugar: "",  
    injectionDrug: "",  
    injectionDose: "",  
    medication: "",  
    frequency: "",  
    patientCondition: "",  
  });  

  const handleInputChange = (e) => {  
    const { name, value } = e.target;  
    setNewRecord({ ...newRecord, [name]: value });  
  };  

  const handleSubmit = () => {  
    setRecords([...records, { id: records.length + 1, ...newRecord }]);  
    setNewRecord({  
      patientName: "",  
      roundTime: "",  
      temperature: "",  
      bloodPressure: "",  
      bloodSugar: "",  
      injectionDrug: "",  
      injectionDose: "",  
      medication: "",  
      frequency: "",  
      patientCondition: "",  
    });  
    setIsFormVisible(false);  
  };  

  return (  
    <div className="nurse-rounds">  
      <h2>护士查房记录</h2>  
      <div className="records-list">  
        {records.map((record) => (  
          <div key={record.id} className="record-card">  
            <p><strong>患者姓名：</strong>{record.patientName}</p>  
            <p><strong>查房时间：</strong>{record.roundTime}</p>  
            <p><strong>体温：</strong>{record.temperature}</p>  
            <p><strong>血压：</strong>{record.bloodPressure}</p>  
            <p><strong>血糖：</strong>{record.bloodSugar}</p>  
            <p><strong>注射药剂：</strong>{record.injectionDrug}</p>  
            <p><strong>注射剂量：</strong>{record.injectionDose}</p>  
            <p><strong>服用药物：</strong>{record.medication}</p>  
            <p><strong>服用频率：</strong>{record.frequency}</p>  
            <p><strong>患者表现：</strong>{record.patientCondition}</p>  
          </div>  
        ))}  
      </div>  
      <button className="new-record-button" onClick={() => setIsFormVisible(true)}>  
        新建记录  
      </button>  
      {isFormVisible && (  
        <div className="record-form">  
          <h3>新建查房记录</h3>  
          <input type="text" name="patientName" placeholder="患者姓名" value={newRecord.patientName} onChange={handleInputChange} />  
          <input type="datetime-local" name="roundTime" value={newRecord.roundTime} onChange={handleInputChange} />  
          <input type="text" name="temperature" placeholder="体温" value={newRecord.temperature} onChange={handleInputChange} />  
          <input type="text" name="bloodPressure" placeholder="血压" value={newRecord.bloodPressure} onChange={handleInputChange} />  
          <input type="text" name="bloodSugar" placeholder="血糖" value={newRecord.bloodSugar} onChange={handleInputChange} />  
          <input type="text" name="injectionDrug" placeholder="注射药剂" value={newRecord.injectionDrug} onChange={handleInputChange} />  
          <input type="text" name="injectionDose" placeholder="注射剂量" value={newRecord.injectionDose} onChange={handleInputChange} />  
          <input type="text" name="medication" placeholder="服用药物" value={newRecord.medication} onChange={handleInputChange} />  
          <input type="text" name="frequency" placeholder="服用频率" value={newRecord.frequency} onChange={handleInputChange} />  
          <input type="text" name="patientCondition" placeholder="患者表现" value={newRecord.patientCondition} onChange={handleInputChange} />  
          <button onClick={handleSubmit}>完成</button>  
          <button onClick={() => setIsFormVisible(false)}>取消</button>  
        </div>  
      )}  
    </div>  
  );  
};  

export default NurseRounds;