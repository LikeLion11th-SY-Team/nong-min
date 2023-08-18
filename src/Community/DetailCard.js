import { styled } from "styled-components";

function DetailCard({ pk, category, title, writer_nickname, created_at, contents, likes_count}) {
  return (
    <PostDetailContainer>
      <PostHeader>
        <PostCategory>{category}</PostCategory>
        <PostHeaderDetail>
          <PostTitle>{title}</PostTitle>
          <PostWriter>{writer_nickname}</PostWriter>
          <PostDate>{created_at}</PostDate>
        </PostHeaderDetail>
      </PostHeader>

      <PostBody>
        <PostContent>{contents}</PostContent>
        <PostLike>
          <LikeBtn></LikeBtn>
          <HeartImg></HeartImg>
          <LikeText>좋아요 {likes_count}</LikeText>
        </PostLike>
      </PostBody>
    </PostDetailContainer>
  )
}

export default DetailCard;

const PostDetailContainer = styled.div``
const PostHeader = styled.div``
const PostCategory = styled.div``
const PostHeaderDetail = styled.div``
const PostTitle = styled.div``
const PostWriter = styled.div``
const PostDate = styled.div``
const PostBody = styled.div``
const PostContent = styled.div``
const PostLike = styled.div``
const LikeBtn = styled.button``
const HeartImg = styled.img``
const LikeText = styled.div``
