import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Practice() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(0);

  return (
    <Container>
      <ContentsContainer>
        <TextContainer>
          <Title>학습 공간</Title>
          <Detail>
            전반적인 웹사이트 사용 방법을
            <br /> 단계별로 쉽게 이해할 수 있게 도와줍니다.
          </Detail>
          <Btn>자세히 →</Btn>
        </TextContainer>
        <div>
          <SmallContainer>
            <Box
              size="small"
              hover={hover}
              onClick={() => navigate("/")}
              onMouseEnter={() => setHover(1)}
              onMouseLeave={() => setHover(0)}
            >
              {hover === 1 ? (
                <InfoContainer>
                  <IconContainer>
                    <Zoom src="/images/zoom.png" />
                  </IconContainer>
                  <BoxInfo>학습공간 소개</BoxInfo>
                </InfoContainer>
              ) : null}
            </Box>
            <Box
              size="small"
              hover={hover}
              onClick={() => navigate("/")}
              onMouseEnter={() => setHover(2)}
              onMouseLeave={() => setHover(0)}
            >
              {hover === 2 ? (
                <InfoContainer>
                  <IconContainer>
                    <Zoom src="/images/zoom.png" />
                  </IconContainer>
                  <BoxInfo>학습기록 보기</BoxInfo>
                </InfoContainer>
              ) : null}
            </Box>
          </SmallContainer>
          <Box
            size="large"
            hover={hover}
            onClick={() => navigate("/")}
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(0)}
          >
            {hover === 3 ? (
              <InfoContainer>
                <IconContainer>
                  <Zoom src="/images/zoom.png" />
                </IconContainer>
                <BoxInfo>학습하기</BoxInfo>
              </InfoContainer>
            ) : null}
          </Box>
        </div>
      </ContentsContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translate(-50%);
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 24rem;
  margin: auto 0;
  margin-right: 3rem;
`;

const Title = styled.div`
  color: #152536;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 3.60056rem */

  margin-bottom: 0.5rem;
`;

const Detail = styled.div`
  color: #6c757d;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */

  margin-bottom: 2.81rem;
`;

const Btn = styled.button`
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
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.25038rem */
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: ${({ size }) => (size === "small" ? "22.4375rem" : "45.8125rem")};
  height: 13.75rem;
  background-color: #002d61;
  border-radius: 0.625rem;

  margin-top: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const InfoContainer = styled.div``;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 1rem;
`;

const Zoom = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const BoxInfo = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.25038rem */
  letter-spacing: -0.00938rem;
`;

export default Practice;
