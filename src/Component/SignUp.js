import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { styled } from "styled-components";

function SignUp() {
  const [registerData, setRegisterData] = useState({
    id: "",
    pw: "",
    confirmPw: "",
    nickname: "",
    phoneNumber: "",
    emailId: "",
    platformAddress: "",
  });

  const { id, pw, confirmPw, nickname, phoneNumber, emailId, platformAddress } = registerData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [checkId, setCheckId] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);
  const onCheckId = async (event) => {
    event.preventDefault();
    // 아이디 중복 확인 로직

    try{
      const res = await axios.post(`${process.env.REACT_APP_BaseUrl}/auth/api/check/id/`, { id });
      
      if(res.status === 200){
        setCheckId(true);
        alert("사용 가능한 아이디입니다.");
      } else {
        alert("중복된 아이디입니다. 다른 닉네임을 사용해주세요.");
      }
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const onCheckNickname = async (event) => {
    event.preventDefault();
    // 닉네임 중복 확인 로직
    // 중복 확인 로직은 데이터만 넘기고 백에서 성공시 200 넘겨주기로 함
    // 성공시 set 통해서 true값 저장 후 submit함수에서 반영
    
    try{
      const res = await axios.post(`${process.env.REACT_APP_BaseUrl}/auth/api/check/nickname/`, { nickname });
      
      if(res.status === 200){
        setCheckNickname(true);
        alert("사용 가능한 닉네임입니다.");
      } else {
        alert("중복된 닉네임입니다. 다른 닉네임을 사용해주세요.");
      }
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const navigation = useNavigate();
  const handleSubmit = async (event) => {
    // 폼 데이터를 처리하는 로직
    event.preventDefault();

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/; // 비밀번호 정규식
    const fullEmail = `${emailId}@${platformAddress}`;

    // 유효성 검사
    if (id.length < 6 || id.length > 20) {
      return alert("아이디는 6-20자로 입력해주세요.");
    }
    if (!passwordPattern.test(pw)) {
      return alert("비밀번호는 문자와 숫자를 포함하여 8-20자로 입력해주세요.");
    }
    if (pw !== confirmPw) {
      return alert("비밀번호 확인이 올바르지 않습니다.");
    }

    if (!id || !pw || !confirmPw || !nickname || !phoneNumber || !emailId || !platformAddress ) {
      alert("필수정보(*)를 입력해주세요.");
      return;
    }
    if (!checkId) {
      alert("아이디 중복확인을 해주세요.");
    }
    if (!checkNickname) {
      alert("닉네임 중복확인을 해주세요.");
    }

    try{
      const res = await axios.post(`${process.env.REACT_APP_BaseUrl}/auth/signup/`, {
        id,
        pw,
        nickname,
        phoneNumber,
        fullEmail: fullEmail,
      });

      if (res.status === 200) {
        alert("회원가입이 완료되었습니다!");
        navigation("/home");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <SignUpContainer>
      <MenuText>회원가입 정보 입력</MenuText>
      <SignUpForm onSubmit={handleSubmit}>
        <Text>
          아이디<Star>*</Star>
        </Text>
        <DupContainer>
          <DupInput
            name="id"
            value={id}
            onChange={onChange}
            placeholder="아이디 입력(6-20자)"
          />
          <DupBtn onClick={onCheckId}>중복 확인</DupBtn>
        </DupContainer>

        <Text>
          비밀번호<Star>*</Star>
        </Text>
        <Input
          name="pw"
          value={pw}
          onChange={onChange}
          type="password"
          placeholder="비밀번호 입력(문자, 숫자 포함 8-20자)"
        ></Input>
        <Text>
          비밀번호 확인<Star>*</Star>
        </Text>
        <Input
          name="confirmPw"
          value={confirmPw}
          onChange={onChange}
          type="password"
          placeholder="비밀번호 재입력"
        />

        <Text>
          닉네임<Star>*</Star>
        </Text>
        <DupContainer>
          <DupInput
            name="nickname"
            value={nickname}
            onChange={onChange}
            placeholder="닉네임 입력"
          />
          <DupBtn onClick={onCheckNickname}>중복 확인</DupBtn>
        </DupContainer>

        <Text>전화번호</Text>
        <Input
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          placeholder="전화번호 입력('-'제외 11자리"
        />

        <Text>
          이메일<Star>*</Star>
        </Text>
        <EmailContainer>
          <EmailInput
            name="emailId"
            value={emailId}
            onChange={onChange}
            placeholder="이메일 입력"
          />
          <At> @ </At>
          <EmailInput
            name="platformAddress"
            value={platformAddress}
            onChange={onChange}
            placeholder="(직접 입력)"
          />
        </EmailContainer>
        <EmailNotice>
          이메일 주소는 아이디/비밀번호 찾기에 꼭 필요한 정보이니 입력해주시면
          도움이 됩니다.
        </EmailNotice>
        <SubmitBtn type="submit">가입하기</SubmitBtn>
      </SignUpForm>
    </SignUpContainer>
  );
}

function SignUpEx() {
  return (
    <SignUpContainer>
      <MenuText>회원가입 정보 입력</MenuText>
      <SignUpForm>
        <Text>
          아이디<Star>*</Star>
        </Text>
        <DupContainer>
          <DupInput placeholder="아이디 입력(6-20자)" />
          <DupBtn
            onClick={() => {
              alert("아이디가 중복되지 않습니다.");
            }}
          >
            중복 확인
          </DupBtn>
        </DupContainer>

        <Text>
          비밀번호<Star>*</Star>
        </Text>
        <Input
          type="password"
          placeholder="비밀번호 입력(문자, 숫자 포함 8-20자"
        ></Input>
        <Text>
          비밀번호 확인<Star>*</Star>
        </Text>
        <Input type="password" placeholder="비밀번호 재입력" />

        <Text>
          닉네임<Star>*</Star>
        </Text>
        <DupContainer>
          <DupInput placeholder="닉네임 입력" />
          <DupBtn
            onClick={() => {
              alert("닉네임이 중복되지 않습니다.");
            }}
          >
            중복 확인
          </DupBtn>
        </DupContainer>

        <Text>전화번호</Text>
        <Input placeholder="전화번호 입력('-'제외 11자리" />

        <Text>
          이메일<Star>*</Star>
        </Text>
        <EmailContainer>
          <EmailInput placeholder="이메일 입력" />
          <At> @ </At>
          <EmailInput placeholder="(직접 입력)" />
        </EmailContainer>
        <EmailNotice>
          이메일 주소는 아이디/비밀번호 찾기에 꼭 필요한 정보이니 입력해주시면
          도움이 됩니다.
        </EmailNotice>
      </SignUpForm>
    </SignUpContainer>
  );
}

export { SignUp, SignUpEx };

const SignUpContainer = styled.div`
  position: absolute;
  top: 8rem;
  display: flex;
  flex-direction: column;
`;
const MenuText = styled.p`
  color: #152536;
  text-align: left;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01125rem;
`;
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const DupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38.9375rem;
  height: 3.8125rem;
  border-radius: 0.75rem;
  border: 0.7px solid #828282;
  background: #fff;
`;
const DupInput = styled.input`
  border: none;
  margin: auto 1rem;
  color: #828282;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00863rem;
`;
const DupBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 7.125rem;
  height: 2.625rem;
  margin: auto 1rem;
  border-radius: 0.75rem;
  background: #002d61;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;
const Input = styled.input`
  width: 37.9375rem;
  height: 3.8125rem;
  border-radius: 0.75rem;
  border: 0.7px solid #828282;
  background: #fff;
  padding-left: 1rem;
  color: #828282;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00863rem;
`;
const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EmailInput = styled.input`
  width: 16.5rem;
  height: 3.8125rem;
  border-radius: 0.75rem;
  border: 0.7px solid #828282;
  background: #fff;
  padding-left: 1rem;
  color: #828282;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00863rem;
`;
const Text = styled.p`
  color: #152536;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00938rem;
`;
const Star = styled.span`
  color: #eb0000;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00938rem;
`;
const At = styled.div`
  width: 3.875rem;
  height: 2.0625rem;
  color: #152536;
  text-align: center;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00863rem;
`;
const EmailNotice = styled.div`
  text-align: center;
  margin: 1rem 0 2rem 0;
  color: #828282;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00638rem;
`;
const SubmitBtn = styled.button`
  width: 16.1875rem;
  height: 4rem;
  margin: 0 auto;
  border-radius: 0.9375rem;
  background: #002d61;
  color: #fff;
  text-align: center;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01125rem;
`;
