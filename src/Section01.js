import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import main from "./img/main/bg.jpeg";
import main01 from "./img/main/main01.png";
import main02 from "./img/main/main02.png";
import main03 from "./img/main/main03.png";
import mainTitle from "./img/main/mainTitle.png";
const Section01 =()=>{
    const opacityRef = useRef(null);

useEffect(()=>{

    const imgLength = opacityRef.current.children.length;
    let i = 0;
    const timer = setInterval(()=>{
        if(i < imgLength  ){
            i++;
        opacityRef.current.children[i-1].style.opacity="1";
        }
    },500);
    return ()=> clearInterval(timer);
},[]);
    return(
        <Container main={main} ref={opacityRef}>
            <Contents>
                <div className="mainTitle">
                    <p><img src={mainTitle} alt="메인 문구" /></p>
                    <button>자세히보기</button>
                </div>
                <div className="mainImg02 mainImg"><img src={main02} alt="메인 이미지02" /></div>
                <div className="mainImg01 mainImg"><img src={main01} alt="메인 이미지01" /></div>
                <div className="mainImg03 mainImg"><img src={main03} alt="메인 이미지03" /></div>
            </Contents>
        </Container>
    )
}; export default Section01;

const Container = styled.div`
height:770px;
background:no-repeat center url(${props=>props.main});
background-size:cover;
display:flex;
align-items:center;
padding:120px 3rem 0;
position:relative;   
`;

const Contents = styled.div`
transition:all 1s ease-in-out;
opacity:0;
div.mainTitle{
    padding-right:6rem;
    text-align:center;
        button{
            padding:.5rem 2rem;
            margin-top:2rem;
            border:2px solid #fff;
            border-radius:5px;
            background-color:transparent;
            color:#fff;
            font-weight:bold;
            font-size:1rem;
        }
}
div.mainTitle{
    position:absolute;
    top:45%;
    left:300px;
}
div.mainImg{
    position:absolute;
    top:31%;
}
div.mainImg01{
    left:37%;
    // left:700px;
}
div.mainImg02{
    top:37%;
    left:48%;
}
div.mainImg03{
    left:65%;
}


`;