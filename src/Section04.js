import React from "react";
import styled from "styled-components";

import bg from "./img/section04/bg.jpeg";
import beans from "./img/section04/beans.png";
import beansText from "./img/section04/beansText.png";
const Section04 = (props)=> {
    return(
        <Container bg={bg} y={props.y}>
            <div className="beans"><img src={beans} alt="커피콩" /></div>
            <div className="beansText">
                <img src={beansText} alt="문구 이미지" />
                <button>자세히보기</button>
            </div>
        </Container>
    )
}; export default Section04;

const Container = styled.div`
    height:500px;
    background:no-repeat center url(${props=>props.bg});
    background-size:cover;
    position:relative;
        div{
            opacity:${props=>props.y > 330 ? "1":"0"};
            transition:all 1s ease-in-out;
        }
        .beans{
            width:10rem;
            position:absolute;
            top:18%;
            left:${props=>props.y >330 ? "26%":"0"};
        }
        .beansText{
            position:absolute;
            top:30%;
            right:${props=>props.y >330 ? "15%":"0"};
            width:350px;
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
        }
`;