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
          <Explanation
            info1="먼저, 상단의"
            info2="로그인 버튼을"
            info3="눌러주세요."
            src="/images/view_home.png"
            none="1"
          />
        ) : page === 1 ? (
          <Explanation
            info1="로그인 화면에서"
            info2="회원가입 버튼을"
            info3="눌러주세요."
            src="/images/view_login.png"
            none="1"
          />
        ) : page === 2 ? (
          <Explanation
            info1="아이디를 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            src="/images/view_signup.png"
            none="1"
          />
        ) : page === 3 ? (
          <Explanation
            info1="아이디를 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            info4="아이디는 최소 6자에서 최대"
            info5="20자까지 설정할 수 있습니다."
            info6="원하는 길이로 선택해주세요!"
            src="/images/view_signup.png"
            opacity="1"
          />
        ) : page === 4 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            src="/images/view_signup.png"
            none="1"
          />
        ) : page === 5 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            info4="비밀번호는 8~20자의 길이여야 하며,"
            info5="‘문자’와 ‘숫자’를 반드시 혼합해서"
            info6="사용해야 합니다."
            src="/images/view_signup.png"
            opacity="1"
          />
        ) : page === 6 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            info4="(예시)"
            info5="1004천사 / 121314ag / s영0808"
            src="/images/view_signup.png"
            opacity="1"
          />
        ) : page === 7 ? (
          <Explanation
            info1="사용할 닉네임을 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            src="/images/view_signup2.png"
            none="1"
          />
        ) : page === 8 ? (
          <Explanation
            info1="닉네임은 회원가입 후"
            info2="‘계정 관리’에서"
            info3="수정할 수 있습니다!"
            src="/images/view_signup2.png"
            none="1"
          />
        ) : page === 9 ? (
          <Explanation
            info1="닉네임, 전화번호,"
            info2="이메일을 모두 입력했다면"
            info3="‘가입하기’ 버튼을 눌러주세요!"
            src="/images/view_signup2.png"
            none="1"
          />
        ) : page === 10 ? (
          <Explanation
            info1="닉네임, 전화번호,"
            info2="이메일을 모두 입력했다면"
            info3="‘가입하기’ 버튼을 눌러주세요!"
            info4="'전화번호', '이메일'은"
            info5="필수 입력 항목은 아니지만,"
            info6="비밀번호 찾기 시 사용 가능합니다!"
            src="/images/view_signup2.png"
            opacity="1"
          />
        ) : page === 11 ? (
          <Explanation
            info1="아이디를 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            exercise="signup"
            none="1"
          />
        ) : page === 12 ? (
          <Explanation
            info1="비밀번호를 설정한 후,"
            info2="동일한 비밀번호를 한 번 더"
            info3="‘비밀번호 확인’란에 입력하세요."
            exercise="signup"
            none="1"
          />
        ) : page === 13 ? (
          <Explanation
            info1="사용할 닉네임을 입력한 후"
            info2="중복 확인 버튼을 눌러서"
            info3="사용 가능한지 확인하세요."
            exercise="signup"
            none="1"
          />
        ) : page === 14 ? (
          <Explanation
            info1="전화번호와 이메일을 입력한 뒤"
            info2="가입하기 버튼을 눌러"
            info3="회원가입을 완료하세요."
            exercise="signup"
            none="1"
          />
        ) : page === 15 ? (
          <Explanation
            info1="카카오 계정이 있는 경우,"
            info2="'카카오 로그인'을 통해서도"
            info3="회원가입이 가능합니다."
            src="/images/view_login.png"
            none="1"
          />
        ) : page === 16 ? (
          <Explanation
            info1="카카오 계정의 아이디와"
            info2="비밀번호를 입력하여"
            info3="카카오 로그인을 해주세요!"
            src="/images/view_login_kakao.png"
            none="1"
          />
        ) : page === 17 ? (
          <Explanation
            info1="필수 약관에 동의를 누르고,"
            info2="다음 단계로 넘어가면"
            info3="회원가입이 완료됩니다!"
            src="/images/view_login_kakao.png"
            none="1"
          />
        ) : (
          <Explanation
            info1="필수 약관에 동의를 누르고,"
            info2="다음 단계로 넘어가면"
            info3="회원가입이 완료됩니다!"
            src="/images/view_login_kakao.png"
            none="1"
            opacity="1"
          />
        )}
      </ContentsContainer>
      <NextBtn onClick={() => setPage((cur) => cur + 1)}>
        <i class="fas fa-forward"></i>
      </NextBtn>

      <NextStepBtn
        page={page === 18}
        onClick={() => navigate("/practice/log?step=1")}
      >
        다음 단계로
      </NextStepBtn>
      <NextStepBtn page={page === 10} onClick={() => setPage((cur) => cur + 1)}>
        연습해보기
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
