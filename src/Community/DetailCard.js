import { useState,useEffect } from "react";
import { getCookie } from "../API/Cookie";
import axios from "axios";
import { styled } from "styled-components";

function DetailCard({ pk, category, title, writer_nickname, created_at, contents, likes_count}) {
  const [nickname, setNickname] = useState();
  const accessToken = getCookie("accessToken");
  useEffect(() => {
    getNickname();
  }, []);
  async function getNickname() {
    await axios
      .get(`${process.env.REACT_APP_BaseUrl}/auth/api/get/nickname/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setNickname(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <PostDetailContainer>
      <PostHeader>
        <PostCategory>{category === "free" ? "자유 게시판 >" : "정보 공유 게시판 >" }</PostCategory>
        <PostHeaderDetail>
          <PostTitle>{title}</PostTitle>
          <WriteData>
            <PostWriter>{writer_nickname}</PostWriter>
            <PostDate>{created_at}</PostDate>
          </WriteData>
        </PostHeaderDetail>
      </PostHeader>

      <PostBody>
        <PostContent>{contents}</PostContent>
        <PostLike>
          <LikeBtn></LikeBtn>
          <i class="fa-regular fa-heart"></i>
          <LikeText>좋아요 {likes_count}</LikeText>
        </PostLike>
        <CommentsContainer>
          <CommentHeader></CommentHeader>
        </CommentsContainer>
      </PostBody>

      <CommentForm>
        <UserNickName>{nickname}</UserNickName>
        <CommentInput></CommentInput>
        <CommentSubmitBtn>등록</CommentSubmitBtn>
      </CommentForm>
    </PostDetailContainer>
  )
}

export default DetailCard;

const PostDetailContainer = styled.div`
  width: 50.875rem;
  background: #FFF;
`
const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5.125rem;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  border: 1px solid #828282;
  border-bottom: none;
`
const PostCategory = styled.div`
  color: #002D61;
  text-align: left;
  margin: 0.5rem 0 0 1rem;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 144.023%; /* 1.08019rem */
  letter-spacing: -0.0045rem;
`
const PostHeaderDetail = styled.div`
  display: flex;
  justify-content: space-between;
`
const PostTitle = styled.div`
  margin-left: 1rem;
  color: #152536;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.25038rem */
  letter-spacing: -0.00938rem;
`
const WriteData = styled.div`
  display: flex;
  margin-right: 1rem;
`
const PostWriter = styled.div``
const PostDate = styled.div``
const PostBody = styled.div`
  width: 100%;
  border-radius: 0rem 0rem 0.9375rem 0.9375rem;
  border: 1px solid #828282;
  background: #FFF;
`
const PostContent = styled.div`
  margin: 1rem 0 0 1rem;
  color: #152536;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
`
const PostLike = styled.div`
  display: flex;
  width: 7.1875rem;
  height: 2.25rem;
  margin: 1rem;
  border-radius: 0.9375rem;
  border: 1px solid #000;
`
const LikeBtn = styled.button`
  display: none;
`
const LikeText = styled.div`
  color: #152536;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;
`
const CommentsContainer = styled.div`
`
const CommentHeader = styled.div``
const CommentForm = styled.div`
  display: flex;
  margin-top: 2rem;
  border-radius: 0.9375rem;
  border: 1px solid #828282;
  background: #FFF;
`
const UserNickName = styled.div``
const CommentInput = styled.input``
const CommentSubmitBtn = styled.button``