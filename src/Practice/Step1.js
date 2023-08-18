import styled from "styled-components";
import { ReactComponent as Tutor } from "../svg/tutor.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explanation from "./Explanation";

function Step1() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <ContentsContainer>
        {page === 0 ? (
          <>
            <InfoContainer>
              <BubbleContainer>
                <Bubble>
                  <Info>
                    카카오 계정이
                    <Highlight>없다면</Highlight>
                    이쪽을 선택해주세요!
                  </Info>
                </Bubble>
                <Icon op="user" />
              </BubbleContainer>
              <BubbleContainer>
                <Bubble>
                  <Info>
                    카카오 계정이
                    <Highlight>있다면</Highlight>
                    이쪽을 선택해주세요!
                  </Info>
                </Bubble>
                <Icon op="kakao" />
              </BubbleContainer>
            </InfoContainer>
            <CharacterContainer>
              <Character />
            </CharacterContainer>
          </>
        ) : page === 1 ? (
          <Explanation
            info1="먼저, 상단의"
            info2="로그인 버튼을"
            info3="눌러주세요."
            src="/images/home_view.png"
            none="1"
          />
        ) : page === 2 ? (
          <Explanation
            info1="로그인 화면에서"
            info2="회원가입 버튼을"
            info3="눌러주세요."
            src="/images/home_view.png"
            none="1"
          />
        ) : page === 3 ? (
          <Explanation
            info1="아이디를 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            src="/images/home_view.png"
            none="1"
          />
        ) : page === 4 ? (
          <Explanation
            info1="아이디를 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            info4="아이디는 최소 6자에서 최대"
            info5="20자까지 설정할 수 있습니다."
            info6="원하는 길이로 선택해주세요!"
            src="/images/home_view.png"
            opacity="1"
          />
        ) : page === 5 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            src="/images/home_view.png"
            none="1"
          />
        ) : page === 6 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            info4="비밀번호는 8~20자의 길이여야 하며,"
            info5="‘문자’와 ‘숫자’를 반드시 혼합해서"
            info6="사용해야 합니다."
            src="/images/home_view.png"
            opacity="1"
          />
        ) : page === 7 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            info4="(예시)"
            info5="1004천사 / 121314ag / s영0808"
            src="/images/home_view.png"
            opacity="1"
          />
        ) : page === 8 ? (
          <Explanation
            info1="사용할 닉네임을 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            src="/images/home_view.png"
            none="1"
          />
        ) : page === 9 ? (
          <Explanation
            info1="닉네임은 회원가입 후"
            info2="‘계정 관리’에서"
            info3="수정할 수 있습니다!"
            src="/images/home_view.png"
            none="1"
          />
        ) : page === 10 ? (
          <Explanation
            info1="닉네임, 전화번호,"
            info2="이메일을 모두 입력했다면"
            info3="‘가입하기’ 버튼을 눌러주세요!"
            src="/images/home_view.png"
            none="1"
          />
        ) : page === 11 ? (
          <Explanation
            info1="닉네임, 전화번호,"
            info2="이메일을 모두 입력했다면"
            info3="‘가입하기’ 버튼을 눌러주세요!"
            info4="'전화번호', '이메일'은"
            info5="필수 입력 항목은 아니지만,"
            info6="비밀번호 찾기 시 사용 가능합니다!"
            src="/images/home_view.png"
            opacity="1"
          />
        ) : page === 12 ? (
          <Explanation
            info1="아이디를 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            exercise="signup"
            none="1"
          />
        ) : page === 13 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            exercise="signup"
            none="1"
          />
        ) : page === 14 ? (
          <Explanation
            info1="사용할 닉네임을 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            exercise="signup"
            none="1"
          />
        ) : (
          <Explanation
            info1="사용할 닉네임을 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            exercise="signup"
            none="1"
            opacity="1"
          />
        )}
      </ContentsContainer>
      <NextBtn onClick={() => setPage((cur) => cur + 1)}>
        <i class="fas fa-forward"></i>
      </NextBtn>

      <NextStepBtn
        page={page === 15}
        onClick={() => navigate("/practice/log?step=1")}
      >
        다음 단계로
      </NextStepBtn>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const ContentsContainer = styled.div`
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 35%;

  display: flex;
  justify-content: space-around;
`;

const BubbleContainer = styled.div`
  height: 100%;
  width: 25%;
`;

const Bubble = styled.div`
  border-radius: 50%;
  background: #002d61;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 100%;

  margin: 0 auto;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 10%;
`;

const Icon = styled.div`
  height: 5rem;
  width: 5rem;

  background-image: ${({ op }) =>
    op === "user"
      ? "url(/images/user_circle.jpg)"
      : "url(/images/kakao_icon.jpg)"};
  background-repeat: no-repeat;
  background-size: cover;

  margin: 0 auto;
`;

const Info = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: nowrap;
`;

const Highlight = styled.div`
  color: #fbff45;
`;

const CharacterContainer = styled.div`
  height: 65%;
  width: 100%;

  margin: 0 auto;
`;

const Character = styled.div`
  height: 100%;
  width: 100%;

  background-image: url("/images/character.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const NextBtn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  font-size: 3rem;
  z-index: 2;
`;

const NextStepBtn = styled.button`
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
  font-weight: 600;

  position: absolute;
  bottom: 0;
  right: 0;

  display: ${({ page }) => (page ? "block" : "none")};
  z-index: 3;
`;

export default Step1;
