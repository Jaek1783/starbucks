import React from "react";
import styled from "styled-components";
import logo from "./img/logo/logo.png";
import search from "./img/search_icon.png";
const Header = ()=>{
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
                <SubGnb>
                    <div>COFFEE</div>
                    <div>MENU</div>
                    <div>STORE</div>
                    <div>RESPONSIBILITY</div>
                    <div>STARBUCKS REWORDS</div>
                    <div>WHAT'S NEW</div>
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
z-index:999999;
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
padding-top:1rem;
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
padding:2rem 0;
    div{
        padding:0 2rem;
        font: normal 13px Avenir, Arial, georgia;
    }
`;