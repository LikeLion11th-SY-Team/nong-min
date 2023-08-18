import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../API/Cookie";

import styled from "styled-components";

function PostForm() {
  const access = getCookie("accessToken");
  const refresh = getCookie("refreshToken");
  
  const [post, setPost] = useState({
    title: '',
    category: '',
    // 사진 데이터 같이 전송하는지 따로 전송하고 백엔드에서 처리하는지?
    contents: '',
  });

  const { title, contents, category } = post;

  const onChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  // 이미지 첨부 기능 로직
  const [images, setImages] = useState([]);
  const uploadImages = (e) => {
    const files = e.target.files;
    const selectedFiles = Array.from(files);
    setImages(selectedFiles);
  };
  const uploadImageRef = useRef(null); // Ref 생성
  const handleUploadContainerClick = () => {
    uploadImageRef.current.click(); // UploadImage 클릭 처리
  };
  
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
    } else if(category ==='') {
      alert('게시판을 선택해주세요');
      return;
    }

    /* 작성 시간 전달 로직 삭제
    const currentTime = new Date();
    */
    const newPost = setPost({
      ...post,
      title,
      contents,
      category,
    })
    
    try{
      const res = await axios.post(
        `${process.env.REACT_APP_BaseUrl}/community/create/`,
        { title, contents, category },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access}`,
          },
        }
      )
      alert('등록되었습니다');
      navigate(-1); // 커뮤니티, 이전페이지, 작성한 게시글 중 어디로 링크할지 논의 필요
    } catch(err){
      alert('오류가 발생했습니다. 다시 시도해주세요.')
    }
  };

  const cancel = (e) => {
    e.preventDefault()
    alert('취소되었습니다.')
    navigate(-1);
  };

  return (
    <FormWrapper>
      <TopContainer>
        <MenuTitle>게시판 글쓰기</MenuTitle>
        <BtnContainer>
          <CancelBtn onClick={cancel}>취소</CancelBtn>
          <SubmitBtn onClick={submit}>등록</SubmitBtn>
        </BtnContainer>
      </TopContainer>

      <HeaderContainer>
        <SelectBoard
          value={category}
          name="category"
          onChange={onChange}
        >
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
        <UploadImageContainer onClick={handleUploadContainerClick}>
          <UploadImageIcon src="images/photoUpload.png"/>
          <UploadImageText>사진 첨부하기</UploadImageText>
          <UploadImage
            ref={uploadImageRef}
            accept="image/*" 
            multiple
            type="file"
            onChange={uploadImages}
          />
        </UploadImageContainer>
        
        <Contents 
          name="contents" 
          placeholder="내용을 입력해 주세요"
          value={contents}
          onChange={onChange}
        ></Contents>
      </BodyContainer>
    </FormWrapper>
  );
}

export default PostForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const BtnContainer = styled.div`
`
const SubmitBtn = styled.button`
  width: 6.875rem;
  height: 2.75rem;
  margin: 0 2rem 0 1rem;
  border-radius: 0.9375rem;
  border: 1px solid #828282;
  background: #002D61;
  color: #FFF;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
`
const CancelBtn = styled.button`
  width: 6.875rem;
  height: 2.75rem;
  border-radius: 0.9375rem;
  border: 1px solid #828282;
  background: #FFF;
  color: #152536;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
`
const MenuTitle = styled.div`
  color: #152536;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 2.70044rem */
  letter-spacing: -0.01125rem;
`
// 헤더
const HeaderContainer = styled.div`
  display: flex;
  height: 2.8125rem;
  margin: 2rem;
`
const Title = styled.input`
  width: calc(37.375rem - 1rem);
  padding-left: 1rem;
  border-radius: 0rem 0.9375rem 0.9375rem 0rem;
  border: 1px solid #828282;
  background: #FFF;
  color: ${({ value }) => (value ? "#000" : "#6C757D")};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
  &: focus {outline: none;} // focus일때 outline 제거
`
const SelectBoard = styled.select`
  width: 13.5rem;
  padding-left: 1rem;
  border-radius: 0.9375rem 0rem 0rem 0.9375rem;
  border-top: 1px solid #828282;
  border-bottom: 1px solid #828282;
  border-left: 1px solid #828282;
  background: #FFF;
  color: #152536;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
`
const Option = styled.option``

// 게시글 바디
const BodyContainer = styled.div`
  width: 50.875rem;
  height: 18.5625rem;
  background: #FFF;
`
// 이미지 관련
const UploadImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 2.67913rem;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  border: 1px solid #828282;
  justify-content: right;
  align-items: center;
`
const UploadImageIcon = styled.img`
  width: 1.5rem;
  height: 1.53094rem;
`
const UploadImageText = styled.p`
  margin: 0 1rem 0 0.5rem;
  color: #152536;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;
`
const UploadImage = styled.input`
  display: none;
`

const Contents = styled.textarea`
  width: calc(100% - 2rem);
  height: calc(18.5625rem - 2.67913rem);
  border: 1px solid #828282;
  border-top: none;
  border-radius: 0 0 0.9375rem 0.9375rem;
  padding: 1rem;
  color: ${({ value }) => (value ? "#000" : "#152536")};
  color: #152536;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
  &: focus {outline: none;} // focus일때 outline 제거
`