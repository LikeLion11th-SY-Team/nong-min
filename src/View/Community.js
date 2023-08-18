import styled from "styled-components";
import SideMenu from "../MyPage/SideMenu";
import { EditData, EditPw } from "../MyPage/MyPageEdit";

import { Routes, Route } from "react-router-dom";

function Community() {
  return (
    <Container>
      <BkImage />
      <ItemsContainer>
        <SideMenu op="community" />
        <Routes>
          <Route path="/free" element={<EditData />} />
          <Route path="/info" element={<EditPw />} />
        </Routes>
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

export default Community;
