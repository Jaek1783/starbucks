import React,{useRef, useEffect} from "react";
import styled from "styled-components";
import logo from "./img/logo/logo.png";
import search from "./img/search_icon.png";

import SubMenu01 from "./SubMenu01";

const Header = ()=>{
    const subMenu = [
        {id:1, title:"COFFEE", back: "red", desc:<SubMenu01></SubMenu01> },
        {id:2, title:"MENU", back: "orange"},
        {id:3, title:"STORE", back: "yellow"},
        {id:4, title:"RESPONSIBILITY", back: "green"},
        {id:5, title:"STARBUCKS REWORDS", back: "blue"},
        {id:6, title:"WHAT'S NEW", back: "purple"},
    ];
useEffect(()=>{
    const length = subMenuRef.current.children.length;
    for(let i = 0; i < length; i++){
        const children = subMenuRef.current.children[i].children[0];
        children.style.display='none';
        children.style.height=0;
    }
},[]);
    const MouseOver = (e)=>{
        console.log("들어왔어");
        const length = subMenuRef.current.children.length;
        for(let i = 0; i < length; i++){
            if(e.target.dataset.idx === subMenuRef.current.children[i].dataset.idx){
               const check = e.target.dataset.idx === subMenuRef.current.children[i].dataset.idx;
               if(check === true){
                const children = subMenuRef.current.children[i].children[0];
                children.style.display=`block`;
                setTimeout(()=>{
                    children.style.height= 500 + "px";
                },10);
               }
            }
            else{
                const children = subMenuRef.current.children[i].children[0];
                children.style.height=0;
                children.style.display=`none`;
               }
        }
    };

    const MouseLeave = ()=>{
        const length = subMenuRef.current.children.length;
        for(let i = 0; i < length; i++){
            const children = subMenuRef.current.children[i].children[0];
            console.log("stop");
            children.style.height=0;
            setTimeout(()=>{
                children.style.display=`none`;
            },200);
        }

    };
    const subMenuRef = useRef(null);
    return(
        <HeaderStyle  onMouseLeave={MouseLeave}>
            <Container>
            <h1><img src={logo} alt="로고" /></h1>
            <div>
                <Gnb>
                    <div>Sign In</div>
                    <div>My Starbucks</div>
                    <div>Customer Service {"&"} Ideas</div>
                    <div>Find a Store</div>
                    <div><img src={search} alt="검색"/></div>
                </Gnb>
                <SubGnb ref={subMenuRef} onMouseOver={MouseOver}>
                    {subMenu.map((l,idx)=>{
                        return(
                            <div key={idx} className="sub" data-idx={idx}>
                                {l.title}
                                <SubMenu back={l.back} data-idx={idx}>
                                    {l.desc}
                                </SubMenu>
                            </div>
                        )
                    })}
                </SubGnb>
            </div>
            </Container>
        </HeaderStyle>
    )
}; export default Header;

const HeaderStyle = styled.div`
min-width:1440px;
position:fixed;
top:0;
left:0;
width:100%;
z-index:1;
height:120px;
border-top:2px solid #000;
border-bottom:#ececec;
background-color: #fbfbf1;
`;
const Container = styled.div`
    max-width:1410px;
    margin:0 auto;
    h1{ 
        width:75px;
    }
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const Gnb = styled.div`
display:flex;
justify-content:center;
position:relative;
padding:1rem 0 1.5rem;
    div{
        padding:0 1rem;
        font: normal 13px Avenir, Arial, georgia;
    }
    div:not(:last-child){
        border-right: 1px solid #ccc;
    }
    div:last-child{
        position:absolute;
        top:7px;
        right:9.2rem;
        border:1px solid #ccc;
        border-radius:5px;
        padding:.3rem .4rem .2rem;
        background-color: #fff;
        img{
            width:20px;
        }
    }
`;
const SubGnb = styled.div`
display:flex;
    div.sub{
        padding:.5rem 2rem 2rem;
        font: normal 13px Avenir, Arial, georgia;
    }
    div.sub:hover{
        background-color: #2C2A29;
        color:#357d0b;
        text-decoration:underline;
    }
    // div.sub:hover>div{
    //     height:500px;
    //     display:block;
    //     transition:all .3s ease-in-out;
    // }
`;

const SubMenu = styled.div`
    width:100%;
    margin-top:116px;
    position:absolute;
    top:0;
    left:0;
    background-color: #2C2A29;
    z-index:-1;
    transition:all .3s ease-in-out;
    color:#fff;
`;