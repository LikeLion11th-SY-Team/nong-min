import { Link } from "react-router-dom";

import { styled } from "styled-components";

function CommunitySideBar() {
  return (
    <Wrapper>
      <UserCard>
        {/* 유저 정보 카드 추가 */}
        <Icon src="/images/person-circle.png" alt="person-circle"/>
        <MenuLists>
          <MenuList>내가 쓴 글 보기</MenuList>
          <MenuList>내가 쓴 댓글 보기</MenuList>
          <MenuList>좋아요 누른 글 보기</MenuList>
        </MenuLists>
      </UserCard>
      <Hr/>
      <CategoryCard>
        <Category>카테고리</Category>
        <CategoryLists>
          <CategoryList>게시판</CategoryList>
          <CategoryList>정보 공유 게시판</CategoryList>
          <CategoryList>자유 게시판</CategoryList>
        </CategoryLists>
        <WriteBtn>글쓰기</WriteBtn>
      </CategoryCard>
    </Wrapper>
  )
}

export default CommunitySideBar;

const Wrapper = styled.div`
    
`
const Icon = styled.img``
const UserCard = styled.div``
const MenuLists = styled.div`
  display: flex;
  flex-direction: column;
`
const MenuList = styled(Link)``
const CategoryCard = styled.div``
const Category = styled.p``
const CategoryLists = styled.div``
const CategoryList = styled(Link)``
const WriteBtn = styled.button``
const Hr = styled.hr``