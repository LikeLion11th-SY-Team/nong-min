import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../API/KaKaoApi";
import { BaseUrl } from "../API/Api";
import axios from "axios";
import { setCookie } from "../API/Cookie";

import { styled } from "styled-components";

function Login() {
  const [loginData, setLoginData] = useState({
    id: "",
    pw: ""
  })
  const onChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }
  const { id, pw } = loginData;

  const navigation = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!id || !pw) {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
    try {
      // 로그인 시 쿠키에 토큰 저장
      const res = await axios.post(`${BaseUrl}/auth/login/`, { id, pw });
      const accessToken = res.data.access;
      const refreshToken = res.data.refresh;

      // 모든 경로에서 토큰 접근 가능
      setCookie("accessToken", accessToken, { path: "/" });
      setCookie("refreshToken", refreshToken, { path: "/" });
      navigation("/home");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("아이디와 비밀번호가 일치하지 않습니다.");
      } else {
        alert("로그인에 실패하였습니다. 다시 시도해주세요.");
      }
    }
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={onSubmit}>
        <input
          name="id"
          value={id}
          onChange={onChange}
          placeholder="아이디"
        />
        <input
          name="pw"
          value={pw}
          onChange={onChange}
          type="password"
          placeholder="비밀번호"
        />
        <label>
          <input
            type="checkbox"
          />
        </label>
        <button type="submit">로그인</button>
      </LoginForm>

      <div>
        <Link to={'/signup'}>회원가입</Link>
        <Link to={'/find'}>아이디/비밀번호 찾기</Link>
      </div>

      <a href={KAKAO_AUTH_URL}>
        <img src="/images/kakao_login_medium_narrow.png" alt="카카오 로그인 이미지" />
      </a>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const SignHandler = styled.div``
const Switch2Login = styled.div``
const Switch2SignUp = styled.div``
const LoginForm = styled.form``