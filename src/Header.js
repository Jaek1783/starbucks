import React,{useRef, useEffect} from "react";
import styled from "styled-components";
import logo from "./img/logo/logo.png";
import search from "./img/search_icon.png";
const Header = ()=>{
    const subMenu = [
        {id:1, title:"COFFEE", back: "red"},
        {id:2, title:"MENU", back: "orange"},
        {id:3, title:"STORE", back: "yellow"},
        {id:4, title:"RESPONSIBILITY", back: "green"},
        {id:5, title:"STARBUCKS REWORDS", back: "blue"},
        {id:6, title:"WHAT'S NEW", back: "purple"},
    ];
    const menuList = [
        {title:"커피"},
        {title:"나와 어울리는 커피"},
        {title:"스타벅스 리저브"},
        {title:"에스프레소 음료"},
        {title:"최상의 커피를 즐기는 법"},
        {title:"커피 이야기"},
    ];
    const subMenuRef = useRef(null);
useEffect(()=>{
    const length = subMenuRef.current.children.length;
    for(let i = 0; i < length; i++ ){
        const children = subMenuRef.current.children[i].children[0].style;
        // console.log(children);
        children.height=0;
        children.display=`none`;
    }
},[]);    
    const MouseOver = (e)=>{

        const length = subMenuRef.current.children.length;
        for(let i = 0; i < length; i++ ){
            const children = subMenuRef.current.children[i];
            const childStyle = subMenuRef.current.children[i].children[0].style;
            const check = e.target.dataset.idx === children.dataset.idx;
            if(check === true){
                    childStyle.display=`block`;
                    childStyle.color = `transparent`;
                setTimeout(()=>{
                    childStyle.color = `#fff`;
                    childStyle.height = 500 + "px";
                    console.log(e.target.dataset.idx + " 번 " + childStyle.display);
                },200);
                console.log(e.target.dataset.idx + "번 들어왔어");
            }
            else{
                childStyle.height=0;
                childStyle.display=`none`;
            }
        }
    }
    const MouseLeave = (e)=>{
        const length = subMenuRef.current.children.length;
        for(let i = 0; i < length; i++ ){
            const children = subMenuRef.current.children[i];
            const childStyle = subMenuRef.current.children[i].children[0].style;
            const check = e.target.dataset.idx === children.dataset.idx;
            if(check === true){
                setTimeout(()=>{
                    childStyle.height = 500 + "px";
                    childStyle.height = 0;
                    console.log(e.target.dataset.idx + " 번 " + childStyle.display);
                },200);
                console.log(e.target.dataset.idx + "번 들어왔어");
            }
            else{
                childStyle.height=0;
                childStyle.display=`none`;
            }
        }
    }
    const HeaderLeave = (e)=> {
        const length = subMenuRef.current.children.length;
            for(let i = 0; i < length; i++ ){
            const childStyle = subMenuRef.current.children[i].children[0].style;
            childStyle.height=0;
            setTimeout(()=>{
                childStyle.display=`none`;
            },200);
        }
    }
    return(
        <HeaderStyle>
            <h1><img src={logo} alt="로고" /></h1>
            <div>
                <Gnb>
                    <div>Sign In</div>
                    <div>My Starbucks</div>
                    <div>Customer Service {"&"} Ideas</div>
                    <div>Find a Store</div>
                    <div><img src={search} alt="검색" /></div>
                </Gnb>
                <SubGnb ref={subMenuRef} onMouseLeave={HeaderLeave}>
                    {subMenu.map((l,idx)=>{
                        return(
                            <div key={idx} className="sub" data-idx={idx} onMouseOver={MouseOver} onMouseLeave={MouseLeave} >
                                {l.title}
                                <SubMenu back={l.back} onMouseLeave={HeaderLeave} data-idx={idx}>
                                    {menuList.map((l)=>{
                                        return(
                                            <Menu>
                                                {l.title}
                                            </Menu>
                                        )
                                    })}
                                </SubMenu>
                            </div>
                        )
                    })}
                </SubGnb>
            </div>
        </HeaderStyle>
    )
}; export default Header;

const HeaderStyle = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
z-index:9999;
height:120px;
border-top:2px solid #000;
border-bottom:#ececec;
background-color: #fbfbf1;
display:flex;
justify-content:space-around;
align-items:center;
    h1{ 
        width:75px;
    }
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
`;

const SubMenu = styled.div`
    width:100%;
    position:absolute;
    top:117px;
    // top:0;
    left:0;
    background-color: #2C2A29;
    // z-index:-1;
    transition:all .3s ease-in-out;
    color:#fff;
    display:flex;
    justify-content:space-around;
`;

const Menu = styled.span`
font-weight:bold;

`;