import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import { styled } from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function Sign() {
  const [sign, setSign] = useState(0);
  return(
    <SignContainer>
      <Switcher>
        <Switch2Login sign={sign} onClick={() => setSign(1)}>로그인</Switch2Login>
        <Switch2SignUp sign={sign} onClick={() => setSign(0)}>회원가입</Switch2SignUp>
      </Switcher>
      
      <ContentContainer>
        {sign === 1 ? <Login /> : <SignUp />}
      </ContentContainer>
    </SignContainer>
  )
}

export default Sign;

const SignContainer = styled.div`
  position: absolute;
  top: 15.16rem;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Switcher = styled.div`
  display: flex;
  width: 18.3125rem;
  height: 4rem;
  background: #F3F0F0;
  border-radius: 0.9375rem;
`
const Switch2Login = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  background: ${({ sign }) => (sign === 1 ? "#002D61" : "#F3F0F0")};
  color: ${({ sign }) => (sign === 1 ? "#FFF" : "#828282")};
  text-align: center;
  font-family: Inter;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01013rem;
`
const Switch2SignUp = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  background: ${({ sign }) => (sign === 0 ? "#002D61" : "#F3F0F0")};
  color: ${({ sign }) => (sign === 0 ? "#FFF" : "#828282")};
  text-align: center;
  font-family: Inter;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01013rem;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;