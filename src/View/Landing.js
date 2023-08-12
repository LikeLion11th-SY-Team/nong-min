import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function Landing() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(0);
  return (
    <>
      <HomeButton onClick={() => navigate("/home")}>
        <HomeImg src="/images/home.png" />
        <HomeInfo>홈으로</HomeInfo>
      </HomeButton>
      <MenuContainer>
        <Menu
          menu="practice"
          hover={hover}
          onClick={() => navigate("/practice")}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
        >
          <MenuName>학습공간</MenuName>
          {hover === 1 ? (
            <MenuInfo>
              전반적인 웹사이트 사용 방법을 <br /> 단계별로 쉽게 이해할 수 있게
              도와줍니다.
            </MenuInfo>
          ) : null}
          <MenuImg menu="practice" />
        </Menu>
        <Menu
          menu="community"
          hover={hover}
          onClick={() => navigate("/community/free")}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(0)}
        >
          <MenuName>커뮤니티</MenuName>
          {hover === 2 ? (
            <MenuInfo>
              자유 게시판, 정보공유 게시판 등의 <br />
              소통의 공간을 제공합니다.
            </MenuInfo>
          ) : null}
          <MenuImg menu="community" />
        </Menu>
      </MenuContainer>
    </>
  );
}

const HomeButton = styled.div`
  width: 7rem;
  height: 2.1875rem;
  margin-left: 1.5rem;
  margin-top: 1.5rem;

  display: flex;
  justify-content: center;

  cursor: pointer;
`;

const HomeImg = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
`;

const HomeInfo = styled.div`
  width: 4.3125rem;
  height: 1.875rem;

  color: #152536;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 0.2rem;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8rem;
`;

const Menu = styled.div`
  width: 22.9375rem;
  height: 38.8125rem;

  /* background-image: ${({ practice }) =>
    practice ? `url(/images/practice.jpg)` : "url(/images/community.jpg)"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  background-color: ${({ menu }) => (menu === "practice" ? "#fff" : "#002D61")};

  border-radius: ${({ menu }) =>
    menu === "practice"
      ? "1.875rem 0rem 0rem 1.875rem;"
      : "0rem 1.875rem 1.875rem 0rem"};

  color: ${({ menu }) => (menu === "practice" ? "#002D61" : "#FFF")};
  text-align: center;
  font-size: 2.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border: 1px solid #828282;

  &:hover {
    width: 29.375rem;
    cursor: pointer;
  }

  opacity: ${({ hover, menu }) =>
    (hover === 1 && menu === "community") ||
    (hover === 2 && menu === "practice")
      ? 0.7
      : null};

  position: relative;
`;

const MenuName = styled.div`
  margin-top: 5.94rem;
`;

const MenuInfo = styled.div`
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.07031rem */
  letter-spacing: -0.00863rem;

  margin-top: 1.94rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const MenuImg = styled.div`
  width: 22.9375rem;
  height: 15.346rem;

  background-image: ${({ menu }) =>
    menu === "practice"
      ? "url(/images/practice.png)"
      : "url(/images/community.png)"};

  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position: center;

  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export default Landing;
