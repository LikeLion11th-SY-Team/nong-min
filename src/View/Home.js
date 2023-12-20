import styled from "styled-components";
import Menu from "../Component/Menu";
import { useContext } from "react";
import { AppContext } from "../App";

function Home() {
  const { login, setLogin } = useContext(AppContext);
  return (
    <Container>
      <BkImage />
      <ItemsContainer>
        <BoardContainer>
          <BoardInfo>
            우리 모두가 이어질 수 있도록
            <BoardTitle>
              웹사이트 학습 기능 탑재 커뮤니티, "한걸음씩"
            </BoardTitle>
          </BoardInfo>
        </BoardContainer>

        <BottomContainer>
          <MenuContainer>
            <Menu
              title="학습 공간"
              infoTop="전반적인 웹사이트 사용 방법을"
              infoBottom="단계별로 쉽게 이해할 수 있게 도와줍니다."
              link="/practice"
            />
            <Menu
              title="커뮤니티"
              infoTop="자유 게시판, 정보공유 게시판 등의"
              infoBottom="소통의 공간을 제공합니다."
              link="/community/free"
            />
            {login ? (
              <Menu
                title="계정 관리"
                infoTop="회원가입, 로그인/로그아웃, 마이페이지"
                link="/mypage/editdata"
              />
            ) : (
              <Menu
                title="계정 관리"
                infoTop="회원가입, 로그인/로그아웃, 마이페이지"
                link="/sign"
              />
            )}
          </MenuContainer>
        </BottomContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  position: relative;
`;

const BkImage = styled.div`
  background: url(/images/background.png);
  height: 50rem;
  margin: 0;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const ItemsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 15.16rem;

  left: 50%;
  transform: translate(-50%);
`;

const BoardContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 22rem;
`;

const BoardInfo = styled.div`
  color: #002d61;
  text-align: center;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.25038rem */
  letter-spacing: -0.00938rem;
`;

const BoardTitle = styled.div`
  font-size: 1.875rem;
  margin-top: 1rem;
`;

const BottomContainer = styled.div`
  margin: 0 auto;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;
