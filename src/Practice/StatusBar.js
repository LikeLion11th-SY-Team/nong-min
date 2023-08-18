import styled from "styled-components";

function StatusBar(props) {
  return (
    <Container>
      <ItemsContainer>
        <Title>진도</Title>
        <BarContainer>
          <Bar />
          <Status step={props.step} />
        </BarContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
`;

const ItemsContainer = styled.div`
  position: relative;
  width: 90%;
`;

const Title = styled.div`
  width: 5rem;
  height: 1.5625rem;

  color: #002d61;
  font-size: 1.5625rem;
  font-weight: 600;

  position: absolute;
`;

const BarContainer = styled.div`
  width: 80%;
  position: relative;
  margin: 0 auto;
`;

const Bar = styled.div`
  width: 98%;
  height: 1.5625rem;

  border-radius: 0.9375rem;
  background: #d9d9d9;

  position: absolute;
  left: 10%;
  top: 0.35rem;
`;

const Status = styled.div`
  width: ${({ step }) => step * 14}%;
  height: 1.5625rem;

  border-radius: 0.9375rem;
  background: #002d61;
  box-shadow: 3px 2px 10px 0px rgba(255, 255, 255, 0.4) inset;

  position: absolute;
  left: 10%;
  top: 0.35rem;
`;

export default StatusBar;
