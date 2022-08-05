import React from "react";
import styled from "styled-components";

import title from "./img/section05/title.png";
import bg from "./img/section05/bg.jpeg";
import bg2 from "./img/section05/bg2.png";
import leaf1 from "./img/section05/leaf1.png";
import leaf2 from "./img/section05/leaf2.png";
const Section05 = ()=>{
    return(
        <Container bg={bg} leaf1={leaf1} leaf2={leaf2}>
            <Title>
                <img src={title} alt="문구" />
                <button>자세히보기</button>
            </Title>
            <Bg bg2={bg2}></Bg>
        </Container>
    )
}; export default Section05;

const Container = styled.div`
height:400px;
background:no-repeat center url(${props=>props.bg});
background-size:cover;
position:relative;
overflow:hidden;
::before{
    content:url(${props=>props.leaf1});
    position:absolute;
    bottom:-1%;
    left:-11%;
}
::after{
    content:url(${props=>props.leaf2});
    position:absolute;
    bottom:-1%;
    right:-28%;
}
`;
const Title = styled.div`
    width:30rem;
    position:absolute;
    top:30%;
    left:15%;
    text-align:center;
        button{
            padding:.4rem 1.5rem;
            margin-top:2rem;
            margin-left:10rem;
            border:2px solid #b17d1c;
            border-radius:5px;
            background-color:transparent;
            color:#b17d1c;
            font-weight:bold;
            font-size:1rem;
        }
`;
const Bg = styled.div`
width:100%;
height:400px;
position:absolute;
bottom:0;
right:-7%;
background:no-repeat center url(${props=>props.bg2});
background-size:cover;
`; 