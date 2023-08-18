import { styled } from "styled-components";

function PostCard(props) {
  return (
    <PostCardWrapper>
      <PostId>{props.id}</PostId>
      <PostTitle>{props.title}</PostTitle>
      <PostAuthor>{props.author}</PostAuthor>
      <PostDate>{props.date}</PostDate>
      <PostLikes>{props.like}</PostLikes>
    </PostCardWrapper>
  )
}

export default PostCard;

const PostCardWrapper = styled.div`
  display: flex;
`
const PostId = styled.p