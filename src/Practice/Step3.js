import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explanation from "./Explanation";

function Step3() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <ContentsContainer>
        {page === 0 ? (
          <Explanation
            info1="홈페이지 상단 혹은"
            info2="하단의 버튼을 통해"
            info3="'커뮤니티'에 접속해주세요."
            src="/images/view_home.png"
            none="1"
          />
        ) : page === 1 ? (
          <Explanation
            info1="커뮤니티는 크게"
            info2="정보공유 게시판 / 자유 게시판"
            info3="두 가지 게시판이 있습니다."
            src="/images/view_community.png"
            none="1"
          />
        ) : page === 2 ? (
          <Explanation
            info1="게시글을 눌러 글의"
            info2="더 자세한 내용을"
            info3="확인할 수도 있습니다."
            src="/images/view_community_detail.png"
            none="1"
          />
        ) : (
          <Explanation
            info1="게시글을 눌러 글의"
            info2="더 자세한 내용을"
            info3="확인할 수도 있습니다."
            src="/images/view_login.png"
            none="1"
            opacity="1"
          />
        )}
      </ContentsContainer>
      <NextBtn onClick={() => setPage((cur) => cur + 1)}>
        <i class="fas fa-forward"></i>
      </NextBtn>

      <NextStepBtn
        page={page === 3}
        onClick={() => navigate("/practice/log?step=3")}
      >
        다음 단계로
      </NextStepBtn>
      <NextStepBtn page={page === 12} onClick={() => setPage((cur) => cur + 1)}>
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

export default Step3;
