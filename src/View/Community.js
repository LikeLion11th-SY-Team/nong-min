import { styled } from "styled-components";
import PostForm from "../Community/PostForm";

function Community() {
  return (
    <CommunityContainer>
      <PostForm/>
    </CommunityContainer>
  )
}

export default Community;

const CommunityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`