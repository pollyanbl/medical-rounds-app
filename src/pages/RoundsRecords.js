import React from 'react';

const RoundsRecords = () => {
  const records = [
    { date: '2024-12-25', heartRate: 75, temperature: 36.5, bloodPressure: '120/80' },
    { date: '2024-12-26', heartRate: 80, temperature: 37.0, bloodPressure: '125/85' },
  ];

  return (
    <div>
      <h2>查看查房记录</h2>
      <ul>
        {records.map((r, index) => (
          <li key={index}>
            <strong>{r.date}</strong> - 心率: {r.heartRate}, 体温: {r.temperature}, 血压: {r.bloodPressure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoundsRecords;
