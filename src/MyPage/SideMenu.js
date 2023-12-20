import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

function SideMenu(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("./write");
  };

  const { login, setLogin, nickname } = useContext(AppContext);

  return (
    <Container>
      <UserContainer>
        <img src="/images/person-circle.png" alt="user-circle"></img>
        <UserName>{login ? nickname : "익명"} 님</UserName>
      </UserContainer>
      <MenuContainer>
        <Info>{props.op === "mypage" ? "계정 관리" : "카테고리"}</Info>
        <hr />
        <MenuOption>
          <MenuTitleContainer>
            <MenuImg>
              {props.op === "mypage" ? (
                <i className="fas fa-user-circle"></i>
              ) : (
                <i class="far fa-list-alt"></i>
              )}
            </MenuImg>
            <MenuTitle>
              {props.op === "mypage" ? "마이페이지" : "게시판"}
            </MenuTitle>
          </MenuTitleContainer>
          <Menu
            menu={
              location.pathname === "/mypage/editdata" ||
              location.pathname === "/community/free"
                ? true
                : false
            }
            to={props.op === "mypage" ? "/mypage/editdata" : "/community/free"}
          >
            {props.op === "mypage" ? "개인정보 수정" : "자유 게시판"}
          </Menu>
          <br />
          <Menu
            menu={
              location.pathname === "/mypage/editpw" ||
              location.pathname === "/community/info"
                ? true
                : false
            }
            to={props.op === "mypage" ? "/mypage/editpw" : "/community/info"}
          >
            {props.op === "mypage" ? "비밀번호 수정" : "정보공유 게시판"}
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
          <Menu
            menu={location.pathname === "/mypage/posts" ? true : false}
            to="/mypage/posts"
          >
            내가 쓴 글 보기
          </Menu>
          <Menu
            menu={location.pathname === "/mypage/comments" ? true : false}
            to="/mypage/comments"
          >
            내가 쓴 댓글 보기
          </Menu>
          <Menu
            menu={location.pathname === "/mypage/likes" ? true : false}
            to="/mypage/likes"
          >
            좋아요 누른 글 보기
          </Menu>
        </MenuOption>
      </MenuContainer>
      {props.op === "community" ? (
        <BtnContainer>
          <WriteBtn onClick={() => navigateToWrite()}>글쓰기</WriteBtn>
        </BtnContainer>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 13.5625rem;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #152536;

  position: relative;
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
  font-size: 1.3rem;
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

  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const MenuImg = styled.div`
  width: 1.375rem;
  height: 1.375rem;
`;

const MenuTitle = styled.div`
  padding-left: 0.5rem;
`;

const Menu = styled(Link)`
  font-size: 0.9375rem;
  font-style: normal;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;
  text-decoration: none;

  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
  }

  color: ${({ menu }) => (menu ? "#002D61" : "#152536")};
  font-weight: ${({ menu }) => (menu ? "600" : "500")};
`;

const Info = styled.div`
  width: 7.8125rem;
  height: 1.6875rem;

  color: #152536;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;

  margin-left: 0.5rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WriteBtn = styled.button`
  width: 10rem;
  height: 3.3125rem;

  border-radius: 0.9375rem;
  background: #002d61;
  box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.3) inset,
    3px 2px 10px 0px rgba(255, 255, 255, 0.45) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  text-align: center;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.25038rem */
  letter-spacing: -0.00938rem;

  position: absolute;
  bottom: 4rem;

  &:hover {
    cursor: pointer;
  }
`;

export default SideMenu;
