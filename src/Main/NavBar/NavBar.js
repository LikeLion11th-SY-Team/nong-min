import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <Link to={"/"} className="navLogo">
          로고
        </Link>
      </div>

      <div className="menuContainer">
        <Link to={"/aboutus"} className="navMenu">
          서비스 소개
        </Link>
        <Link to={"/community"} className="navMenu">
          커뮤니티
        </Link>
        <div>
          <Link to={"/practice"} className="navMenu">
            학습공간
          </Link>
          <ul className="dropDown">
            <li>
              <Link className="dropDownMenu">학습공간 소개</Link>
            </li>
            <li>
              <Link className="dropDownMenu">학습기록 보기</Link>
            </li>
            <li>
              <Link className="dropDownMenu">학습하기</Link>
            </li>
          </ul>
        </div>
        <div className="userContainer">
          <Link to={"/mypage"} className="navMenu">
            마이페이지
          </Link>
          <ul className="dropDown">
            <li>
              <Link className="dropDownMenu">개인정보 변경</Link>
            </li>
          </ul>
        </div>

        <div className="loginContainer">
          <Link to={"/login"} className="login">
            <i className="fas fa-user-circle"></i>
            로그인 | 회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
