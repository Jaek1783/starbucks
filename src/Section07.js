import React from "react";
import styled from "styled-components";

import bg from "./img/section07/bg.png";
import visual from "./img/section07/visual.png";
import text from "./img/section07/text.png";
const Section07 = ()=>{
    return(
    <Container bg={bg}>
        <Title>
            <img src={text} alt="문구 이미지" />
            <button>자세히보기</button>
        </Title>
        <Img><img src={visual} alt="디자인 이미지" /></Img>
    </Container>
)}; export default Section07;

const Container = styled.div`
height:400px;
background:no-repeat center url(${props=>props.bg});
background-size:cover;
background-color:#fff;
display:flex;
justify-content:center;
`;

const Title = styled.div`
width:45%;
padding:8rem 3rem 8rem 0;
    button{
        padding:.4rem 1.5rem;
        margin-top:2rem;
        margin-left:18rem;
        border:2px solid #000;
        border-radius:5px;
        background-color:transparent;
        color:#000;
        font-weight:bold;
        font-size:1rem;
    }
`;
const Img = styled.div`
width:24%;
`;