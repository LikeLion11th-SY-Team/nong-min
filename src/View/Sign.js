import Login from "../Component/Login";
import { SignUp } from "../Component/SignUp";
import { styled } from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function Sign() {
  const [sign, setSign] = useState(1);
  return (
    <Container sign={sign}>
      <BkImage />
      <SignContainer>
        <BoardContainer sign={sign}>
          <Switcher>
            <Switch2Login sign={sign} onClick={() => setSign(1)}>
              로그인
            </Switch2Login>
            <Switch2SignUp sign={sign} onClick={() => setSign(0)}>
              회원가입
            </Switch2SignUp>
          </Switcher>

          <ContentContainer>
            {sign === 1 ? <Login /> : <SignUp />}
          </ContentContainer>
        </BoardContainer>
      </SignContainer>
    </Container>
  );
}

export default Sign;

const Container = styled.div`
  height: ${({ sign }) => (sign === 1 ? "55rem" : "97rem")};
  margin-bottom: 4.43rem;
  position: relative;
`;

const BkImage = styled.div`
  background: url(/images/background.png);
  height: 20rem;
  margin: 0;

  background-repeat: no-repeat;
  background-position: center left;
  background-size: cover;
`;

const SignContainer = styled.div`
  display: flex;

  position: absolute;
  top: 15.16rem;

  left: 50%;
  transform: translate(-50%);
`;

const BoardContainer = styled.div`
  width: 75.4375rem;
  height: ${({ sign }) => (sign === 1 ? "40rem" : "82rem")};

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: relative;
`;

const Switcher = styled.div`
  display: flex;
  width: 18.3125rem;
  height: 4rem;
  background: #f3f0f0;
  border-radius: 0.9375rem;

  margin: 3.12rem auto;
`;
const Switch2Login = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  background: ${({ sign }) => (sign === 1 ? "#002D61" : "#F3F0F0")};
  color: ${({ sign }) => (sign === 1 ? "#FFF" : "#828282")};
  text-align: center;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01013rem;
`;
const Switch2SignUp = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  background: ${({ sign }) => (sign === 0 ? "#002D61" : "#F3F0F0")};
  color: ${({ sign }) => (sign === 0 ? "#FFF" : "#828282")};
  text-align: center;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01013rem;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
