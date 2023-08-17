import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as DropDown } from "../svg/dropDown.svg";
import { ReactComponent as DropUp } from "../svg/dropUp.svg";
import { useState } from "react";

function PracticeMenu(props) {
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
            <StepContainer>
              <Step>0단계&#41;</Step>
              <MenuTitle to={"/practice/exercise?step=0"}>
                쉽게 찾아오기
              </MenuTitle>
              {/*               <Icon>{step0 ? <DropUp /> : <DropDown />}</Icon>
               */}{" "}
            </StepContainer>
            <DropContainer drop={step0}>
              <Menu to={"/practice/exercise?step=0"} cur={props.step === "0"}>
                북마크 추가
              </Menu>
            </DropContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>1단계&#41;</Step>
              <MenuTitle
                to={"/practice/exercise?step=1"}
                cur={props.step === "1"}
              >
                회원가입
              </MenuTitle>
            </StepContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>2단계&#41;</Step>
              <MenuTitle to={"/practice/exercise?step=2"}>로그인</MenuTitle>
              {/*               <Icon>{step2 ? <DropUp /> : <DropDown />}</Icon>
               */}{" "}
            </StepContainer>
            <DropContainer drop={step2}>
              <Menu to={"/practice/exercise?step=2"} cur={props.step === "2"}>
                일반 로그인
              </Menu>
              <Menu
                to={"/practice/exercise?step=2.3"}
                cur={props.step === "2.3"}
              >
                카카오톡으로 로그인
              </Menu>
              <Menu
                to={"/practice/exercise?step=2.6"}
                cur={props.step === "2.6"}
              >
                네이버로 로그인
              </Menu>
            </DropContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>3단계&#41;</Step>
              <MenuTitle
                to={"/practice/exercise?step=3"}
                cur={props.step === "3"}
              >
                커뮤니티 둘러보기
              </MenuTitle>
            </StepContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>4단계&#41;</Step>
              <MenuTitle
                to={"/practice/exercise?step=4"}
                cur={props.step === "4"}
              >
                글쓰기
              </MenuTitle>
            </StepContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>5단계&#41;</Step>
              <MenuTitle to={"/practice/exercise?step=5"}>소통하기</MenuTitle>
              {/*               <Icon>{step5 ? <DropUp /> : <DropDown />}</Icon>
               */}{" "}
            </StepContainer>
            <DropContainer drop={step5}>
              <Menu to={"/practice/exercise?step=5"} cur={props.step === "5"}>
                댓글달기
              </Menu>
              <Menu
                to={"/practice/exercise?step=5.5"}
                cur={props.step === "5.5"}
              >
                '좋아요' 누르기
              </Menu>
            </DropContainer>
          </MenuOption>

          <hr />
          <MenuOption>
            <StepContainer>
              <Step>6단계&#41;</Step>
              <MenuTitle to={"/practice/exercise?step=6"}>
                마이페이지 관리
              </MenuTitle>
              {/*               <Icon>{step6 ? <DropUp /> : <DropDown />}</Icon>
               */}{" "}
            </StepContainer>
            <DropContainer drop={step6}>
              <Menu to={"/practice/exercise?step=6"} cur={props.step === "6"}>
                개인정보 수정
              </Menu>
              <Menu
                to={"/practice/exercise?step=6.3"}
                cur={props.step === "6.3"}
              >
                비밀번호 변경
              </Menu>
              <Menu
                to={"/practice/exercise?step=6.6"}
                cur={props.step === "6.6"}
              >
                작성글 / 댓글확인
              </Menu>
            </DropContainer>
          </MenuOption>
        </MenuContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 16rem;
  height: 48rem;

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

const MenuTitle = styled(Link)`
  color: ${({ cur }) => (cur ? " #002D61" : "rgba(21, 37, 54, 0.7)")};
  font-weight: ${({ cur }) => (cur ? "600" : "400")};

  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled(Link)`
  text-decoration: none;

  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: 3.22rem;

  &:hover {
    cursor: pointer;
  }

  color: ${({ cur }) => (cur ? " #002D61" : "rgba(21, 37, 54, 0.7)")};
  font-weight: ${({ cur }) => (cur ? "600" : "400")};
`;

const Icon = styled.div`
  margin-top: 0.1rem;
  margin-left: 0.5rem;
`;

export default PracticeMenu;
