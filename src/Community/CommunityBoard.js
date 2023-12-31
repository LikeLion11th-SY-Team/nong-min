import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";
import { styled } from "styled-components";
import PostDetail from "./PostDetail";

function CommunityBoard(props) {
  const setMenuTitle = props.menu === "free" ? "자유 게시판" : "정보 공유 게시판";

  const [postList, setPostList] = useState([]);
  const getPostList = async () => {
    await axios
      .get(`${process.env.REACT_APP_BaseUrl}/community/${props.menu}/`)
      .then((res) => setPostList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPostList();
  }, [props.menu]);

  return (
    <BoardContainer>
      <CommunityCategory>{setMenuTitle}</CommunityCategory>
      <PostHeader>
        <LeftContainer>
          <PostPk></PostPk>
          <PostTitleContainer>
            <PostTitle>
              <PostText>제목</PostText>
            </PostTitle>
          </PostTitleContainer>
        </LeftContainer>
        <RightContainer>
          <PostWriter>
            <PostText>작성자</PostText>
          </PostWriter>
          <PostDate>
            <PostText>작성일</PostText>
          </PostDate>
          <PostLikes>
            <PostText>좋아요</PostText>
          </PostLikes>
        </RightContainer>
      </PostHeader>
      <Hr />
      <Posts>
        {postList.map((post, index) => (
          <>
          <Link key={post.pk} to={`/community/${post.category}/${post.pk}`}style={{ textDecoration: "none"}} >
            <PostCard
              key={post.pk}
              id={index + 1}
              title={post.title}
              author={post.writer_nickname}
              date={post.created_at}
              like={post.likes_count}
              menu={props.menu}
            />
          </Link>
          <Hr/>
          </>
        ))}
      </Posts>
    </BoardContainer>
  );
}

export default CommunityBoard;

const BoardContainer = styled.div``;

const CommunityCategory = styled.div`
  color: #152536;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%;
  letter-spacing: -0.01125rem;
`;

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
  line-height: 144.023%;
  letter-spacing: -0.00563rem;
`;

const PostHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

const LeftContainer = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
`;

const PostPk = styled.div`
  flex: 1;
`;

const PostTitleContainer = styled.div`
  flex: 6;
  margin: 0 1rem;
`;

const PostTitle = styled.div`
  width: 100%;
`;

const RightContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const PostWriter = styled.div`
  flex: 1;
`;

const PostDate = styled.div`
  flex: 1;
`;

const PostLikes = styled.div`
  flex: 1;
`;

const Hr = styled.hr`
  width: 54.5625rem;
  margin: 0;
`;

const PostText = styled.p`
  color: #152536;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%;
  letter-spacing: -0.00563rem;
`;
