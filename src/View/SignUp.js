import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { styled } from "styled-components";

function SignUp(){
  const [registerData, setRegisterData] = useState({
    id: "",
    pw: "",
    confirmPw: "",
    nickname: "",
    name: "",
    phoneNumber: "",
    emailId: "",
    platformAddress: "",
    crop: "",
  });
  const { id, pw, confirmPw, nickname, name, phoneNumber, emailId, platformAddress, crop } = registerData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  const [checkId, setCheckId] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);
  const onCheckId = (event) => {
    event.preventDefault();
    // 아이디 중복 확인 로직
    try{
      const res = await axios.post()
    }
  }

  const onCheckNickname = (event) => {
    event.preventDefault();
    // 닉네임 중복 확인 로직
    
  }

  const navigation = useNavigate();
  const handleSubmit = (event) => { // 폼 데이터를 처리하는 로직
    event.preventDefault();

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/; // 비밀번호 정규식
    const fullEmail = `${emailId}@${platformAddress}`;

    if(id.length < 6 || id.length > 20){
      return alert('아이디는 6-20자로 입력해주세요.')
    }
    if (!passwordPattern.test(pw)) {
      return alert("비밀번호는 문자와 숫자를 포함하여 8-20자로 입력해주세요.");
    }
    if(pw !== confirmPw){
      return alert('비밀번호 확인이 올바르지 않습니다.')
    }
    if (!id || !pw || !confirmPw || !nickname || !phoneNumber || !emailId || !platformAddress || !crop) {
      alert("필수정보(*)를 입력해주세요.");
      return;
    }

    

    alert("회원가입이 완료되었습니다!");
    navigation('/home');
  }

  return(
    <SignUpContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              name="id"
              value={id}
              onChange={onChange}
              placeholder="아이디 입력(6-20자)"
            />
            <button onClick={onCheckId}>중복 확인</button>
          </div>
          <input 
            name="pw"
            value={pw}
            onChange={onChange}
            type="password"
            placeholder="비밀번호 입력(문자, 숫자 포함 8-20자"
          ></input>
          <input 
            name="confirmPw"
            value={confirmPw}
            onChange={onChange}
            type="password"
            placeholder="비밀번호 재입력"
          />
          <div>
            <input 
              name="nickname"
              value={nickname}
              onChange={onChange}
              placeholder="닉네임 입력"
            />
            <button onClick={onCheckNickname}>중복 확인</button>
          </div>
          <input 
            name="name"
            value={name}
            onChange={onChange}
            placeholder="이름 입력"
          />
          <input 
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            placeholder="전화번호 입력('-'제외 11자리"
          />
          <div>
            <input
              name="emailId"
              value={emailId}
              onChange={onChange}
              placeholder="이메일 입력"
            />
            <p> @ </p>
            <input 
              name="platformAddress"
              value={platformAddress}
              onChange={onChange}
              placeholder="(직접 입력)"
            />
          </div>
          <select 
            name="crop"
            value={crop}
            onChange={onChange}
          >
            <option value={""}>주 농작물을 선택해 주세요</option>
            <option value={"grain"}>곡물(벼과 식물, 콩과 식물 등)</option>
            <option value={"fruit"}>과일</option>
            <option value={"vegetable"}>채소</option>
            <option value={"fish"}>수산물</option>
            <option value={"etc"}>원예 및 기타 식물</option>
          </select>
          <button type="submit">가입하기</button>
        </form>
    </SignUpContainer>
  )
}

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`