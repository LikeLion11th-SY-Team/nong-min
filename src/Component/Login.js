import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../API/KaKaoApi";
import { BaseUrl } from "../API/Api";
import axios from "axios";
import { setCookie } from "../API/Cookie";

import { styled } from "styled-components";

function Login() {
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { id, pw } = loginData;

  const navigation = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!id || !pw) {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
    try {
      // 로그인 시 쿠키에 토큰 저장
      const res = await axios.post(`${process.env.REACT_APP_BaseUrl}/auth/login/`, { id, pw });
      const accessToken = res.data.token.access;
      const refreshToken = res.data.token.refresh;

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
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={onSubmit}>
        <Input name="id" value={id} onChange={onChange} placeholder="아이디" />
        <Input
          name="pw"
          value={pw}
          onChange={onChange}
          type="password"
          placeholder="비밀번호"
        />
        {/*
        <label>
          <input
            type="checkbox"
          />
        </label>
        */}
        <LoginBtn type="submit">로그인</LoginBtn>
      </LoginForm>

      <SignContainer>
        <SignLink to={"/signup"}>
          <P>회원가입</P>
        </SignLink>
        <SignLink to={"/find"}>
          <P>아이디/비밀번호 찾기</P>
        </SignLink>
      </SignContainer>

      <TextContainer>
        <Hr />
        <Text>
          <P>또는</P>
        </Text>
        <Hr />
      </TextContainer>

      <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=code`; `}>
        <KakaoImg
          src="/images/kakao_login_large_wide 1.png"
          alt="카카오 로그인 이미지"
        />
      </a>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  position: absolute;
  top: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 24.0625rem;
`;
const Input = styled.input`
  height: 3.8125rem;
  border-radius: 0.75rem;
  border: 0.7px solid #828282;
  background: #fff;
  color: #152536;
  margin: 1rem 0;
  padding-left: 1rem;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00938rem;
`;
const LoginBtn = styled.button`
  height: 3.8125rem;
  border-radius: 0.75rem;
  background: #002d61;
  color: #fff;
  font-size: 2.0625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.01238rem;
`;
const SignContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SignLink = styled(Link)`
  margin: 0 2rem;
  text-decoration: none;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24.0625rem;
  padding: 0;
`;
const Text = styled.div`
  width: 4.6875rem;
  text-align: center;
`;
const Hr = styled.hr`
  width: 9.375rem;
`;
const P = styled.p`
  color: #152536;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;
const KakaoImg = styled.img``;
/*
const SignHandler = styled.div``
const Switch2Login = styled.div``
const Switch2SignUp = styled.div``
*/
