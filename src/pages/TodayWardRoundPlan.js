import React, { useState } from "react";  
import "./TodayWardRoundPlan.css";  

const DoctorWardRound = () => {  
  const [tasks, setTasks] = useState([  
    {  
      id: 1,  
      patientName: "王晓燕",  
      time: "上午 8:00 - 9:00",  
      roomNumber: "3F108",  
      bedNumber: "1号",  
      nurse: "周媛",  
      completed: false,  
    },  
    {  
      id: 2,  
      patientName: "张黎明",  
      time: "上午 9:30 - 10:30",  
      roomNumber: "3F110",  
      bedNumber: "3号",  
      nurse: "李华",  
      completed: false,  
    },  
    {  
      id: 3,  
      patientName: "何芳",  
      time: "下午 2:30 - 3:30",  
      roomNumber: "4F101",  
      bedNumber: "2号",  
      nurse: "王静",  
      completed: false,  
    },  
    {  
      id: 4,  
      patientName: "刘伟",  
      time: "上午 10:30 - 11:30",  
      roomNumber: "3F112",  
      bedNumber: "4号",  
      nurse: "张梅",  
      completed: false,  
    },  
    {  
      id: 5,  
      patientName: "陈晨",  
      time: "上午 11:30 - 12:30",  
      roomNumber: "3F114",  
      bedNumber: "5号",  
      nurse: "赵丽",  
      completed: false,  
    },  
    {  
      id: 6,  
      patientName: "周强",  
      time: "下午 3:30 - 4:30",  
      roomNumber: "4F102",  
      bedNumber: "6号",  
      nurse: "孙伟",  
      completed: false,  
    },  
  ]);  

  const handleComplete = (id) => {  
    setTasks(tasks.map(task =>   
      task.id === id ? { ...task, completed: !task.completed } : task  
    ));  
  };  

  return (  
    <div className="doctor-ward-round">  
      <h2>今日查房计划</h2>  
      <div className="task-container">  
        {tasks.map((task) => (  
          <div key={task.id} className={`task ${task.completed ? "completed" : ""}`}>  
            <div>  
              <strong>病人:</strong> {task.patientName}  
            </div>  
            <div>  
              <strong>查房时间:</strong> {task.time}  
            </div>  
            <div>  
              <strong>病房号:</strong> {task.roomNumber}  
            </div>  
            <div>  
              <strong>病床号:</strong> {task.bedNumber}  
            </div>  
            <div>  
              <strong>值班护士:</strong> {task.nurse}  
            </div>  
            <button onClick={() => handleComplete(task.id)}>  
              {task.completed ? "已完成" : "未完成"}  
            </button>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default DoctorWardRound;