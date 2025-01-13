import React from 'react';

const DoctorOrders = () => {
  const orders = [
    { date: '2024-12-27', order: '每日服药一次' },
    { date: '2024-12-28', order: '注意休息' },
  ];

  return (
    <div>
      <h2>查看医嘱</h2>
      <ul>
        {orders.map((o, index) => (
          <li key={index}>
            <strong>{o.date}</strong>: {o.order}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorOrders;