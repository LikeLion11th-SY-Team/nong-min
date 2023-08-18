import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../API/Cookie";

import { styled } from "styled-components";
import DetailCard from "./DetailCard";

function PostDetail() {
  const access = getCookie("accessToken");
  const refresh = getCookie("refreshToken");

  const { category, pk } = useParams();
  const [postData, setPostData] = useState({});
  const getPost = async () => {
    await axios.get(`${process.env.REACT_APP_BaseUrl}/community/${pk}/`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })
      .then(res => setPostData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPost();
  }, []);

  console.log(postData);
  return (
    <DetailCard
      pk={postData.pk}
      category={postData.category}
      title={postData.title}
      writer_nickname={postData.writer_nickname}
      created_at={postData.created_at}
      contents={postData.contents}
      likes_count={postData.likes_count}
    />
  )
}

export default PostDetail;