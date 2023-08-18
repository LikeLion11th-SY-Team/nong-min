import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../API/Cookie";

import { REDIRECT_URI } from "../API/KaKaoApi";
import { BaseUrl } from "../API/Api";

function LoginHandler(props) {
  const navigation = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  console.log(code);

  const kakaoLogin = async () => {
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BaseUrl}/auth_kakao/api/kakao-login/`, 
      data: { 'authorization_code': code }
      /*headers: {
        //"Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 전송
        //"Access-Control-Allow-Origin": "*",
        Authorization: `${code}`
      },
      */
    }).then((res) => {
      const accessToken = res.data.access;
      const refreshToken = res.data.refresh;
      setCookie("accessToken", accessToken, { path: "/" });
      setCookie("refreshToken", refreshToken, { path: "/" });
      navigation("/home");
    })
  };

  useEffect(() => {
    kakaoLogin();
  }, [])
  return (
    <div>
      loading
    </div>
  )
}

export default LoginHandler;