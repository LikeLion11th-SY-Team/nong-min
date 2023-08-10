import styled from "styled-components";

function EditData() {
  const userNickName = "아무개";
  const phoneNumber = "01012345678";
  const email = "hongikamg17";
  return (
    <BoardContainer>
      <BoardTitle>마이페이지</BoardTitle>
      <BoardTitleDetail>개인정보 수정</BoardTitleDetail>
      <ContentContainer>
        <Title>
          닉네임<Asterisk>*</Asterisk>
        </Title>
        <Input placeholder={userNickName} />
        <Title>전화번호</Title>
        <Input placeholder={phoneNumber} />
        <Title>이메일</Title>
        <Input placeholder={email} />
      </ContentContainer>
      <BtnContainer>
        <EditBtn>수정하기</EditBtn>
      </BtnContainer>
    </BoardContainer>
  );
}

function EditPw() {
  return (
    <BoardContainer>
      <BoardTitle>마이페이지</BoardTitle>
      <BoardTitleDetail>비밀번호 수정</BoardTitleDetail>
      <ContentContainer>
        <Title>
          기존 비밀번호<Asterisk>*</Asterisk>
        </Title>
        <Input placeholder="기존 비밀번호 입력" />
        <Title>
          새 비밀번호<Asterisk>*</Asterisk>
        </Title>
        <Input placeholder="새 비밀번호 입력(문자, 숫자 포함 8-20자)" />
        <Title>
          새 비밀번호 확인<Asterisk>*</Asterisk>
        </Title>
        <Input placeholder="새 비밀번호 재입력" />
      </ContentContainer>
      <BtnContainer>
        <EditBtn>수정하기</EditBtn>
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

const Input = styled.input`
  width: 38.9375rem;
  height: 3.8125rem;

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

const Asterisk = styled.div`
  color: #eb0000;
`;

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

export { EditData, EditPw };
