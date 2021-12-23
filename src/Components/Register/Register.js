import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const handleClick = () => {
    fetch(
      `http://127.0.0.1:1880/User/Login?email=abc@gmail.com&password=123456`,
      {
        method: "POST",
      }
    ).then((data) => {
      setData(data);
      console.log(data);
    });
  };

  return (
    <div>
      <label htmlFor="">Email</label>
      <input
        type="email"
        className=""
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>

      <label htmlFor="">Mật khẩu</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button onClick={handleClick}>Đăng nhập</button>
    </div>
  );
}

export default Register;
