import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h2>个人信息</h2>
      <form>
        <label>出生日期:</label>
        <input type="date" />
        <label>家庭地址:</label>
        <input type="text" />
        <label>入院时间:</label>
        <input type="date" />
        <label>病房号:</label>
        <input type="text" />
        <label>病床号:</label>
        <input type="text" />
        <button type="submit">保存</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
