import styled from "styled-components";

function Log() {
  return (
    <Container>
      <ItemsContainer>
        <StepContainer step="0">
          <Step>
            <Selected />
            {/* <Icon>
              <i class="fas fa-star"></i>
            </Icon> */}
          </Step>
          <Info>(0단계) 쉽게 찾아오기</Info>
        </StepContainer>

        <StepContainer step="1">
          <Step>
            <Icon>
              <i class="fas fa-sign-in-alt"></i>
            </Icon>
          </Step>
          <Info>(1단계) 회원가입</Info>
        </StepContainer>

        <StepContainer step="2">
          <Step>
            <Icon>
              <i class="fas fa-user-alt"></i>
            </Icon>
          </Step>
          <Info>(2단계) 로그인</Info>
        </StepContainer>

        <StepContainer step="3">
          <Step>
            <Icon>
              <i class="fas fa-user-friends"></i>
            </Icon>
          </Step>
          <Info>(3단계) 커뮤니티 둘러보기</Info>
        </StepContainer>

        <StepContainer step="4">
          <Step>
            <Icon>
              <i class="fas fa-edit"></i>
            </Icon>
          </Step>
          <Info>(4단계) 글쓰기</Info>
        </StepContainer>

        <StepContainer step="5">
          <Info>(5단계) 소통하기</Info>
          <Step>
            <Icon>
              <i class="fas fa-heart"></i>
            </Icon>
          </Step>
        </StepContainer>

        <StepContainer step="6">
          <Info>(6단계) 마이페이지 관리</Info>
          <Step>
            <Icon>
              <i class="fas fa-cog"></i>{" "}
            </Icon>
          </Step>
        </StepContainer>
      </ItemsContainer>
      <BtnContainer>
        <Btn>다음 단계로</Btn>
      </BtnContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #002d61;
`;

const ItemsContainer = styled.div`
  height: 87%;
  width: 80%;

  margin: 0 auto;
  padding-top: 2rem;
`;

const StepContainer = styled.div`
  display: flex;

  margin-left: ${({ step }) =>
    step === "0" || step === "4"
      ? "50%"
      : step === "1" || step === "3"
      ? "30%"
      : step === "2"
      ? "10%"
      : "auto"};

  margin-right: ${({ step }) =>
    step === "5" ? "10%" : step === "6" ? "30%" : "auto"};

  justify-content: ${({ step }) =>
    step === "5" || step === "6" ? "right" : "auto"};
`;

const Step = styled.div`
  width: 12.5rem;
  height: 8rem;

  color: #002d61;
  display: flex;
  justify-content: center;

  background-image: url(/images/step.png);
  background-repeat: no-repeat;
  background-position: bottom;
`;

const Icon = styled.div`
  width: 2.3125rem;
  height: 2.3125rem;
  font-size: 2rem;
  font-weight: 400;

  margin-top: 2.5rem;
`;

const Selected = styled.div`
  width: 5rem;
  height: 5.07931rem;

  background-image: url(/images/selected.png);

  margin-bottom: 2rem;
`;

const Info = styled.div`
  color: #fff;
  font-size: 1.6875rem;
  font-weight: 400;

  display: flex;
  align-items: center;

  padding-left: 2rem;
  padding-right: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: right;

  margin-right: 4rem;
`;

const Btn = styled.button`
  width: 10rem;
  height: 3.3125rem;

  border-radius: 9.5rem;
  background: #fff;
  box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.3) inset,
    3px 2px 10px 0px rgba(255, 255, 255, 0.45) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.25);

  color: #002d61;
  text-align: center;
  font-size: 1.5625rem;
  font-weight: 600;
`;

export default Log;
