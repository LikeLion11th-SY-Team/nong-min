import styled from "styled-components";

function StatusBar(props) {
  console.log(props.step);
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
  width: 75rem;
  display: flex;
  align-items: center;

  margin: 0 auto;
`;

const ItemsContainer = styled.div`
  position: relative;
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
  width: 67rem;
  position: relative;
  margin: 0 auto;
`;

const Bar = styled.div`
  width: 66rem;
  height: 1.5625rem;

  border-radius: 0.9375rem;
  background: #d9d9d9;

  position: absolute;
  left: 10%;
  top: 0.35rem;
`;

const Status = styled.div`
  width: ${({ step }) => step * 11}rem;
  height: 1.5625rem;

  border-radius: 0.9375rem;
  background: #002d61;
  box-shadow: 3px 2px 10px 0px rgba(255, 255, 255, 0.4) inset;

  position: absolute;
  left: 10%;
  top: 0.35rem;
`;

export default StatusBar;
