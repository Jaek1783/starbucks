import React from "react";
import styled from "styled-components";

import pick from "./img/section06/pick.png";
import title01 from "./img/section06/title01.png";
import title02 from "./img/section06/title02.png";
const Section06 = ()=>{
    return(
        <Container>
            <Title>
                <img src={title01} alt="문구이미지01" />
                <img src={title02} alt="문구이미지02" />
                <button>자세히 보기</button>
            </Title>
            <Img><img src={pick} alt="pick이미지" /></Img>
        </Container>
    )
}; export default Section06;

const Container = styled.div`
padding:6rem 3rem;
height:100vh;
background-color:transparent;
display:flex;
`;
const Title = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
padding:1rem 6rem;
    img:first-child{
        padding-bottom:3rem;
        width:70%;
    }
    button{
        padding:.4rem 1.5rem;
        margin-top:2rem;
        margin-left:10rem;
        border:2px solid #fff;
        border-radius:5px;
        background-color:transparent;
        color:#fff;
        font-weight:bold;
        font-size:1rem;
    }
`;

const Img = styled.div`
padding-left:3.5rem;
`;