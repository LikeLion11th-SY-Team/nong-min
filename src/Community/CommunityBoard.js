import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";
import { Route, Routes } from "react-router-dom";

import { styled } from "styled-components";
import { BaseUrl } from "../API/Api";
import PostDetail from "./PostDetail";

function CommunityBoard(props) { // props로 게시판 종류 받아옴
  const setMenuTitle = props.menu === "free" ? "자유 게시판" : "정보 공유 게시판" ;
  // 게시물 데이터 로드
  const [postList, setPostList] = useState([]);
  const getPostList = async() => {
    await axios.get(`${process.env.REACT_APP_BaseUrl}/community/${props.menu}/`)
      .then((res) => setPostList(res.data))
      .catch((err) => console.log(err)
    );
  }
  useEffect( () => {
    getPostList();
  }, [props.menu]);
  console.log(postList);

  return (
    <BoardContainer>
      <CommunityCategory>{setMenuTitle}</CommunityCategory>
      <PostHeader>
        <PostPk></PostPk>
        <PostTitle><PostText>제목</PostText></PostTitle>
        <PostWriter><PostText>작성자</PostText></PostWriter>
        <PostDate><PostText>작성일</PostText></PostDate>
        <PostLikes><PostText>좋아요</PostText></PostLikes>
      </PostHeader>
      <Hr />
      
      <Posts>
        {postList.map((post) => (
          <Link key={post.pk} to={`/community/${post.category}/${post.pk}`} >
            <PostCard 
              key={post.pk}
              id={post.pk}
              title={post.title}
              author={post.writer_nickname}
              date={post.created_at}
              like={post.likes_count}
              menu={props.menu}
            />
          </Link>
        ))}
      </Posts>
    </BoardContainer>
  )
}

export default CommunityBoard;

const BoardContainer = styled.div`
`
const CommunityCategory = styled.div`
  color: #152536;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.70044rem */
  letter-spacing: -0.01125rem;
`
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.0625rem;
  height: 19.1875rem;
  color: #152536;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;
`
const PostHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`
const PostPk = styled.div``
const PostTitle = styled.div`
  margin: 0 20rem 0 15rem;
`
const PostWriter = styled.div`
  margin: 0 2rem 0 2rem;
`
const PostDate = styled.div`
  margin: 0 2rem 0 2rem;
`
const PostLikes = styled.div`
  margin: 0 1rem 0 1rem;
`
const PostText = styled.p`
  color: #152536;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;
`
const Hr = styled.hr`
  width: 54.5625rem;
  margin: 0;
`