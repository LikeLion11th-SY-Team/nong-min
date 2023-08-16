import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as DropDown } from "../svg/dropDown.svg";
import { ReactComponent as DropUp } from "../svg/dropUp.svg";
import { useState } from "react";

function PracticeMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [step0, setStep0] = useState(true);
  const [step2, setStep2] = useState(true);
  const [step5, setStep5] = useState(true);
  const [step6, setStep6] = useState(true);

  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <Title>학습하기</Title>
        </TitleContainer>
        <MenuContainer>
          <hr />
          <MenuOption>
            <StepContainer onClick={() => setStep0(!step0)}>
              <Step>0단계&#41;</Step>
              <MenuTitle>쉽게 찾아오기</MenuTitle>
              <Icon>{step0 ? <DropUp /> : <DropDown />}</Icon>
            </StepContainer>
            <DropContainer drop={step0}>
              <Menu to={"/practice/exercise/step0"}>북마크 추가</Menu>
            </DropContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>1단계&#41;</Step>
              <MenuTitle>회원가입</MenuTitle>
            </StepContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer onClick={() => setStep2(!step2)}>
              <Step>2단계&#41;</Step>
              <MenuTitle>로그인</MenuTitle>
              <Icon>{step2 ? <DropUp /> : <DropDown />}</Icon>
            </StepContainer>
            <DropContainer drop={step2}>
              <Menu>일반 로그인</Menu>
              <Menu>카카오톡으로 로그인</Menu>
              <Menu>네이버로 로그인</Menu>
            </DropContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>3단계&#41;</Step>
              <MenuTitle>커뮤니티 둘러보기</MenuTitle>
            </StepContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>4단계&#41;</Step>
              <MenuTitle>글쓰기</MenuTitle>
            </StepContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer onClick={() => setStep5(!step5)}>
              <Step>5단계&#41;</Step>
              <MenuTitle>소통하기</MenuTitle>
              <Icon>{step5 ? <DropUp /> : <DropDown />}</Icon>
            </StepContainer>
            <DropContainer drop={step5}>
              <Menu>댓글달기</Menu>
              <Menu>'좋아요' 누르기</Menu>
            </DropContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer onClick={() => setStep6(!step6)}>
              <Step>6단계&#41;</Step>
              <MenuTitle>마이페이지 관리</MenuTitle>
              <Icon>{step6 ? <DropUp /> : <DropDown />}</Icon>
            </StepContainer>
            <DropContainer drop={step6}>
              <Menu>개인정보 수정</Menu>
              <Menu>비밀번호 변경</Menu>
              <Menu>작성글 / 댓글확인</Menu>
            </DropContainer>
          </MenuOption>
        </MenuContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 16rem;
  height: 46rem;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #152536;

  position: relative;
`;

const ContentContainer = styled.div`
  width: 13.2rem;
  margin: 1rem auto;
`;

const TitleContainer = styled.div`
  width: 7.1875rem;
  margin: 1.2rem;
`;

const StepContainer = styled.div`
  display: flex;
`;

const Step = styled.div`
  margin-right: 0.2rem;
`;

const Title = styled.div`
  color: #002d61;
  font-size: 1.75rem;
  font-weight: 700;
`;

const MenuContainer = styled.div``;

const DropContainer = styled.div`
  display: ${({ drop }) => (drop ? "block" : "none")};
`;

const MenuOption = styled.div`
  font-size: 1.0625rem;
  font-weight: 400;

  margin-left: 0.5rem;
`;

const MenuTitle = styled.div`
  color: #152536;
  margin-bottom: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled(Link)`
  color: rgba(21, 37, 54, 0.7);
  text-decoration: none;

  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: 3.22rem;

  &:hover {
    cursor: pointer;
  }
  /* 
  color: ${({ menu }) => (menu ? "#002D61" : "#152536")};
  font-weight: ${({ menu }) => (menu ? "600" : "500")}; */
`;

const Icon = styled.div`
  margin-top: 0.1rem;
  margin-left: 0.5rem;
`;

export default PracticeMenu;
