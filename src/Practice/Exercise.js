import { Routes, Route } from "react-router-dom";
import PracticeMenu from "./PracticeMenu";
import styled from "styled-components";
import StatusBar from "./StatusBar";
import Step0 from "./Step0";

function Exercise() {
  const step = 0;
  return (
    <Container>
      <ItemsContainer>
        <PracticeMenu />
        <ContentsContainer>
          <StatusBar step={step} />
          <Contents>
            <Routes>
              <Route path="/0" element={<Step0 />} />
            </Routes>
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
