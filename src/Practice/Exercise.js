import { useLocation } from "react-router-dom";
import PracticeMenu from "./PracticeMenu";
import styled from "styled-components";
import StatusBar from "./StatusBar";
import Step0 from "./Step0";
import Step1 from "./Step1";
import { Step2_1, Step2_2 } from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function Exercise() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");

  return (
    <Container>
      <ItemsContainer>
        <PracticeMenu step={step} />
        <ContentsContainer>
          <StatusBar step={step} />
          <Contents>
            {step === "0" ? (
              <Step0 />
            ) : step === "1" ? (
              <Step1 />
            ) : step === "2" ? (
              <Step2_1 />
            ) : step === "2.5" ? (
              <Step2_2 />
            ) : step === "3" ? (
              <Step3 />
            ) : step === "4" ? (
              <Step4 />
            ) : null}
          </Contents>
        </ContentsContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ItemsContainer = styled.div`
  padding-top: 10rem;
  display: flex;
  justify-content: center;
`;

const ContentsContainer = styled.div`
  width: 75%;
`;

const Contents = styled.div`
  width: 100%;
  height: 92%;

  margin: 0 auto;
`;

export default Exercise;
