import { useState, useEffect, useRef } from "react";
import TopBarOthers from "../components/topBarOthers"
import BottomBar from "../components/BottomBar";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import ChatArea from "../components/chat"
=======
import styled, { createGlobalStyle } from "styled-components";

const nochat = require('../image/nochat.png');

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #efefef !important;
    height: 100%;
  }
`;

const Div0 = styled.div`
  display:flex;
  justify-content: center;
  flex-direction:column;
  text-align:center;
`;

const Img = styled.img`
  margin-top: 30%;
  margin-left: 10%;
  height: 140px;
  width: 140px;
  
`;

const Div1 = styled.div`
  margin-top: 20px;
  font-size: var(--font-micro);
  color: #828282;
`;
>>>>>>> c133b0013af21b4267ae7592fdcbfcba9fd1ad8f

function ChattingPage() {
  const navigate = useNavigate()
    return (
      <>
      <GlobalStyle/>
      <TopBarOthers title="채팅" redirectLogic={() => {
          navigate("/")
        } }></TopBarOthers>
<<<<<<< HEAD
        <ChatArea></ChatArea>
=======
      <Div0 className="App">
        <div>
        <Img src={nochat}/>
        </div>
        <Div1>현재 진행 중인 채팅이 없습니다.<br></br>
        거래를 시작하여 채팅을 활성화 시켜보세요!</Div1>
      </Div0>
>>>>>>> c133b0013af21b4267ae7592fdcbfcba9fd1ad8f
        <BottomBar></BottomBar>
      </>
    );
  }
  
  export default ChattingPage;