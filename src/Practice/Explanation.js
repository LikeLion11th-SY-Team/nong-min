import styled from "styled-components";
import { SignUpEx } from "../Component/SignUp";

function Explanation(props) {
  return (
    <>
      {props.exercise === "signup" ? (
        <ComponentContainer opacity={props.opacity}>
          <SignUpEx />
        </ComponentContainer>
      ) : (
        <Img src={props.src} opacity={props.opacity} />
      )}
      <ExplainContainer none={props.none}>
        <CenterContainer>
          <TutorContainer opacity={props.opacity}>
            <BubbleContainer op="1">
              <InfoContainer op="1">
                {props.info1}
                <br /> {props.info2}
                <br /> {props.info3}
              </InfoContainer>
            </BubbleContainer>
            <Tutor op="1" />
          </TutorContainer>
          {props.none !== "1" ? (
            <TutorContainer>
              <BubbleContainer op="2">
                <InfoContainer op="2">
                  {props.info4}
                  <br /> {props.info5}
                  <br /> {props.info6}
                </InfoContainer>
              </BubbleContainer>
              <Tutor op="2" />
            </TutorContainer>
          ) : null}
        </CenterContainer>
      </ExplainContainer>
    </>
  );
}

const Img = styled.img`
  width: 48rem;
  height: 30rem;

  position: absolute;

  top: 10%;
  left: 55%;
  transform: translate(-50%);
  opacity: ${({ opacity }) => (opacity === "1" ? "0.4" : "1")};
`;

const ComponentContainer = styled.div`
  width: 48rem;
  height: 30rem;

  position: absolute;

  top: 10%;
  left: 55%;
  transform: translate(-50%);
  opacity: ${({ opacity }) => (opacity === "1" ? "0.4" : "1")};
  overflow: auto;

  display: flex;
`;

const FocusImg = styled.div`
  width: 12.5rem;
  height: 12.5rem;

  border-radius: 12.5rem;
  background: url("/images/home_view.png"),
    lightgray -1157.416px 1.649px / 676.923% 440% no-repeat;
  background-position: 90% 0;

  position: absolute;

  top: 3%;
  right: 10rem;
`;

const ExplainContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;

  width: ${({ none }) => (none === "1" ? "auto" : "100%")};
`;

const BubbleContainer = styled.div`
  width: ${({ op }) => (op === "1" ? " 22rem" : "24rem")};
  height: ${({ op }) => (op === "1" ? " 12rem" : "15.5rem")};

  background-image: ${({ op }) =>
    op === "1" ? " url(/images/bubble.png)" : "url(/images/bubble2.png)"};
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  color: ${({ op }) => (op === "1" ? " #fff" : "#002d61")};
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: ${({ op }) => (op === "1" ? " 400" : "600")};
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  margin-bottom: ${({ op }) => (op === "1" ? " 2.3rem" : "4rem")};
`;

const Tutor = styled.div`
  width: 15rem;
  height: 30.40406rem;

  background-image: ${({ op }) =>
    op === "1" ? " url(/images/tutor.png)" : "url(/images/tutor2.png)"};
  background-repeat: no-repeat;

  margin-left: ${({ op }) => (op === "1" ? " 0" : "13rem")};
`;

const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const TutorContainer = styled.div`
  display: ${({ none }) => (none === "1" ? "none" : "block")};
  opacity: ${({ opacity }) => (opacity === "1" ? "0.4" : "1")};
`;

export default Explanation;
