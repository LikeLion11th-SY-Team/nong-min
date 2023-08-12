import styled from "styled-components";

function MyPageEdit() {
  const UserNickName = "아무개";
  const UserName = "남궁팔두";
  const PhoneNumber = "01012345678";
  return (
    <Container>
      <Title>
        닉네임<Asterisk>*</Asterisk>
      </Title>
      <Input placeholder={UserNickName} />
      <Title>이름</Title>
      <Input placeholder={UserName} />
      <Title>전화번호</Title>
      <Input placeholder={PhoneNumber} />
    </Container>
  );
}

const Container = styled.div`
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

export default MyPageEdit;
