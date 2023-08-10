import { styled } from "styled-components";

function PostCard(props){
    return(
        <Wrapper>
            <PostId></PostId>
            <PostTitle></PostTitle>
            <PostAuthor></PostAuthor>
            <PostDate></PostDate>
            <PostLikes></PostLikes>
        </Wrapper>
    )
}

export default PostCard;