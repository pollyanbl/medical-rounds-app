import React, { useState } from "react";  
import "./DiseaseAnalysis.css";  

const ConditionAnalysis = () => {  
  const [patientName, setPatientName] = useState("");  
  const [analysisResults, setAnalysisResults] = useState([]);  

  const handleAnalyze = () => {  
    // 模拟病情分析结果  
    const results = [  
      { symptom: "咳嗽", severity: "中", recommendation: "建议做胸部X光检查" },  
      { symptom: "发热", severity: "高", recommendation: "建议进行血液测试" },  
      { symptom: "胸痛", severity: "高", recommendation: "建议进行心电图检查" },  
    ];  
    setAnalysisResults(results);  
  };  

  return (  
    <div className="condition-analysis">  
      <h2>病情分析</h2>  
      <input  
        type="text"  
        placeholder="输入病人姓名"  
        value={patientName}  
        onChange={(e) => setPatientName(e.target.value)}  
      />  
      <button onClick={handleAnalyze}>分析</button>  

      <h4 className="analysis-title">分析结果</h4>  
      <div className="analysis-results">  
        {analysisResults.map((result, index) => (  
          <div key={index} className="result-card">  
            <div><strong>症状:</strong> {result.symptom}</div>  
            <div><strong>严重程度:</strong> {result.severity}</div>  
            <div><strong>建议:</strong> {result.recommendation}</div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default ConditionAnalysis;