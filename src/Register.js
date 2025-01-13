import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    phone: "",
    idNumber: "",
    password: "",
    verificationCode: "",
    name: "",
    gender: "",
    department: "",
    identity: "",
  });
  const [generatedCode, setGeneratedCode] = useState(""); // 保存生成的验证码
  const navigate = useNavigate(); // 用于页面跳转

  // 输入框变更处理
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 生成验证码
  const generateVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
  };

  // 提交注册
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.verificationCode !== generatedCode) {
      alert("验证码错误，请重新输入！");
      return;
    }
    console.log("注册信息:", formData);
    alert("注册成功！");
    if (formData.identity === "patient") {
      navigate("/patient-dashboard");
    } else if (formData.identity === "doctor") {
      navigate("/doctor-dashboard");
    } else if (formData.identity === "nurse") {
      navigate("/nurse-dashboard");
    }
  };

  // 提交登录
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("登录信息:", formData);
    alert("登录成功！");
    if (formData.identity === "patient") {
      navigate("/patient-dashboard");
    } else if (formData.identity === "doctor") {
      navigate("/doctor-dashboard");
    } else if (formData.identity === "nurse") {
      navigate("/nurse-dashboard");
    }
  };

  return (
    <div className="register-container">
      <div className="toggle-buttons">
        <button
          className={isRegistering ? "active" : ""}
          onClick={() => setIsRegistering(true)}
        >
          注册
        </button>
        <button
          className={!isRegistering ? "active" : ""}
          onClick={() => setIsRegistering(false)}
        >
          登录
        </button>
      </div>

      {isRegistering ? (
        <>
          <h1>注册</h1>
          <label>请选择您的身份：</label>
          <select
            value={formData.identity}
            onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
          >
            <option value="">--请选择--</option>
            <option value="patient">病人</option>
            <option value="doctor">医生</option>
            <option value="nurse">护士</option>
          </select>

          {formData.identity && (
            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                name="idNumber"
                placeholder="身份证号"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="手机号"
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="密码"
                onChange={handleInputChange}
                required
              />
              <div className="verification-container">
                <input
                  type="text"
                  name="verificationCode"
                  placeholder="请输入验证码"
                  onChange={handleInputChange}
                  required
                />
                <button type="button" onClick={generateVerificationCode}>
                  获取验证码
                </button>
                {generatedCode && <span className="verification-code">{generatedCode}</span>}
              </div>

              {formData.identity === "doctor" && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="姓名"
                    onChange={handleInputChange}
                    required
                  />
                  <select name="gender" onChange={handleInputChange} required>
                    <option value="">--性别--</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                  </select>
                  <input
                    type="text"
                    name="department"
                    placeholder="科室"
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}

              {formData.identity === "nurse" && (
                <select name="gender" onChange={handleInputChange} required>
                  <option value="">--性别--</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
              )}

              <button type="submit">注册</button>
            </form>
          )}
        </>
      ) : (
        <>
          <h1>登录</h1>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="phone"
              placeholder="手机号/用户ID/身份证号"
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="密码"
              onChange={handleInputChange}
              required
            />
            <button type="submit">登录</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Register;
