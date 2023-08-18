import styled from "styled-components";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Icon>
          {props.title === "학습 공간" ? (
            <i class="fas fa-pencil-alt"></i>
          ) : props.title === "커뮤니티" ? (
            <i class="fas fa-user-friends"></i>
          ) : (
            <i class="fas fa-info-circle"></i>
          )}
        </Icon>
      </TitleContainer>

      <Info>
        {props.infoTop}
        <br />
        {props.infoBottom}
      </Info>
      <Detail to={props.link}>자세히 보기 &gt;&gt;</Detail>
    </Container>
  );
}

const Container = styled.div`
  width: 21.875rem;
  height: 12rem;

  margin: auto 2.5%;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: relative;
`;

const TitleContainer = styled.div`
  color: #152536;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.25038rem */
  letter-spacing: -0.00938rem;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-top: 20%;
  margin-left: 7%;
`;

const Icon = styled.div`
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;

  margin-top: 10%;
  margin-right: 10%;
`;

const Info = styled.div`
  color: #6c757d;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;

  margin-left: 7%;
`;

const Detail = styled(Link)`
  color: rgba(108, 117, 125, 0.8);
  text-align: right;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.08019rem */
  letter-spacing: -0.0045rem;

  position: absolute;
  right: 7%;
  bottom: 7%;

  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export default Menu;
