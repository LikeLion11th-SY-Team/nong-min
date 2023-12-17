import { useState,useEffect } from "react";
import { getCookie } from "../API/Cookie";
import axios from "axios";
import { styled } from "styled-components";
import { format, isToday } from "date-fns"; // 날짜 형식 맞추기 위한 라이브러리

function DetailCard(props) {
  const [nickname, setNickname] = useState();
  const [isLike, setIsLike] = useState();
  // const [likesCount, setLikesCount] = useState(0);
  const accessToken = getCookie("accessToken");
  useEffect(() => {
    getNickname();
    getIsLike();
  }, []);

  // user의 nickname 가져오는 함수
  // 토큰값 전달해 닉네임 response로 받음
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
  console.log("nickname", nickname)

  // user가 해당 게시글에 좋아요 눌렀는지 여부 확인하는 함수
  // 현재 게시글의 pk값과 likepost 배열 내의 pk 값들 비교
  async function getIsLike() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BaseUrl}/auth/userinfo/mylikes/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      // 현재 열람 중인 게시글의 pk
      const currentPostPk = props.pk;
      // API 응답 데이터에서 현재 열람 중인 게시글의 pk에 대한 정보 찾기
      const likedPost = response.data.likeposts.find(likepost => likepost.pk === currentPostPk);
      // 좋아요 여부 확인후 set
      const isLiked = likedPost ? true : false;
      setIsLike(isLiked);
    }
    catch (error) {
      console.error(error);
    }
  }
  console.log("is_like:", isLike);
 
  // 좋아요 버튼 클릭 시 호출되는 함수
  const handleLikeClick = async () => {
    try {
      // 현재 열람 중인 게시글의 pk
      const currentPostPk = props.pk;

      // 좋아요 처리 요청 call, 토글 방식, 백엔드 자체 처리
      await axios.get(`${process.env.REACT_APP_BaseUrl}/community/${currentPostPk}/like/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      // 좋아요 누를 경우 component 랜더링 다시 하도록 수정!!

      // 좋아요 상태 업데이트
      setIsLike(!isLike);
    }
    catch (error) {
      console.error(error);
    }
  };

  // 게시글 날짜 format 지정 함수
  const formatDate = (dateString) => {
    try {
      const postDate = new Date(dateString);
  
      if (isToday(postDate)) {
        return format(postDate, "HH:mm");
      } else {
        return format(postDate, "yy.MM.dd일");
      }
    } catch (error) {
      console.error('Error formatting date:', error);
      return '???';
    }
  };

  return (
    <PostDetailContainer>
      <PostHeader>
        {/* 게시글 제목, 작성자, 날짜 등의 정보 포함하는 헤더 구역 */}
        <PostCategory>{props.category === "free" ? "자유 게시판 >" : "정보 공유 게시판 >" }</PostCategory>
        <PostHeaderDetail>
          <PostTitle>{props.title}</PostTitle>
          <WriteData>
            <WriterImage className="fas fa-user-circle"></WriterImage>
            <PostWriter>{props.writer_nickname}</PostWriter>
            <PostDate>{formatDate(props.created_at)}</PostDate>
          </WriteData>
        </PostHeaderDetail>
      </PostHeader>

      <PostBody>
        {/* 게시글 내용, 좋아요 버튼 구역 */}
        <PostContent>{props.contents}</PostContent>

        <PostLike onClick={handleLikeClick}>
          {isLike ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
          <LikeText>좋아요 {props.likes_count}</LikeText>
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
  align-items: center;
`
const WriterImage = styled.i`
  margin-right: 0.5rem;
`
const PostWriter = styled.div`
  margin-right: 1rem;
`
const PostDate = styled.div`
  margin-right: 1rem;
  color: #6C757D;
`
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
  color: ${props => (props.isLiked ? 'red' : '#152536')}; // 좋아요가 눌린 경우 빨간색으로 변경
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