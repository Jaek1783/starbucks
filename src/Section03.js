import React from "react";
import styled from "styled-components";

import rewards from "./img/logo/rewards.png"; 
const Section03 = ()=>{
    return(
        <Container>
            <div className="rewardsImg"><img src={rewards} alt="리워드 로고" /></div>
            <Rewards>
                <div className="rewardsContainer">
                    <div>
                        <span className="rewardsTitle">스타벅스만의 특별한 혜택, 스타벅스 리워드</span>
                        <span className="rewardsSubTitle">스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요.</span>
                        <span className="rewardsSubTitle">스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.</span>
                    </div>
                    <Btn>
                        <button className="join">회원가입</button>
                        <button>로그인</button>
                    </Btn>
                </div>
                <div className="joinContainer">
                    <div>
                        <span>회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</span>
                        <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span>
                    </div>
                        <button className="eGift">e-gift Card 선물하기</button>
                </div>
            </Rewards>
        </Container>
    )
}; export default Section03;

const Container = styled.div`
height:15rem;
background-color: #203e29;
display:flex;
justify-content:center;
align-items:center;
    div.rewardsImg{
        width:180px;
        margin-right:2.5rem;
    }
`;
const Rewards = styled.div`
    width:810px;
    color:#fff;
    padding-top:1rem;
    div.rewardsContainer{
        display:flex;
        border-bottom:.5px solid #ccc;
        padding-bottom:1rem;
        span{
            display:flex;
            flex-direction:column;
        }
        .rewardsTitle{
            font-weight:bold;
            font-size:1.8rem;
            padding-bottom:1rem;
        }
        .rewardsSubTitle{
            font-weight:bold;
            font-size:1.2rem;
        }
    }
    div.joinContainer{
        padding-top:1rem;
        display:flex;
        font-weight:bold;
        font-size:.9rem;
        div{
            display:flex;
            flex-direction:column;
        }
        button{
            margin-left:3.5rem;
            padding:0 2rem;
            font-size:1rem;
            color:#fff;
            background-color:transparent;
            border:2px solid #fff;
            border-radius:5px;
        }
    }
`;
const Btn = styled.div`
display:flex;
align-items:flex-end;
padding-left:5rem;
    button{
        padding:.5rem 1.5rem;
        color:#fff;
        font-weight:bold;
        font-size:1rem;
        border:2px solid #fff;
        background-color:transparent;
        border-radius:5px;
        margin-right:10px;
    }
    .join{
        border:2px solid #235732;
        background-color: #235732;
    }
`;