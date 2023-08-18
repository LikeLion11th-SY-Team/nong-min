import styled from "styled-components";
import SideMenu from "../MyPage/SideMenu";
import { EditData } from "../MyPage/MyPageEdit";

import PostForm from "../Community/PostForm";

import { Routes, Route } from "react-router-dom";
import CommunityBoard from "../Community/CommunityBoard";

function Community() {
  return (
    <Container>
      <BkImage />
      <ItemsContainer>
        <SideMenu op="community" />
        <BoardContainer>
          <Routes>
            <Route path="/free" element={<CommunityBoard menu="free" />} />
            <Route path="/info" element={<CommunityBoard menu="info" />} />
            <Route path="/write" element={<PostForm />} />
          </Routes>
        </BoardContainer>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 75rem;
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

  position: absolute;
  top: 15.16rem;

  left: 50%;
  transform: translate(-50%);
`;

const BoardContainer = styled.div`
  width: 61.9375rem;
  height: 36em;

  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

export default Community;
