import { Routes, Route } from "react-router-dom";
import PracticeMenu from "./PracticeMenu";
import styled from "styled-components";
import StatusBar from "./StatusBar";

function Exercise() {
  return (
    <Container>
      <ItemsContainer>
        <PracticeMenu />
        <ContentsContainer>
          <StatusBar step={1} />
          <Contents></Contents>
        </ContentsContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 10rem 5% 0 5%;
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
  height: 40rem;
  margin: 0 auto;
  margin-top: 7rem;

  background-color: #000;
`;

export default Exercise;
