import { useState } from "react";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../API/KaKaoApi";

import { styled } from "styled-components";
import { BaseUrl } from "../API/Api";

function Login(){
  const [check, setCheck] = useState(false);
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

  const onSubmit = async (event) => {
    event.preventDefault();

    if(!id || !pw){
      alert("아이디, 비밀번호를 입력해주세요.");
    }
    // 아이디, 비밀번호 유효성 검사 로직 추가
    /* 
    try{
      const res = await axios.post(`${BaseUrl/어쩌구}`, { id, pw }
      ). then(
        res => {
          
        });
    } catch{

    }
    */
  }

  return(
    <LoginContainer>
      <form onSubmit={onSubmit}>
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
      </form>
      
      <div>
        <Link to={'/signup'}>회원가입</Link>
        <Link to={'/find'}>아이디/비밀번호 찾기</Link>
      </div>

      <a href={KAKAO_AUTH_URL}>
        <img src="/images/kakao_login_medium_narrow.png" alt="카카오 로그인 이미지"/>
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