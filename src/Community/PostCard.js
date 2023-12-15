import { styled } from "styled-components";
import { format, isToday } from "date-fns"; // 날짜 형식 맞추기 위한 라이브러리

function PostCard(props) {
  // 게시글 날짜 형식 지정
  const formatDate = (dateString) => {
    const postDate = new Date(dateString);

    // 오늘 작성된 글은 hh:mm으로 시간 표시
    if (isToday(postDate)) {
      return format(postDate, "HH:mm");
    }
    //아닌 경우 mm/dd로 표시
    else {
      return format(postDate, "MM/dd");
    }
  };

  return (
    <>
      <PostCardWrapper>
        <LeftContainer>
          <PostId>
            <PostText>{props.id}</PostText>
          </PostId>
          <PostTitleContainer>
            <PostTitle>
              <PostText>{props.title}</PostText>
            </PostTitle>
          </PostTitleContainer>
        </LeftContainer>
        <RightContainer>
          <PostAuthor>
            <PostText>{props.author}</PostText>
          </PostAuthor>
          <PostDate>
            <PostText>{formatDate(props.date)}</PostText>
          </PostDate>
          <PostLikes>
            <PostText>{props.like}</PostText>
          </PostLikes>
        </RightContainer>
      </PostCardWrapper>
    </>
  );
}

export default PostCard;

const PostCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1.6875rem;
  justify-content: right;
`;

const LeftContainer = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
`;

const PostId = styled.div`
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

const PostAuthor = styled.div`
  flex: 1;
`;

const PostDate = styled.div`
  flex: 1;
`;

const PostLikes = styled.div`
  flex: 1;
`;

const PostText = styled.p`
  color: #152536;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 144.023%;
  letter-spacing: -0.00563rem;
`;
