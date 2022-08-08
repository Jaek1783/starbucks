import React from "react";
import styled from "styled-components";

const SubMenu01 = ()=>{
    const list = [
        {title:"커피", desc01 : "스타벅스 원두", desc02 :"스타벅스 비아", desc03 : "스타벅스앳홈 by 캡슐", desc04 : "", desc05 : "", desc06 : "", desc07 : ""  },
        {title:"나와 어울리는 커피", desc01 : "", desc02 :"", desc03 : "", desc04 : "", desc05 : "", desc06 : "", desc07 : ""  },
        {title:"스타벅스 리저브", desc01 : "RESERVE MAGAZINE", desc02 :"", desc03 : "", desc04 : "", desc05 : "", desc06 : "", desc07 : ""  },
        {title:"에스프레소 음료", desc01 : "도피오", desc02 :"에스프레소 마키아또", desc03 : "아메리카노", desc04 : "마키아또", desc05 : "카푸치노", desc06 : "라떼", desc07 : "모카" },
        {title:"최상의 커피를 즐기는 법", desc01 : "커피 프레스", desc02 :"푸어 오버", desc03 :"아이스 푸어 오버", desc04 : "커피 메이커", desc05 : "리저브를 매장에서 다양하게 즐거는 법", desc06 : "", desc07 : ""  },
        {title:"커피 이야기", desc01 : "농장에서 우리의 손으로", desc02 :"최상의 아라비카 원두", desc03 : "스타벅스 로스트 스펙트럼", desc04 : "스타벅스 디카페인", desc05 : "클로버 커피 추출 시스템", desc06 : "", desc07 : "" },
    ];
    return(
        <Container data-idx="0">
            {list.map((l,idx)=>{
                return(
                    <div key={idx} className="title" data-idx = "0">
                        <div data-idx = "0">
                            {l.title}
                            <div data-idx = "0" className="text">
                                <span>{l.desc01}</span>
                                <span>{l.desc02}</span>
                                <span>{l.desc03}</span>
                                <span>{l.desc04}</span>
                                <span>{l.desc05}</span>
                                <span>{l.desc06}</span>
                                <span>{l.desc07}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Container>
    )
}; export default SubMenu01;

const Container = styled.div`
    max-width:1180px;
    height:300px;
    margin:0 auto;
    padding-top:1rem;
    display:flex;
    flex-wrap: wrap;
    font-weight:bold;
    font-size:.9rem;
        div.title{
            width:18%;
            margin-left:1rem;
            margin-bottom:1rem;
            // text-align:center;
            div.text{
                font-size:.8rem;
                font-weight:normal;
                padding-top:.5rem;
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                span{
                    padding-bottom:.3rem;
                    color:#eee;
                }
            }
        }

`;