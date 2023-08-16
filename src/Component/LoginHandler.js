import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../API/Cookie";

import { REDIRECT_URI } from "../API/KaKaoApi";

function LoginHandler(props) {
  const navigation = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `${REDIRECT_URI}/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 전송
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        const accessToken = res.data.access;
        const refreshToken = res.data.refresh;
        setCookie("accessToken", accessToken, { path: "/" });
        setCookie("refreshToken", refreshToken, { path: "/" });
        navigation("/home");
      })
    };
    kakaoLogin();
  }, [props.history])
  return (
    <div>
      loading
    </div>
  )
}

export default LoginHandler;