import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";

import { styled } from "styled-components";
import { BaseUrl } from "../API/Api";

function CommunityBoard(props) { // props로 게시판 종류 받아옴
  const [postList, setPostList] = useState([]);
  useEffect( async () => {
    await axios.get(`${BaseUrl}/community/free/`)
      .then((res) => setPostList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <CommunityCategory>{/* props로 게시판 이름 받아옴*/}</CommunityCategory>
      <Posts>
        {postList.map((post) => (
          <Link key={post.id} to={`/${post.id}`} >
            <PostCard 
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.user_id}
              date={post.date}
              like={post.like}
            />
          </Link>
        ))}
      </Posts>
    </Wrapper>
  )
}

export default CommunityBoard;