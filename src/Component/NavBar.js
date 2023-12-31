import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { getCookie, removeCookie } from "../API/Cookie";
import axios from "axios";
import { async } from "q";
import { AppContext } from "../App";

function NavBar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [hover, setHover] = useState(0);

  const accessToken = getCookie("accessToken");

  const { login, setLogin } = useContext(AppContext);

  async function logout() {
    await axios
      .delete(`${process.env.REACT_APP_BaseUrl}/auth/logout/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log(response);
        setLogin(false);
        removeCookie("accessToken");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return location.pathname === "/" ||
    location.pathname === "/practice/log" ? null : (
    <NavContainer
      onMouseEnter={() => setHover(1)}
      onMouseLeave={() => setHover(0)}
    >
      <div className="logoContainer">
        <NavLogo onClick={() => navigate("/home")}></NavLogo>
      </div>

      <MenuContainer>
        <NavMenu to={"/aboutus"}>서비스 소개</NavMenu>
        <DropContainer>
          <NavMenu to={"/practice"}>학습공간</NavMenu>
          <DropDown hover={hover}>
            <Li>
              <DropDownMenu to={"/practice/info"}>학습공간 소개</DropDownMenu>
            </Li>
            <Li>
              <DropDownMenu to={"/practice/log?step=0"}>
                학습기록 보기
              </DropDownMenu>
            </Li>
            <Li>
              <DropDownMenu to={"/practice/exercise?step=0"}>
                학습하기
              </DropDownMenu>
            </Li>
          </DropDown>
        </DropContainer>
        <DropContainer>
          <NavMenu to={"/community/free"}>커뮤니티</NavMenu>
          <DropDown hover={hover}>
            <Li>
              <DropDownMenu to={"/community/free"}>자유게시판</DropDownMenu>
            </Li>
            <Li>
              <DropDownMenu to={"/community/info"}>
                정보공유 게시판
              </DropDownMenu>
            </Li>
          </DropDown>
        </DropContainer>
        {login ? (
          <DropContainer className="userContainer">
            <NavMenu to={"/mypage/editdata"}>계정관리</NavMenu>
            <DropDown hover={hover}>
              <Li>
                <DropDownMenu to={"/mypage/editdata"}>마이페이지</DropDownMenu>
              </Li>
              <Li>
                <DropDownMenu to={"/mypage/posts"}>내 활동</DropDownMenu>
              </Li>
            </DropDown>
          </DropContainer>
        ) : (
          <DropContainer className="userContainer">
            <NavMenu onClick={() => alert("로그인을 먼저 완료해주세요.")}>
              계정관리
            </NavMenu>
            <DropDown hover={hover}>
              <Li>
                <DropDownMenu
                  onClick={() => alert("로그인을 먼저 완료해주세요.")}
                >
                  마이페이지
                </DropDownMenu>
              </Li>
              <Li>
                <DropDownMenu
                  onClick={() => alert("로그인을 먼저 완료해주세요.")}
                >
                  내 활동
                </DropDownMenu>
              </Li>
            </DropDown>
          </DropContainer>
        )}
      </MenuContainer>
      {login ? (
        <UserContainer>
          <Login to={"/mypage/editdata"}>
            <UserLogoContainer>
              <i className="fas fa-user-circle"></i>
            </UserLogoContainer>
            <UserName>{props.nickname}</UserName>
          </Login>
          <Separator>|</Separator>
          <Logout to={"/home"} onClick={() => logout()}>
            로그아웃
          </Logout>
        </UserContainer>
      ) : (
        <UserContainer>
          <Login to={"/sign"}>
            <UserLogoContainer>
              <i className="fas fa-user-circle"></i>
            </UserLogoContainer>
            <UserName>로그인</UserName>
          </Login>
        </UserContainer>
      )}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  padding-left: 5%;
  padding-right: 5%;

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

const NavLogo = styled.div`
  width: 11.8125rem;
  height: 5.375rem;

  background-image: url("/images/main_logo.png");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
  margin-top: 1.1rem;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 48%;
  text-align: center;
  margin-left: 8rem;
  padding-top: 3rem;
`;

const DropContainer = styled.div`
  width: 9rem;
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

  width: 9rem;
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

const UserContainer = styled.div`
  padding-top: 3rem;
  padding-right: 4rem;
  display: flex;
`;

const Login = styled(Link)`
  color: #002d61;
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0075rem;

  display: flex;
  margin-right: 1rem;
`;

const Logout = styled(Link)`
  color: #002d61;
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;

const Separator = styled.div`
  color: #002d61;
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0075rem;

  margin-right: 1rem;
`;

const Li = styled.li`
  list-style: none;
  padding-bottom: 0.4rem;
`;

const UserLogoContainer = styled.div`
  padding-top: 0.1rem;
`;

const UserName = styled.div`
  margin-left: 0.5rem;
`;

export default NavBar;
