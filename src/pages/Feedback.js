import React from 'react';
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2>个人评价</h2>
      <form>
        <label>主治医生评价:</label>
        <textarea />
        <br />
        <label>查房护士评价:</label>
        <textarea />
        <br />
        <label>医院评价:</label>
        <textarea />
        <br />
        <label>系统评价:</label>
        <textarea />
        <br />
        <button type="submit">提交评价</button>
      </form>
    </div>
  );
};

export default Feedback;
