import { styled } from "styled-components";

function PostCard(props) {
  return (
    <PostCardWrapper>
      <PostId><PostText>{props.id}</PostText></PostId>
      <PostTitle><PostText>{props.title}</PostText></PostTitle>
      <PostAuthor><PostText>{props.author}</PostText></PostAuthor>
      <PostDate><PostText>{props.date}</PostText></PostDate>
      <PostLikes><PostText>{props.like}</PostText></PostLikes>
      <Hr/>
    </PostCardWrapper>
  )
}

export default PostCard;

const PostCardWrapper = styled.div`
  display: flex;
  width: 54.5625rem;
  height: 1.6875rem;
`
const PostId = styled.div`
  margin: 0 1rem 0 1rem;
`
const PostTitle = styled.div`
  margin: 0 1rem 0 15rem;
`
const PostAuthor = styled.div`
  margin: 0 2rem 0 2rem;
`
const PostDate = styled.div`
  margin: 0 2rem 0 2rem;
`
const PostLikes = styled.div`
  margin: 0 1rem 0 1rem;
`
const Hr = styled.hr`
  width: 54.5625rem;
  margin: 0;
`
const PostText = styled.p`
  text-decoration: none;
  color: #152536;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;
`