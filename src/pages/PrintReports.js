import React, { useState } from 'react';  
import './PrintReports.css';  
  

const NurseReport = () => {  
  const [patientName, setPatientName] = useState('');  
  const [reportType, setReportType] = useState('');  
  const [reportContent, setReportContent] = useState('');  

  const handleSearchChange = (e) => {  
    setPatientName(e.target.value);  
  };  

  const handleTypeChange = (e) => {  
    setReportType(e.target.value);  
    // 根据选择的报告类型设置内容，这里只是示例  
    setReportContent(`内容为：${e.target.value} 的报告`);  
  };  

  const handlePrint = () => {  
    const printContent = `  
      <h1>${reportType} - ${patientName}</h1>  
      <p>${reportContent}</p>  
    `;  
    const printWindow = window.open('', '_blank');  
    printWindow.document.write('<html><head><title>打印报告</title></head><body>');  
    printWindow.document.write(printContent);  
    printWindow.document.write('</body></html>');  
    printWindow.document.close();  
    printWindow.print();  
  };  

  return (  
    <div className="report-container">  
      <h2>打印报告</h2>  
      <div className="form-group">  
        <label htmlFor="patientName">病人姓名：</label>  
        <input  
          type="text"  
          id="patientName"  
          value={patientName}  
          onChange={handleSearchChange}  
          required  
        />  
      </div>  
      <div className="form-group">  
        <label htmlFor="reportType">报告类型：</label>  
        <select id="reportType" value={reportType} onChange={handleTypeChange} required>  
          <option value="">选择报告类型</option>  
          <option value="查房报告">查房报告</option>  
          <option value="病历">病历</option>  
          <option value="X光片">X光片</option>  
        </select>  
      </div>  
      <button className="print-button" onClick={handlePrint} disabled={!patientName || !reportType}>  
        打印报告  
      </button>  
    </div>  
  );  
};  

export default NurseReport;