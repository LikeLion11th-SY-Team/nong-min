import { useLocation } from "react-router-dom";
import PracticeMenu from "./PracticeMenu";
import styled from "styled-components";
import StatusBar from "./StatusBar";
import Step0 from "./Step0";
import Step1 from "./Step1";

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
            {step === "0" ? <Step0 /> : step === "1" ? <Step1 /> : null}
          </Contents>
        </ContentsContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 10rem 5% 0 5%;
  height: 100%;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentsContainer = styled.div`
  width: 80%;
`;

const Contents = styled.div`
  width: 70rem;
  height: 100%;

  margin: 0 auto;
`;

export default Exercise;
