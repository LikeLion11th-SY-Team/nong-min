import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../API/Api";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { getCookie } from "../API/Cookie";

function EditData() {
  /**사용자 기본 데이터 */
  const accessToken = getCookie("accessToken");

  const [user, setUser] = useState({
    PrevId: "",
    PrevNickname: "",
    PrevPhone: "",
    PrevEmail: "",
  });
  const { prevId, prevNickname, prevPhone, prevEmailId, prevAddress } = user;

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    await axios
      .get(`${REACT_APP_BaseUrl}/auth/api/userinfo/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log(response.data);
        /*  setRegisterData((data) => ({
          ...data,
          [PrevId]: res.data.id,
        })); */
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**사용자 입력 데이터 */
  const [registerData, setRegisterData] = useState({
    nick_name: "",
    phone_number: "",
    emailId: "",
    platformAddress: "",
  });
  const { nick_name, phone_number, emailId, platformAddress } = registerData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**에러 확인 */
  const handlePhoneError = (e) => {
    const regex = /^[0-9]{0,11}$/;
    if (!regex.test(e.target.value)) {
      setPhoneError(true);
    } else setPhoneError(false);
  };

  const handleNicknameError = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BaseUrl}/auth/api/check/nickname/`, {
        nick_name,
      });

      if (res.status === 200) {
        alert("사용 가능한 닉네임입니다.");
      } else {
        setNameError(true);
        setCheckNickname(true);
        alert("중복된 닉네임입니다. 다른 닉네임을 사용해주세요.");
      }
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullEmail = `${emailId}@${platformAddress}`;

    if (nameError)
      return alert("중복된 닉네임입니다. 다른 닉네임을 사용해주세요.");
    else if (phoneError)
      return alert("전화번호를 ‘-’ 제외 11자리로 입력해주세요");
    else if (!checkNickname) return alert("닉네임 중복확인을 해주세요.");
    else {
      try {
        const response = await axios.patch(`${BaseUrl}/auth/userinfo/`, {
          nick_name,
          phone_number,
          email: fullEmail,
        });

        if (response.status === 200) alert("수정이 완료되었습니다!");
        else alert("수정에 실패했습니다. 다시 시도해주세요.");
      } catch (error) {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <BoardContainer>
      <BoardTitle>마이페이지</BoardTitle>
      <BoardTitleDetail>개인정보 수정</BoardTitleDetail>
      <ContentContainer>
        <TitleContainer>
          <Title>
            닉네임<Asterisk>*</Asterisk>
          </Title>
          {nameError ? <ErrorMsg>중복되는 닉네임입니다</ErrorMsg> : null}
        </TitleContainer>
        <InputContainer>
          <Input
            name="nick_name"
            placeholder={user.nick_name}
            value={prevNickname}
            onChange={onChange}
          />
          <CheckBtn onClick={(e) => handleNicknameError(e)}>중복 확인</CheckBtn>
        </InputContainer>
        <TitleContainer>
          <Title>전화번호</Title>
          {phoneError ? (
            <ErrorMsg>‘-’ 제외 11자리로 입력해주세요</ErrorMsg>
          ) : null}
        </TitleContainer>
        <Input
          name="phone_number"
          placeholder={user.phone_number}
          value={prevPhone}
          onChange={onChange}
          onBlur={(e) => handlePhoneError(e)}
        />
        <Title>이메일</Title>
        <EmailContainer>
          <Input
            name="emailId"
            placeholder={user.email}
            value={prevEmailId}
            onChange={onChange}
            email="true"
          />
          <AtSign>@</AtSign>
          <Input
            name="platformAddress"
            placeholder={""}
            value={prevAddress}
            onChange={onChange}
            email="true"
          />
        </EmailContainer>
      </ContentContainer>
      <BtnContainer>
        <EditBtn onClick={handleSubmit}>수정하기</EditBtn>
      </BtnContainer>
    </BoardContainer>
  );
}

function EditPw() {
  /**사용자 입력 데이터 */
  const [registerData, setRegisterData] = useState({
    PrevPw: "",
    newPw: "",
    confirmPw: "",
  });
  const { prevPw, newPw, confirmPw } = registerData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**사용자 기본 데이터 */
  const [pw, setUser] = useState("");

  const [oldError, setOldError] = useState(false);
  const [newError, setNewError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const handleOldError = (e) => {
    if (pw !== prevPw) setOldError(true);
  };

  const handleNewError = (e) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    if (!regex.test(e.target.value)) {
      setNewError(true);
    } else setNewError(false);
  };

  const handleConfirmError = (e) => {
    if (newPw !== confirmPw) setConfirmError(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (oldError) return alert("기존 비밀번호와 일치하지 않습니다");
    else if (newError)
      return alert("비밀번호는 문자, 숫자 포함 8-20자로 입력해주세요");
    else if (confirmError) return alert("비밀번호가 일치하지 않습니다");
    else if (newPw === pw)
      return alert("기존 비밀번호와 일치합니다. 새 비밀번호를 입력해주세요");
    else {
      try {
        const response = await axios.post(
          `${BaseUrl}/auth/userinfo/changepassword/`,
          {}
        );

        if (response.status === 200) alert("수정이 완료되었습니다!");
        else alert("수정에 실패했습니다. 다시 시도해주세요.");
      } catch (error) {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <BoardContainer>
      <BoardTitle>마이페이지</BoardTitle>
      <BoardTitleDetail>비밀번호 수정</BoardTitleDetail>
      <ContentContainer>
        <TitleContainer>
          <Title>
            기존 비밀번호<Asterisk>*</Asterisk>
          </Title>
          {oldError ? (
            <ErrorMsg>기존 비밀번호와 일치하지 않습니다</ErrorMsg>
          ) : null}
        </TitleContainer>
        <Input
          name="prevPw"
          placeholder="기존 비밀번호 입력"
          value={pw}
          onChange={onChange}
          onBlur={(e) => handleOldError(e)}
          error={oldError}
        />
        <TitleContainer>
          <Title>
            새 비밀번호<Asterisk>*</Asterisk>
          </Title>
          {newError ? (
            <ErrorMsg>문자, 숫자 포함 8-20자로 입력해주세요</ErrorMsg>
          ) : null}
        </TitleContainer>
        <Input
          name="newPw"
          placeholder="새 비밀번호 입력(문자, 숫자 포함 8-20자)"
          value={newPw}
          onChange={onChange}
          onBlur={(e) => handleNewError(e)}
          error={newError}
        />
        <TitleContainer>
          <Title>
            새 비밀번호 확인<Asterisk>*</Asterisk>
          </Title>
          {confirmError ? (
            <ErrorMsg>비밀번호가 일치하지 않습니다</ErrorMsg>
          ) : null}
        </TitleContainer>
        <Input
          name="confirmPw"
          placeholder="새 비밀번호 재입력"
          value={confirmPw}
          onChange={onChange}
          onBlur={(e) => handleConfirmError(e)}
          error={confirmError}
        />
      </ContentContainer>
      <BtnContainer>
        <EditBtn onClick={handleSubmit}>수정하기</EditBtn>
      </BtnContainer>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  width: 61.9375rem;
  height: 56.9375rem;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: relative;
`;

const BoardTitle = styled.div`
  color: #002d61;
  text-align: center;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.01875rem;

  margin-top: 4rem;
`;

const BoardTitleDetail = styled.div`
  color: #152536;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01125rem;

  margin-top: 4rem;
  margin-left: 6.63rem;
  margin-bottom: 2.75rem;
`;

const ContentContainer = styled.div`
  width: 40rem;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #152536;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00938rem;

  margin-bottom: 0.75rem;

  display: flex;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: ${({ email }) => (email === "true" ? "16.5rem" : "38.9375rem")};
  height: 3.8125rem;

  background-color: ${({ error }) => (error ? "#f00" : "#fff")};

  border-radius: 0.75rem;
  border: 0.7px solid #828282;
  background: #fff;

  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00863rem;

  margin-bottom: 1.56rem;

  text-indent: 2.62rem;
`;

const CheckBtn = styled.button`
  width: 7.125rem;
  height: 2.625rem;

  border-radius: 0.75rem;
  background: #002d61;

  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0075rem;

  position: absolute;
  top: 0.81rem;
  right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const EmailContainer = styled.div`
  width: 39.3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmailInput = styled.div``;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EditBtn = styled.button`
  width: 16.1875rem;
  height: 4rem;

  border-radius: 0.9375rem;
  background: #002d61;

  color: #fff;
  text-align: center;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01125rem;

  position: absolute;
  bottom: 5.62rem;

  &:hover {
    cursor: pointer;
  }
`;

const Asterisk = styled.div`
  color: #eb0000;
`;

const AtSign = styled.div`
  color: #828282;

  padding-bottom: 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const ErrorMsg = styled.div`
  color: #828282;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00863rem;

  margin-left: 1.5rem;
`;

export { EditData, EditPw };
