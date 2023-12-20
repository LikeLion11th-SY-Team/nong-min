import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  const navigateToPractice = () => {
    navigate("/practice/exercise?step=0");
  };
  return (
    <PageContainer>
      <BkImage />
      <ItemsContainer>
        <SubTitle>학습공간 소개</SubTitle>
        <Title>
          <TitleHighlight>한걸음씩 </TitleHighlight>만의 웹사이트 대비 학습공간
        </Title>
        <Hr />

        <Info>
          한걸음씩은 인터넷 사용법이 익숙하지 않은 분들을 대상으로 제작한
          <InfoHighlight> 웹사이트 학습 공간</InfoHighlight>을 제공합니다.{" "}
          <br />
          최근 <InfoHighlight>디지털 격차</InfoHighlight>가 점점 심해지고,
          대부분의 사이트들이 한글을 배제한 채 작동하기 어려운 UI로 <br />
          혼란을 주고 있습니다. <br />
          한걸음씩은 이런 문제를 조금이나마 해소해보고자 인터넷을 처음
          이용해보는 사용자라도 쉽게 이용할 수 있는 그런 웹사이트를 만들고자
          했습니다.
        </Info>

        <BlockContainer>
          <Block>
            <StepContainer>
              <NumberContainer>
                <Circle>1</Circle>
                <BlockTitle>단계별 학습</BlockTitle>
              </NumberContainer>
              <IconContainer>
                <i class="fas fa-signal"></i>
              </IconContainer>
            </StepContainer>
            <BlockInfo>북마크 추가부터 계정 관리까지!</BlockInfo>
          </Block>

          <Block>
            <StepContainer>
              <NumberContainer>
                <Circle>2</Circle>
                <BlockTitle>복습</BlockTitle>
              </NumberContainer>
              <IconContainer>
                <i class="fas fa-undo"></i>
              </IconContainer>
            </StepContainer>
            <BlockInfo>원하는 단계만 골라 복습 가능!</BlockInfo>
          </Block>

          <Block>
            <StepContainer>
              <NumberContainer>
                <Circle>3</Circle>
                <BlockTitle>성취감</BlockTitle>
              </NumberContainer>
              <IconContainer>
                <i class="far fa-laugh-beam"></i>
              </IconContainer>
            </StepContainer>
            <BlockInfo>
              점점 어려워지는 난이도, <br />
              게임과 같은 성취감!
            </BlockInfo>
          </Block>
        </BlockContainer>

        <GuideContainer>
          <GuideTitle>학습하기 활용 방법</GuideTitle>

          <Guide>
            1. ‘학습하기’ 에서 0단계부터 6단계까지 학습이 가능합니다. 왼쪽
            카테고리를 통해 원하는 단계를 선택할 수 <br />
            있습니다.
          </Guide>
          <Guide>
            2. 캐릭터의 친절한 설명을 듣고, 예시로 나오는 화면을 먼저 봅니다.
            그다음, ‘연습해보기’를 눌러 예시 화면을 <br />
            따라 학습해볼 수 있습니다.
          </Guide>
          <Guide>
            3. ‘학습기록 보기’ 에서 단계 진행 상황을 볼 수 있습니다. 복습을
            원하는 단계를 클릭하면 해당 단계부터 <br />
            복습이 가능합니다.
          </Guide>
        </GuideContainer>

        <BtnContainer>
          <PracticeBtn onClick={() => navigateToPractice()}>
            학습하러 가기
          </PracticeBtn>
        </BtnContainer>
      </ItemsContainer>
    </PageContainer>
  );
}

export default AboutUs;

const PageContainer = styled.div`
  height: 90rem;
  margin-bottom: 4.43rem;

  position: relative;
`;

const BkImage = styled.div`
  background: url(/images/background.png);
  height: 20rem;
  margin: 0;

  background-repeat: no-repeat;
  background-position: center 45%;
  background-size: cover;
`;

const ItemsContainer = styled.div`
  //display: flex;
  margin: 0 auto;

  position: absolute;
  top: 15.16rem;

  left: 50%;
  transform: translate(-50%);

  width: 75.4375rem;
  height: 75rem;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  justify-content: center;
`;

const SubTitle = styled.div`
  display: flex;
  width: 16.4375rem;
  height: 2.0625rem;
  flex-direction: column;
  justify-content: center;

  color: #152536;

  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0075rem;

  margin-top: 4.13rem;
  margin: 4.13rem auto 1.19rem auto;
`;

const Title = styled.div`
  width: 38.125rem;
  height: 2.0625rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #152536;

  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.012rem;

  margin: 0 auto;
`;

const TitleHighlight = styled.span`
  color: #002d61;
`;

const Hr = styled.div`
  width: 18.75rem;
  height: 0.0625rem;
  background: rgba(130, 130, 130, 0.7);
  margin: 2.37rem auto 4rem auto;
`;

const Info = styled.div`
  width: 62rem;
  height: 7.375rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #828282;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00825rem;

  margin: 0 auto;
`;

const InfoHighlight = styled.span`
  color: #152536;
  font-weight: 600;
`;

const BlockContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem auto 3.5rem auto;
`;

const Block = styled.div`
  width: 19.25rem;
  height: 13rem;
  flex-shrink: 0;

  border: 1px solid #000;
  border-radius: 0.75rem;

  margin: auto 1.05rem;
`;

const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #002d61;
  color: #fff;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: -0.00825rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const BlockTitle = styled.div`
  display: flex;
  width: 8.125rem;
  height: 3.25rem;
  flex-direction: column;
  justify-content: center;

  color: #152536;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.009rem;
`;

const BlockInfo = styled.div`
  display: flex;
  width: 17.375rem;
  height: 3.25rem;
  flex-direction: column;
  justify-content: center;

  color: #828282;
  font-size: 1.1875rem;
  font-weight: 500;
  letter-spacing: -0.00713rem;

  margin-left: 1.7rem;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

const NumberContainer = styled.div``;

const IconContainer = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  color: #002d61;
  font-size: 3.5rem;
`;

const GuideContainer = styled.div`
  width: 62rem;
  height: 18.6875rem;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const GuideTitle = styled.div`
  color: #152536;
  font-size: 1.5625rem;
  font-weight: 600;
  letter-spacing: -0.00938rem;

  margin-bottom: 1.5rem;
`;

const Guide = styled.div`
  color: #152536;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: -0.00825rem;
  margin-bottom: 0.75rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const PracticeBtn = styled.button`
  width: 19.625rem;
  height: 3.8125rem;

  border-radius: 0.75rem;
  background: #002d61;
  box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.3) inset,
    3px 2px 10px 0px rgba(255, 255, 255, 0.45) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  text-align: center;
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: -0.01125rem;
`;
