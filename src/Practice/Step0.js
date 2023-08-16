import styled from "styled-components";
import { ReactComponent as Tutor } from "../svg/tutor.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Step0() {
  const [nextStep, setNext] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <ContentsContainer onClick={() => setNext(true)} step={nextStep}>
        <Img />
        <FocusImg />
        <ExplainContainer>
          <BubbleContainer>
            주소창 또는 주소 바로 옆에
            <br /> 위치한 별표 모양의
            <br /> 아이콘을 클릭해주세요.
          </BubbleContainer>
          <Tutor />
        </ExplainContainer>
      </ContentsContainer>

      <NextBtn step={nextStep}>다음 단계로</NextBtn>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 92%;
`;

const ContentsContainer = styled.div`
  height: 100%;
  opacity: ${({ step }) => (step ? "0.4" : "1")};
`;

const Img = styled.div`
  background-image: url("/images/homeView.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 48rem;
  height: 30rem;

  position: absolute;

  top: 10%;
  left: 50%;
  transform: translate(-50%);
`;

const FocusImg = styled.div`
  width: 12.5rem;
  height: 12.5rem;

  border-radius: 12.5rem;
  background: url("/images/homeView.png"),
    lightgray -1157.416px 1.649px / 676.923% 440% no-repeat;
  background-position: 90% 0;

  position: absolute;

  top: 3%;
  right: 10rem;
`;

const ExplainContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const BubbleContainer = styled.div`
  width: 20rem;
  height: 12rem;

  border-radius: 50%;
  background: #002d61;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextBtn = styled.button`
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

  display: ${({ step }) => (step ? "block" : "none")};
`;

export default Step0;
