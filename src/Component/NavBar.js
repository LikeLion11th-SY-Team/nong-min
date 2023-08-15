import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function NavBar() {
  const location = useLocation();
  const [hover, setHover] = useState(0);
  return location.pathname === "/" ? null : (
    <NavContainer
      onMouseEnter={() => setHover(1)}
      onMouseLeave={() => setHover(0)}
    >
      <div className="logoContainer">
        <NavLogo to={"/home"}>로고</NavLogo>
      </div>

      <MenuContainer>
        <NavMenu to={"/aboutus"}>서비스 소개</NavMenu>
        <div>
          <NavMenu to={"/practice"}>학습공간</NavMenu>
          <DropDown hover={hover}>
            <Li>
              <DropDownMenu to={"/practice/info"}>학습공간 소개</DropDownMenu>
            </Li>
            <Li>
              <DropDownMenu to={"/practice/log"}>학습기록 보기</DropDownMenu>
            </Li>
            <Li>
              <DropDownMenu to={"/practice/exercise"}>학습하기</DropDownMenu>
            </Li>
          </DropDown>
        </div>
        <div>
          <NavMenu to={"/community"}>커뮤니티</NavMenu>
          <DropDown hover={hover}>
            <Li>
              <DropDownMenu>자유게시판</DropDownMenu>
            </Li>
            <Li>
              <DropDownMenu>정보공유 게시판</DropDownMenu>
            </Li>
          </DropDown>
        </div>
        <div className="userContainer">
          <NavMenu to={"/mypage"}>계정관리</NavMenu>
          <DropDown hover={hover}>
            <Li>
              <DropDownMenu>마이페이지</DropDownMenu>
            </Li>
          </DropDown>
        </div>

        <div className="loginContainer">
          <Login to={"/login"}>
            <i className="fas fa-user-circle"></i>
            로그인
          </Login>
        </div>
      </MenuContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2.94rem;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  &:hover {
    border-radius: 0rem 0rem 0.9375rem 0.9375rem;
    background: #fff;
    /* height: 14.25rem; */

    .DropDown {
      display: block;
      padding-bottom: 2rem;
    }
  }
`;

const NavLogo = styled(Link)`
  color: #002d61;
  text-decoration: none;

  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.01125rem;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 60%;
  text-align: center;
`;

const NavMenu = styled(Link)`
  color: #002d61;
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;

const DropDown = styled.ul`
  display: ${({ hover }) => (hover === 0 ? "none" : "block")};
  padding-left: 0;
  padding-bottom: 1.5rem;
`;

const DropDownMenu = styled(Link)`
  color: #002d61;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.12px;
  text-decoration: none;
`;

const Login = styled(Link)`
  color: #002d61;
  text-decoration: none;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00675rem;
`;

const Li = styled.li`
  list-style: none;
  padding-bottom: 0.4rem;
`;

export default NavBar;
