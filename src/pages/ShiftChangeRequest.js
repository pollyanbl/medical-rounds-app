import React, { useState } from 'react';  
import './ShiftChangeRequest.css';  

const NurseShiftChange = () => {  
  const [shiftChange, setShiftChange] = useState({  
    reason: '',  
    time: '',  
    successor: '',  
  });  

  const handleInputChange = (e) => {  
    const { name, value } = e.target;  
    setShiftChange({ ...shiftChange, [name]: value });  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // 提交申请的逻辑  
    console.log('申请提交:', shiftChange);  
    // 清空表单  
    setShiftChange({ reason: '', time: '', successor: '' });  
    alert('申请已提交！');  
  };  

  return (  
    <div className="shift-change-form">  
      <h2>换班申请</h2>  
      <form onSubmit={handleSubmit}>  
        <div className="form-group">  
          <label htmlFor="reason">换班原因：</label>  
          <input  
            type="text"  
            id="reason"  
            name="reason"  
            value={shiftChange.reason}  
            onChange={handleInputChange}  
            required  
          />  
        </div>  
        <div className="form-group">  
          <label htmlFor="time">换班时间：</label>  
          <input  
            type="datetime-local"  
            id="time"  
            name="time"  
            value={shiftChange.time}  
            onChange={handleInputChange}  
            required  
          />  
        </div>  
        <div className="form-group">  
          <label htmlFor="successor">接班人员：</label>  
          <input  
            type="text"  
            id="successor"  
            name="successor"  
            value={shiftChange.successor}  
            onChange={handleInputChange}  
            required  
          />  
        </div>  
        <button type="submit" className="submit-button">提交申请</button>  
      </form>  
    </div>  
  );  
};  

export default NurseShiftChange;