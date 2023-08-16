import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setCookie, getCookie, removeCookie } from "./API/Cookie";
import axios from "axios";
import { BaseUrl } from "./API/Api";

import NavBar from "./Component/NavBar";
import Home from "./View/Home.js";
import AboutUs from "./View/AboutUs";
import Community from "./View/Community";
import Practice from "./View/Practice";
import Exercise from "./Practice/Exercise";
import MyPage from "./View/MyPage";
import Login from "./Component/Login";
import LoginHandler from "./Component/LoginHandler";
import Landing from "./View/Landing";
import SignUp from "./Component/SignUp";

import "./App.css";
import Log from "./Practice/Log";

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
            const res = await axios.post(`${BaseUrl}/auth/refresh/`, { refreshToken });
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

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/exercise/*" element={<Exercise />} />
          <Route path="/practice/log" element={<Log />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login/oauth/callback/kakao"
            element={<LoginHandler />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
