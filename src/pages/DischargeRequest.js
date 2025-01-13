import React from 'react';
import './DischargeRequest.css'
const DischargeRequest = () => {
  return (
    <div className="discharge-request">
      <h2>请求出院/转院</h2>
      <form>
        <label>类型:</label>
        <select>
          <option>出院</option>
          <option>转院</option>
        </select>
        <br />
        <label>日期:</label>
        <input type="date" />
        <br />
        <label>原因:</label>
        <textarea />
        <br />
        <button type="submit">提交审核</button>
      </form>
    </div>
  );
};

export default DischargeRequest;
