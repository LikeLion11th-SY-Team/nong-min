import { useState,useEffect } from "react";
import { getCookie } from "../API/Cookie";
import axios from "axios";
import { styled } from "styled-components";
import { format, isToday } from "date-fns"; // 날짜 형식 맞추기 위한 라이브러리

function DetailCard(props) {
  const [nickname, setNickname] = useState();
  const [isLike, setIsLike] = useState(props);
  const [likesCount, setLikesCount] = useState(props.likes_count);
  const [comments, setComments] = useState({
    content: '',
    post: '',
    commenter: '',
  });
  const accessToken = getCookie("accessToken");
  useEffect(() => {
    getNickname();
    getIsLike();
    //getComments(); 댓글 불러오기
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
        setNickname('아무개');
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
      setIsLike(likedPost !== undefined);
    }
    catch (error) {
      setIsLike(false);
      console.error(error);
    }
  }
  console.log("is_like:", isLike);

  // 댓글 불러오기
  async function getComments() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BaseUrl}/${props.pk}/comments/`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }
 

  // 좋아요 버튼 클릭 시 호출되는 함수
  const handleLikeClick = async () => {
    try {
      // 현재 열람 중인 게시글의 pk
      const currentPostPk = props.pk;
      // 좋아요 처리 요청 call, 토글 방식, 백엔드 자체 처리
      await axios.get(`${process.env.REACT_APP_BaseUrl}/${currentPostPk}/like/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      // 좋아요 상태 업데이트
      setIsLike(!isLike);
      setLikesCount((prevLikesCount) => (isLike ? prevLikesCount - 1 : prevLikesCount + 1));
    }
    catch (error) {
      console.error(error);
    }
  };

  // 댓글 작성
  // comment 변화 감지
  const onChange = (e) => {
    const { name, value } = e.target;
    setComments({
      ...comments,
      [name]: value,
    });
  };

  const handleCommentSubmit = async () => {
    if(comments === '') {
      alert('내용을 입력해주세요.')
    }

    const currentPostPk = props.pk;

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BaseUrl}/community/${currentPostPk}/comments/`,
        { content: comments.content, post: currentPostPk },
        { 
          headers: { 
            Authorization: `Bearer ${accessToken}` 
          },
        }
      );

    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  }; //

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
          {isLike ? <i className="fas fa-solid fa-heart"></i> : <i className="fas fa-regular fa-heart"></i>}
          <LikeText>좋아요 {likesCount}</LikeText>
        </PostLike>

        <CommentsContainer>
          <CommentHeader></CommentHeader>
        </CommentsContainer>
      </PostBody>

      <CommentForm>
        <CommentBox>
            <UserNickName>{nickname}</UserNickName>
            <CommentInput 
              type="text"
              placeholder="댓글을 작성하세요"
              onChange={onChange}
            ></CommentInput>
          </CommentBox>
          <CommentSubmitBtn onClick={handleCommentSubmit}>등록</CommentSubmitBtn>
          {/* 로그인 안한 경우 댓글창 block처리
          {accessToken ? (
            <>
              <CommentInput></CommentInput>
              <CommentSubmitBtn>등록</CommentSubmitBtn>
            </>
          ) : (
            <div>댓글 기능은 로그인 후 이용 가능합니다.</div>
          )}
          */}
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

/* 좋아요 버튼 */
const PostLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.1875rem;
  height: 2.25rem;
  margin: 1rem;
  border-radius: 0.9375rem;
  border: 1px solid #000;
`
const LikeText = styled.div`
  color: #152536;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 144.023%; /* 1.35019rem */
  letter-spacing: -0.00563rem;
  margin: 0.5rem;
`

/* 댓글 불러오는 창 */
const CommentsContainer = styled.div`
`
const CommentHeader = styled.div``

/* 댓글 쓰기창 */
const CommentForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50.875rem;
  height: 5.875rem;
  margin-top: 2rem;
  border-radius: 0.9375rem;
  border: 1px solid #828282;
  background: #FFF;
`
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.9375rem
`
const UserNickName = styled.div`
  color: #152536;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
`
const CommentInput = styled.textarea`
  width: 40rem;
  color: rgba(108, 117, 125, 0.50);
  &:focus {
    color: black; /* 포커스 시 텍스트 색을 검정색으로 변경 */
  }
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.62025rem */
  letter-spacing: -0.00675rem;
  border: none; /* border 없애기 */
  outline: none; /* 포커스 시 테두리 없애기 */
`
const CommentSubmitBtn = styled.button`
  width: 5.6875rem;
  height: 2.75rem;
  margin: auto 0.9375rem;
  border-radius: 0.9375rem;
  background: #002D61;  
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 144.023%; /* 1.80031rem */
  letter-spacing: -0.0075rem;
`