import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { render } from "@testing-library/react";

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isValid, setIsValid] = useState(false); // 초기값이 유효하지 않으니 false로 설정

  const handleIdInput = (e) => {
    //event 인자 받아서 status에 저장
    const idValue = e.target.value; // event가 일어난 value 여기선 문자
    setId(idValue);
    idValue.includes("@") && pw.length >= 5 //id 입력할때 pw는 고정이니까
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePwInput = (e) => {
    const pwValue = e.target.value;
    setPw(pwValue);
    id.includes("@") && pwValue.length >= 5 // pw입력할때는 id 고정이니까
      ? setIsValid(true)
      : setIsValid(false);
  };

  return (
    <div className="flex-center container">
      <div className="background-img">
        <div className="title flex-center">
          <h1 className="logo-text">Justgram</h1>
        </div>
        <div className="form-wrapper">
          <form> </form>
          <div className="login-wrapper flex-center">
            <input
              className="login-input"
              id="name"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            ></input>
          </div>
          <div className="login-wrapper flex-center">
            <input
              className="login-input"
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            ></input>
          </div>
          <div className="flex-center button-wrapper">
            <button
              style={{ backgroundColor: isValid ? "#4ec5f4" : "#cde9f4" }}
              className="login-button"
              onClick={goToMain}
              type="button"
              id="button"
            >
              로그인
            </button>
          </div>
        </div>
        <div className="flex-center extra-wrapper">
          <a className="forget">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
