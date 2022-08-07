import {useRef, useEffect, useState} from "react";
import './App.css';
import styled from 'styled-components';

import Header from './Header';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';
import Section05 from './Section05';
import Section06 from './Section06';
import Section07 from './Section07';
import Section08 from './Section08';

import bg from "./img/section06/bg.jpeg";

function App() {
  const scrollRef = useRef(null);
  const useScroll = ()=>{
    const [state, setState] = useState({ x:0, y:0 });
    const onScroll = (e)=>{
      setState({ y : window.scrollY });
  }
    useEffect(()=>{
      window.addEventListener("scroll", onScroll);
      return()=>window.removeEventListener('scroll',onScroll);
    },[]);
    return state;
  }

  const { y } = useScroll();
  return (
    <div className="App">
      <Background bg={bg}></Background>
      <Header/>
      <div ref={scrollRef}>
        <Section01/>
        <Section02/>
        <Section03/>
        <Section04  y={y}/>
        <Section05/>
        <Section06 y={y}/>
        <Section07/>
        <Section08 y={y}/>
      </div>
      <Footer>이 사이트는 포트폴리오를 위해 제작되었습니다.</Footer>
    </div>
  );
}

export default App;

const Background = styled.div`
position:fixed;
top:left:0;
width:100%;
height:100vh;
z-index:-1;
background:no-repeat center url(${props=>props.bg});
background-size:cover;
`;

const Footer = styled.div`
font-size:1.2rem;
font-weight:bold;
height:200px;
background-color:#1c1c1f;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
`;