import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import { BaseUrl } from "../API/Api";

function PostForm() {
  const getAuthor = axios.get(`${BaseUrl}/auth/api/get/userinfo/`,{user_id});
  const getPost = axios.get(`${BaseUrl}/recommend/write/`);
  const [post, setPost] = useState({
    id:'',
    title: '',
    // 사진 데이터 같이 전송하는지 따로 전송하고 백엔드에서 처리하는지?
    contents: '',
    author: {getAuthor}, //{getAuthor} 사용자 계정 토큰 받아오기
    date:'',
    likes: '0',
  });

  const { id, title, contents, author, date, likes } = post;

  const onChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  // 이미지 첨부 기능 로직
  /*
  const [images, setImages] = useState([]);
  const uploadImages = (e) => {
    const files = e.target.files;
    const selectedFiles = Array.from(files);
    setImages(selectedFiles);
  };
  */
  
  // 게시글 작성 버튼 로직
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (title === '') { // 제목, 내용 입력되지 않은 경우
      alert('제목을 입력해주세요.');
      return;
    } else if(contents === '') {
      alert('내용을 입력해주세요');
      return;
    }

    const currentTime = new Date();
    const newPost = setPost({
      ...post,
      date: currentTime,
    })
    
    try{
      const res = await axios.post(`${BaseUrl}/recommend/write/`, {newPost})
      alert('등록되었습니다');
      navigate(-1); // 커뮤니티, 이전페이지, 작성한 게시글 중 어디로 링크할지 논의 필요
      console.log({ ...post, date: currentTime });
    } catch(err){
      alert('오류가 발생했습니다. 다시 시도해주세요.')
    }
  };

  const cancel = (e) => {
    e.preventDefault()
    alert('취소되었습니다')
    navigate(-1);
  };

  return (
    <FormWrapper>
        <HeaderContainer>
          <SelectBoard>
            <Option value={""}>게시판 선택</Option>
            <Option value={"info"}>정보 공유 게시판</Option>
            <Option value={"free"}>자유 게시판</Option>
          </SelectBoard>
          <Title 
            type="text" 
            name="title" 
            placeholder="제목을 입력해 주세요" 
            value={title}
            onChange={onChange}
          />
        </HeaderContainer>
        <BodyContainer>
          <UploadImage
            accept="image/*" 
            multiple
            type="file"
            onChange={uploadImages}
          />
          <Contents 
            name="contents" 
            placeholder="내용을 입력해 주세요"
            value={contents}
            onChange={onChange}
          ></Contents>
        </BodyContainer>

      <ColContainer>
        <SubmitBtn onClick={submit}>등록</SubmitBtn>
        <CancelBtn onClick={cancel}>취소</CancelBtn>
      </ColContainer>
    </FormWrapper>
  );
}

export default PostForm;