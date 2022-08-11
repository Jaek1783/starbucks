import React from "react";
import styled from "styled-components";

const SubMenu02 = ()=>{
    const list = [
        {title:"음료", desc01 : "콜드 브루", desc02 :"브루드 커피", desc03 : "에스프레소", desc04 : "프라푸치노", desc05 : "블렌디드", desc06 : "스타벅스 리프레서", desc07 : "스타벅스 피지오"  },
        {title:"푸드", desc01 : "", desc02 :"", desc03 : "", desc04 : "", desc05 : "", desc06 : "", desc07 : ""  },
        {title:"상품", desc01 : "RESERVE MAGAZINE", desc02 :"", desc03 : "", desc04 : "", desc05 : "", desc06 : "", desc07 : ""  },
        {title:"카드", desc01 : "도피오", desc02 :"에스프레소 마키아또", desc03 : "아메리카노", desc04 : "마키아또", desc05 : "카푸치노", desc06 : "라떼", desc07 : "모카" },
        {title:"메뉴 이야기", desc01 : "커피 프레스", desc02 :"푸어 오버", desc03 :"아이스 푸어 오버", desc04 : "커피 메이커", desc05 : "리저브를 매장에서 다양하게 즐거는 법", desc06 : "", desc07 : ""  },
    ];
    return(
        <Container>
            {list.map((l,idx)=>{
                return(
                    <div key={idx} className="title">
                        <p>{l.title}</p>
                            <div className="text">
                                <span>{l.desc01}</span>
                                <span>{l.desc02}</span>
                                <span>{l.desc03}</span>
                                <span>{l.desc04}</span>
                                <span>{l.desc05}</span>
                                <span>{l.desc06}</span>
                                <span>{l.desc07}</span>
                            </div>
                    </div>
                )
            })}
        </Container>
    )
}; export default SubMenu02;

const Container = styled.div`
    max-width:1180px;
    margin:0 auto;
    padding-top:1rem;
    display:flex;
    flex-wrap: wrap;
    font-weight:bold;
    font-size:.9rem;
        div.title{
            width:18%;
            height:0;
            margin-left:1rem;
            margin-bottom:10rem;
            background-color:#ccc;

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