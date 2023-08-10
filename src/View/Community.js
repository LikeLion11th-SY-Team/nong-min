import CommunitySideBar from "../Community/CommunitySideBar";

import { styled } from "styled-components";

function Community() {
  return (
    <CommunityContainer>
      <CommunitySideBar/>
    </CommunityContainer>
  )
}

export default Community;

const CommunityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`