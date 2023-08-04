import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as X } from "../close.svg";
import styled from "styled-components";

function Landing() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(0);
  return (
    <>
      <XButton onClick={() => navigate("/home")}>
        <X />
      </XButton>
      <MenuContainer>
        <Menu
          practice={true}
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
        </Menu>
        <Menu
          practice={false}
          onClick={() => navigate("/community")}
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
        </Menu>
      </MenuContainer>
    </>
  );
}

const XButton = styled.div`
  width: 2.1875rem;
  height: 2.1875rem;
  margin-left: 1.5rem;
  margin-top: 1.5rem;

  cursor: pointer;
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

  background-image: ${({ practice }) =>
    practice ? `url(/images/practice.jpg)` : "url(/images/community.jpg)"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: ${({ practice }) =>
    practice ? "1.875rem 0rem 0rem 1.875rem;" : "0rem 1.875rem 1.875rem 0rem;"};

  color: ${({ practice }) => (practice ? "#002D61" : "#FFF")};
  text-align: center;
  font-size: 2.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    width: 29.375rem;
    cursor: pointer;
    /* opacity: 0.7; */
  }
`;

const MenuName = styled.div`
  margin-top: 8.44rem;
`;

const MenuInfo = styled.div`
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.07031rem */
  letter-spacing: -0.00863rem;

  margin-top: 8.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default Landing;
