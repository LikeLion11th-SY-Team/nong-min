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
            <BubbleContainer op="1" none={props.none}>
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
  width: 70%;

  position: absolute;

  top: 10%;
  left: 55%;
  transform: translate(-50%);
  opacity: ${({ opacity }) => (opacity === "1" ? "0.4" : "1")};
`;

const ComponentContainer = styled.div`
  width: 50%;
  height: 70%;

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

  width: ${({ none }) => (none === "1" ? "35%" : "100%")};
  height: 100%;
`;

const BubbleContainer = styled.div`
  width: ${({ none }) => (none === "1" ? "auto" : "70%")};
  height: ${({ op }) => (op === "1" ? "30%" : "40%")};

  background-image: ${({ op }) =>
    op === "1" ? " url(/images/bubble.png)" : "url(/images/bubble2.png)"};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

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
  height: 60%;

  background-image: ${({ op }) =>
    op === "1" ? " url(/images/tutor.png)" : "url(/images/tutor2.png)"};
  background-repeat: no-repeat;
  background-size: contain;

  margin-left: ${({ op }) => (op === "1" ? " 0" : "13rem")};
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  height: 100%;
`;

const TutorContainer = styled.div`
  display: ${({ none }) => (none === "1" ? "none" : "block")};
  opacity: ${({ opacity }) => (opacity === "1" ? "0.4" : "1")};

  height: 100%;
  width: 100%;
`;

export default Explanation;
