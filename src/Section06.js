import React from "react";
import styled from "styled-components";

import pick from "./img/section06/pick.png";
import title01 from "./img/section06/title01.png";
import title02 from "./img/section06/title02.png";
const Section06 = (props)=>{
    return(
        <Container>
            <Title y={props.y}>
                <div><img src={title01} alt="문구이미지01" /></div>
                <div><img src={title02} alt="문구이미지02" /></div>
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
position:relative;
`;
const Title = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
    div{
        position:absolute;
        transition:all 1s ease-in-out;

    }
    div:first-child{
        top:6rem;
        // left:15rem;
        left:${props=>props.y > 1400 ? "15rem":"0"};
        opacity:${props=>props.y >1400 ? "1":"0"};
    }
    div:not(:first-child){
        top:22rem;
        left:${props=>props.y > 1430 ? "9rem":"0"};
        opacity:${props=>props.y >1430 ? "1":"0"};
    }
    button{
        position:absolute;
        width:125px;
        padding:.4rem 0;
        border:2px solid #fff;
        border-radius:5px;
        background-color:transparent;
        color:#fff;
        font-weight:bold;
        font-size:1rem;
        left:26%;
        bottom:13rem;
    }
`;

const Img = styled.div`
position:absolute;
right:4rem;
`;