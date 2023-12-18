import { useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setCookie, getCookie, removeCookie } from "./API/Cookie";
import axios from "axios";
import { useState } from "react";

import NavBar from "./Component/NavBar";
import Home from "./View/Home.js";
import AboutUs from "./View/AboutUs";
import Community from "./View/Community";
import Practice from "./View/Practice";
import Exercise from "./Practice/Exercise";
import MyPage from "./View/MyPage";
import { Login } from "./Component/Login";
import LoginHandler from "./Component/LoginHandler";
import Landing from "./View/Landing";
import { SignUp } from "./Component/SignUp";

import "./App.css";
import Sign from "./View/Sign";
import Log from "./Practice/Log";

export const AppContext = createContext();

function App() {
  useEffect(() => {
    const checkAccessToken = async () => {
      const accessToken = getCookie("accessToken");
      const refreshToken = getCookie("refreshToken");

      if (accessToken && refreshToken) {
        /* 
        const accessTokenExp = decodeToken(accessToken).exp; // 토큰의 만료 시간
        const now = Math.floor(Date.now() / 1000); // 현재 시간
        
        if (accessTokenExp < now) { // 엑세스 토큰이 만료되었을 경우, 리프레시 토큰 사용
          try {
            const res = await axios.post(`${BaseUrl}/auth/refresh/`, { refresh });
            const newAccessToken = res.data.access;
            setCookie("accessToken", newAccessToken, { path: "/" });
          } catch (err) {
            // 리프레시 토큰도 만료되거나 다른 이유로 실패한 경우
            removeCookie("accessToken"); 
            removeCookie("refreshToken"); 
          }
        }
        */
      }
    };
    checkAccessToken();
  }, []);

  const [nickname, setNickname] = useState();
  const [login, setLogin] = useState(false);
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    getNickname();
  }, []);

  async function getNickname() {
    await axios
      .get(`${process.env.REACT_APP_BaseUrl}/auth/api/get/nickname/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setNickname(response.data);
        setLogin(true);
        console.log(nickname);
      })
      .catch((error) => {
        console.log(error);
        setLogin(false);
      });
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{ login, setLogin, nickname, getNickname, setNickname }}
      >
        <Router>
          <NavBar nickname={nickname} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/community/*" element={<Community />} />
            <Route path="/practice/*" element={<Practice />} />
            <Route path="/practice/exercise/*" element={<Exercise />} />
            <Route path="/practice/log" element={<Log />} />
            <Route path="/mypage/*" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/auth/api/kakao-login/" element={<LoginHandler />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
