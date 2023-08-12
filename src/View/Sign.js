import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from "../Component/Login"
import SignUp from "../Component/SignUp"
import { styled } from "styled-components";

function Sign() {
  return(
    <SignContainer>
      <Switcher>
        <Switch2Login to="/login">로그인</Switch2Login>
        <Switch2SignUp to="/signup">회원가입</Switch2SignUp>
      </Switcher>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </SignContainer>
  )
}

export default Sign;

const SignContainer = styled.div`
`
const Switcher = styled.div``
const Switch2Login = styled(Link)``
const Switch2SignUp = styled(Link)``