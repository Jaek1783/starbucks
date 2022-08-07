import React from "react";
import styled from "styled-components";

import bg from "./img/section08/bg.jpeg";
import img01 from "./img/section08/img1.png";
import img02 from "./img/section08/img2.png";
import img03 from "./img/section08/img3.png";
import img04 from "./img/section08/img4.png";
import txt01 from "./img/section08/text01.png";
import txt02 from "./img/section08/text02.png";
const Section08 = (props)=>{
    return(
        <Container bg={bg}>
            <div className="visual">
                <div className="img01"><img src={img01} alt="비쥬얼 이미지01" /></div>
                <div className="img02"><img src={img02} alt="비쥬얼 이미지02" /></div>
                <div className="img03"><img src={img03} alt="비쥬얼 이미지03" /></div>
                <div className="img04"><img src={img04} alt="비쥬얼 이미지04" /></div>
            </div>
            <Text y={props.y}>
                <div><img src={txt01} alt="문구 이미지01" /></div>
                <div><img src={txt02} alt="문구 이미지02" /></div>
                <button>매장 찾기</button>
            </Text>
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
`;
const Text = styled.div`
    div{
        position:absolute;
        opacity:${props=>props.y > 2472 ? "1": "0"};
        transition:all 1s ease-in-out;

    }
div:first-child{
    top:6rem;
    // right:13%;
    right:${props=>props.y > 2472 ? "13" : "7"}%;
}
div:not(:first-child){
    top:10.5rem;
    // right:14.4%;
    right:${props=>props.y > 2472 ? "14.4" : "5"}%;
}
button{
    position:absolute;
    bottom:25%;
    // right:27rem;
    right:${props=>props.y > 2472 ? "27" : "20"}rem;
    opacity:${props=>props.y > 2472 ? "1": "0"};
    transition:all 1s ease-in-out;
    padding:.4rem 2rem;
    border:2px solid #000;
    border-radius:3px;
    background-color:transparent;
    color:#000;
    font-weight:bold;
    font-size:1rem;
}
`;