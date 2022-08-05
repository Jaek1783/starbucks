import React from "react";
import styled from "styled-components";

import bg from "./img/section08/bg.jpeg";
import img01 from "./img/section08/img1.png";
import img02 from "./img/section08/img2.png";
import img03 from "./img/section08/img3.png";
import img04 from "./img/section08/img4.png";
import txt01 from "./img/section08/text01.png";
import txt02 from "./img/section08/text02.png";
const Section08 = ()=>{
    return(
        <Container bg={bg}>
            <div className="visual">
                <div className="img01"><img src={img01} alt="비쥬얼 이미지01" /></div>
                <div className="img02"><img src={img02} alt="비쥬얼 이미지02" /></div>
                <div className="img03"><img src={img03} alt="비쥬얼 이미지03" /></div>
                <div className="img04"><img src={img04} alt="비쥬얼 이미지04" /></div>
            </div>
            <div className="text">
                <div><img src={txt01} alt="문구 이미지01" /></div>
                <div><img src={txt02} alt="문구 이미지02" /></div>
                <button>매장 찾기</button>
            </div>
        </Container>
    )
};export default Section08;

const Container = styled.div`
width:100%;
height:400px;
background:no-repeat center url(${props=>props.bg});
background-size:cover;
display:flex;
position:relative;
overflow:hidden;
div.visual{
    div{
        position:absolute;
    }
}

.img01{
    left:19%;
}
.img02{
    top:37%;
    left:35%;
}
.img03{
    top:-15%;
    left:44%;
}
.img04{
    bottom:0;
    right:10%;
}

.text{
    
    position:absolute;
    top:6rem;
    right:13%;
    div:first-child{
        padding-bottom:1rem;
    }
    button{
        position:absolute;
        bottom:-70px;
        left:0;
        padding:.4rem 1.5rem;
        border:2px solid #000;
        border-radius:3px;
        background-color:transparent;
        color:#000;
        font-weight:bold;
        font-size:1rem;
    }
}
`;