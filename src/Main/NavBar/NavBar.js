import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navContainer">
      <div className="logo">
        <Link to={"/"}>로고</Link>
      </div>
      <Link to={"/aboutus"}>서비스 소개</Link>
      <Link to={"/community"}>커뮤니티</Link>
      <Link to={"/practice"}>학습공간</Link>
      <Link to={"/mypage"}>마이페이지</Link>
      <div className="login">
        <Link to={"/login"}>로그인 | 회원가입</Link>
      </div>
    </div>
  );
}

export default NavBar;
