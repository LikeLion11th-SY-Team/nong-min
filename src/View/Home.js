import styled from "styled-components";

function Home() {
  return (
    <BoardContainer>
      <BoardImage>
        <BoardInfo>
          우리 모두가 이어질 수 있도록
          <BoardTitle>
            웹사이트 학습 기능 탑재 커뮤니티, "서비스 이름"
          </BoardTitle>
        </BoardInfo>
      </BoardImage>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  height: 100%; /*edited*/
`;

const BoardImage = styled.div`
  background: url(/images/background.png);
  height: 50rem; /*80rem*/
  margin: 0;

  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardInfo = styled.div`
  width: 38.9375rem;
  height: 17.6875rem;

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

export default Home;
