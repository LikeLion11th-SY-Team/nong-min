import styled from "styled-components";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

function Log() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");
  const stepNum = Number(step) + 1;

  const navigate = useNavigate();

  return (
    <Container>
      <ItemsContainer>
        <StepContainer step="0">
          <Step>
            {step === "0" ? (
              <Selected />
            ) : (
              <Icon>
                <i class="fas fa-star"></i>
              </Icon>
            )}
          </Step>
          <Info>(0단계) 쉽게 찾아오기</Info>
        </StepContainer>

        <StepContainer step="1">
          <Step>
            {step === "1" ? (
              <Selected />
            ) : (
              <Icon>
                <i class="fas fa-sign-in-alt"></i>
              </Icon>
            )}
          </Step>
          <Info>(1단계) 회원가입</Info>
        </StepContainer>

        <StepContainer step="2">
          <Step>
            {step === "2" ? (
              <Selected />
            ) : (
              <Icon>
                <i class="fas fa-user-alt"></i>
              </Icon>
            )}
          </Step>
          <Info>(2단계) 로그인</Info>
        </StepContainer>

        <StepContainer step="3">
          <Step>
            {step === "3" ? (
              <Selected />
            ) : (
              <Icon>
                <i class="fas fa-user-friends"></i>
              </Icon>
            )}
          </Step>
          <Info>(3단계) 커뮤니티 둘러보기</Info>
        </StepContainer>

        <StepContainer step="4">
          <Step>
            {step === "4" ? (
              <Selected />
            ) : (
              <Icon>
                <i class="fas fa-edit"></i>
              </Icon>
            )}
          </Step>
          <Info>(4단계) 글쓰기</Info>
        </StepContainer>

        <StepContainer step="5">
          <Info>(5단계) 소통하기</Info>
          <Step>
            {step === "5" ? (
              <Selected />
            ) : (
              <Icon>
                <i class="fas fa-heart"></i>
              </Icon>
            )}
          </Step>
        </StepContainer>

        <StepContainer step="6">
          <Info>(6단계) 마이페이지 관리</Info>
          <Step>
            {step === "6" ? (
              <Selected />
            ) : (
              <Icon>
                <i class="fas fa-cog"></i>{" "}
              </Icon>
            )}
          </Step>
        </StepContainer>
        <BtnContainer>
          <Btn onClick={() => navigate(`/practice/exercise?step=${stepNum}`)}>
            다음 단계로
          </Btn>
        </BtnContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #002d61;
`;

const ItemsContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StepContainer = styled.div`
  width: 100%;
  height: 13%;

  display: flex;

  /* padding-left: ${({ step }) =>
    step === "0" || step === "4"
      ? "50%"
      : step === "1" || step === "3"
      ? "30%"
      : step === "2"
      ? "10%"
      : "auto"};

  padding-right: ${({ step }) =>
    step === "5" ? "10%" : step === "6" ? "30%" : "auto"};

  justify-content: ${({ step }) =>
    step === "5" || step === "6" ? "right" : "auto"}; */
  justify-content: center;
`;

const Step = styled.div`
  width: 20%;
  height: 100%;

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
  height: 9%;
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
