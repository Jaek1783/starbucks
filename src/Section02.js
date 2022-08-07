import React from "react";
import styled from "styled-components";
import Slider from "./Section02_Slider";

import downBtn from "./img/section02/down.png";
const Section02 = ()=>{
    return(
        <Container>
            <div className="info">
                <div>공지사항</div>
                <SliderContainer>
                    <Slider/>
                </SliderContainer>
                <div className="plus">+</div>
            </div>
            <Promotion>
                <div>스타벅스 프로모션</div>
                <div><img src={downBtn} alt="다운버튼" /></div>
            </Promotion>
        </Container>
    )
}; export default Section02;

const Container = styled.div`
display:flex;
    div.info{
        width:50%;
        height:4rem;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#000;
        color:#ccc;
        font-weight:bold;
        font-size:1.1rem;
        position:relative;
        div.plus{
            position:absolute;
            right:20px;
            padding:2px 10px 5px;
            border-radius:50%;
            border:1px solid #fff;
            font-weight:bold;
            font-size:1.5rem;
        }
    }
`;

const SliderContainer = styled.div`
height:1.5rem;
overflow:hidden;
padding:0 1rem;
`;
const Promotion = styled.div`
width:50%;
    display:flex;
    align-items:center;
    font-weight:bold;
    font-size:1.1rem;
    background-color: #fbfbf1;
    div:first-child{
        padding:0 4rem;
    }
`;