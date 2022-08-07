import React,{useRef, useState, useEffect} from "react";
import styled from "styled-components";

const Slider = ()=>{
 const slideRef = useRef(null);
 const numRef = useRef(0);
 const [slide, setSlide] = useState(0);
useEffect(()=>{
    const timer = setInterval(()=>{
        if(numRef.current < 3){
            setSlide(numRef.current += 1);
            slideRef.current.style.marginTop = numRef.current * -25 + "px";
            slideRef.current.style.transition = "all .5s ease-in-out";
        }
        if(numRef.current === 3){
            setTimeout(()=>{
                slideRef.current.style.transition = "none";
                setSlide(numRef.current = 0);
                slideRef.current.style.marginTop = 0 + "px";
            },500);
        }
    },3000);
    return ()=>clearInterval(timer);
},[]);

    return(
        <Container ref={slideRef} numRef={numRef}>
            <div>시스템 개선 및 점검 안내</div>
            <div>개인정보처리방침/ 위치정보 이용약관 개정</div>
            <div>스타벅스 e-gift Card 구매가능 금액 안내</div>
            <div>시스템 개선 및 점검 안내</div>
        </Container>
    )
}; export default Slider;
const Container = styled.div`
    color:#fff;
    font-size:1rem;
    // margin-top:-20.500px;
    margin-top:0;
    div{
        padding-bottom:5px;
    }
`;