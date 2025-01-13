import React, { useState } from "react";  
import "./MedicalOrders.css";  

const NurseOrders = () => {  
  const [orders, setOrders] = useState([  
    {  
      id: 1,  
      description: "3f105房4床，测量体温，测量血压，注射青霉素0.5ML，服用阿莫西林胶囊一片，一日两次",  
      completed: false,  
    },  
    {  
      id: 2,  
      description: "3f107房2床，测量体温，测量血糖，检查伤口，注射胰岛素0.5ML，服用降压药一片，一日一次",  
      completed: false,  
    }, 
    {  
        id: 3,  
        description: "2f106房3床，测量体温，测量血糖，检查伤口，注射镇定剂素0.5ML，一日两次",  
        completed: false,  
      },   
  ]);  

  const handleComplete = (id) => {  
    setOrders(orders.map(order =>   
      order.id === id ? { ...order, completed: true } : order  
    ));  
  };  

  return (  
    <div className="nurse-orders">  
      <h2>执行医嘱</h2>  
      <div className="orders-list">  
        {orders.map((order) => (  
          <div key={order.id} className={`order-card ${order.completed ? 'completed' : ''}`}>  
            <div className="order-details">  
              <p><strong>医嘱 {order.id}：</strong>{order.description}</p>  
            </div>  
            {!order.completed && (  
              <button onClick={() => handleComplete(order.id)}>未完成</button>  
            )}  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default NurseOrders;