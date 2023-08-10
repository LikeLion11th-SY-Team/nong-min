import { Link } from "react-router-dom";
import PostCard from "./PostCard";

import { styled } from "styled-components";

function CommunityBoard(props){
    return(
        <Wrapper>
            <CommunityCategory></CommunityCategory>
            <Posts>

            </Posts>
        </Wrapper>
    )
}

export default CommunityBoard;