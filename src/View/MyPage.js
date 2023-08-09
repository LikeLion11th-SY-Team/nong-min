import styled from "styled-components";
import { useState } from "react";
import MyPageEdit from "../MyPage/MyPageEdit";

function MyPage() {
  const [menu, setMenu] = useState("1");
  return (
    <Container>
      <BkImage />
      <ItemsContainer>
        <OptionContainer>
          <UserContainer>
            <img src="/images/person-circle.png" alt="user-circle"></img>
            <UserName>아무개 님</UserName>
          </UserContainer>
          <MenuContainer>
            <Menu menuNum="0">계정 관리</Menu>
            <hr />
            <MenuOption>
              <MenuTitleContainer>
                <MenuImg>
                  <i className="fas fa-user-circle"></i>
                </MenuImg>
                <MenuTitle>마이페이지</MenuTitle>
              </MenuTitleContainer>
              <Menu menuNum="1" menu={menu} onClick={() => setMenu("1")}>
                개인정보 수정
              </Menu>
              <Menu menuNum="2" menu={menu} onClick={() => setMenu("2")}>
                비밀번호 수정{" "}
              </Menu>
            </MenuOption>
            <hr />
            <MenuOption>
              <MenuTitleContainer>
                <MenuImg>
                  <i class="far fa-bookmark"></i>
                </MenuImg>
                <MenuTitle>내 활동</MenuTitle>
              </MenuTitleContainer>
              <Menu menuNum="3" menu={menu} onClick={() => setMenu("3")}>
                내가 쓴 글 보기
              </Menu>
              <Menu menuNum="4" menu={menu} onClick={() => setMenu("4")}>
                내가 쓴 댓글 보기
              </Menu>
              <Menu menuNum="5" menu={menu} onClick={() => setMenu("5")}>
                좋아요 누른 글 보기
              </Menu>
            </MenuOption>
          </MenuContainer>
        </OptionContainer>
        <BoardContainer>
          <BoardTitle>마이페이지</BoardTitle>
          <BoardTitleDetail>개인정보 수정</BoardTitleDetail>
          {menu === "1" ? <MyPageEdit /> : null}
        </BoardContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 80rem;
  margin-bottom: 4.43rem;

  position: relative;
`;

const BkImage = styled.div`
  background: url(/images/background.png);
  height: 20rem;
  margin: 0;

  background-repeat: no-repeat;
  background-position: center left;
  background-size: cover;
`;

const ItemsContainer = styled.div`
  display: flex;
  /* justify-content: center; */

  position: absolute;
  top: 15.16rem;

  left: 50%;
  transform: translate(-50%);
`;

const OptionContainer = styled.div`
  width: 13.5625rem;
  height: 60.9375rem;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #152536;
`;

const MenuContainer = styled.div`
  width: 11.25rem;
  margin: 0 auto;
`;

const UserContainer = styled.div`
  height: 3rem;

  display: flex;
  justify-content: center;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
`;

const UserName = styled.div`
  width: 6.625rem;
  height: 3rem;

  text-align: center;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.25038rem */
  letter-spacing: -0.00938rem;

  padding-top: 0.5rem;
  padding-left: 0.5rem;
`;

const MenuOption = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const MenuTitleContainer = styled.div`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;

  display: flex;

  margin-bottom: 0.5rem;
`;

const MenuImg = styled.div`
  width: 1.375rem;
  height: 1.375rem;
`;

const MenuTitle = styled.div`
  padding-left: 0.5rem;
`;

const Menu = styled.div`
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;

  margin-bottom: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  color: ${({ menuNum, menu }) => (menuNum === menu ? "#002D61" : "#152536")};
  text-decoration: ${({ menuNum, menu }) =>
    menuNum === menu ? "underline" : null};
`;

const BoardContainer = styled.div`
  width: 61.9375rem;
  height: 60.9375rem;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

export default MyPage;
