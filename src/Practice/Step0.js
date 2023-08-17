import styled from "styled-components";
import { ReactComponent as Tutor } from "../svg/tutor.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explanation from "./Explanation";

function Step0() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <ContentsContainer page={page === 1}>
        <Explanation
          info1="주소창 또는 주소 바로 옆에"
          info2="위치한 별표 모양의"
          info3="아이콘을 클릭해주세요."
          src="/images/home_view.png"
          none="1"
        />
      </ContentsContainer>
      <NextBtn onClick={() => setPage((cur) => cur + 1)}>
        <i class="fas fa-forward"></i>
      </NextBtn>
      <NextStepBtn
        page={page === 1}
        onClick={() => navigate("/practice/log?step=0")}
      >
        다음 단계로
      </NextStepBtn>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 92%;
`;

const ContentsContainer = styled.div`
  height: 100%;
  opacity: ${({ page }) => (page ? "0.4" : "1")};
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

export default Step0;
