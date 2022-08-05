import React from "react";
import styled from "styled-components";

const Slider = ()=>{
    return(
        <Container>
            <div>시스템 개선 및 점검 안내</div>
            <div>개인정보처리방침/ 위치정보 이용약관 개정</div>
            <div>스타벅스 e-gift Card 구매가능 금액 안내</div>
            <div>시스템 개선 및 점검 안내</div>
        </Container>
    )
}; export default Slider;
const Container = styled.div`
    color:#fff;
    font-size:.9rem;
    padding-top:.2rem;
`;