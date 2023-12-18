import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explanation from "./Explanation";

function Step4() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <ContentsContainer>
        {page === 0 ? (
          <Explanation
            info1="게시판에 들어가"
            info2="'글쓰기' 버튼을 눌러주세요!"
            src="/images/view_home.png"
            none="1"
          />
        ) : page === 1 ? (
          <Explanation
            info1="게시판 선택란에서"
            info2="글을 작성하고자 하는"
            info3="게시판을 선택해주세요."
            src="/images/view_login.png"
            none="1"
          />
        ) : page === 2 ? (
          <Explanation
            info1="제목을 입력하고"
            info2="글을 작성한 후,"
            info3="동록 버튼을 눌러주세요!"
            src="/images/view_login.png"
            none="1"
          />
        ) : page === 3 ? (
          <Explanation
            info1="제목을 입력하고"
            info2="글을 작성한 후,"
            info3="동록 버튼을 눌러주세요!"
            info4="필요에 따라"
            info5="사진을 첨부할 수 있습니다!"
            src="/images/view_login.png"
            opacity="1"
          />
        ) : page === 4 ? (
          <Explanation
            info1="제목을 입력하고"
            info2="글을 작성한 후,"
            info3="동록 버튼을 눌러주세요!"
            info4="필요에 따라"
            info5="사진을 첨부할 수 있습니다!"
            src="/images/view_login.png"
            opacity="1"
          />
        ) : page === 5 ? (
          <Explanation
            info1="게시판 선택란에서"
            info2="글을 작성하고자 하는 게시판을"
            info3="선택해주세요."
            exercise="write"
            none="1"
          />
        ) : page === 6 ? (
          <Explanation
            info1="제목을 입력하고"
            info2="글을 작성한 후,"
            info3="동록 버튼을 눌러주세요!"
            exercise="write"
            none="1"
          />
        ) : (
          <Explanation
            info1="제목을 입력하고"
            info2="글을 작성한 후,"
            info3="동록 버튼을 눌러주세요!"
            exercise="write"
            none="1"
            opacity="1"
          />
        )}
      </ContentsContainer>
      <NextBtn onClick={() => setPage((cur) => cur + 1)}>
        <i class="fas fa-forward"></i>
      </NextBtn>

      <NextStepBtn
        page={page === 7}
        onClick={() => navigate("/practice/log?step=4")}
      >
        다음 단계로
      </NextStepBtn>
      <NextStepBtn page={page === 4} onClick={() => setPage((cur) => cur + 1)}>
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

export default Step4;
