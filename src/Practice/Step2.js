import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explanation from "./Explanation";

function Step2() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <ContentsContainer>
        {page === 0 ? (
          <Explanation
            info1="홈페이지 상단의"
            info2="로그인 버튼을"
            info3="눌러주세요."
            src="/images/view_home.png"
            none="1"
          />
        ) : page === 1 ? (
          <Explanation
            info1="그 후,"
            info2="아이디와 비밀번호를 입력하고"
            info3="로그인 버튼을 눌러주세요!"
            src="/images/view_login.png"
            none="1"
          />
        ) : page === 2 ? (
          <Explanation
            info1="그 후,"
            info2="아이디와 비밀번호를 입력하고"
            info3="로그인 버튼을 눌러주세요!"
            src="/images/view_login.png"
            none="1"
            opacity="1"
          />
        ) : page === 3 ? (
          <Explanation
            info1="아이디와 비밀번호를 입력하고"
            info2="로그인 버튼을"
            info3="눌러주세요!"
            none="1"
          />
        ) : (
          <Explanation
            info1="아이디와 비밀번호를 입력하고"
            info2="로그인 버튼을"
            info3="눌러주세요!"
            none="1"
            opacity="1"
          />
        )}
      </ContentsContainer>
      <NextBtn onClick={() => setPage((cur) => cur + 1)}>
        <i class="fas fa-forward"></i>
      </NextBtn>

      <NextStepBtn
        page={page === 4}
        onClick={() => navigate("/practice/log?step=2")}
      >
        다음 단계로
      </NextStepBtn>
      <NextStepBtn page={page === 2} onClick={() => setPage((cur) => cur + 1)}>
        연습해보기
      </NextStepBtn>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const ContentsContainer = styled.div`
  height: 100%;
`;

const NextBtn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  font-size: 3rem;
  z-index: 2;
`;

const NextStepBtn = styled.button`
  width: 10rem;
  height: 3.3125rem;

  border-radius: 9.5rem;
  background: #002d61;
  box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.3) inset,
    3px 2px 10px 0px rgba(255, 255, 255, 0.45) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  text-align: center;
  font-size: 1.5625rem;
  font-weight: 600;

  position: absolute;
  bottom: 0;
  right: 0;

  display: ${({ page }) => (page ? "block" : "none")};
  z-index: 3;
`;

export default Step2;
