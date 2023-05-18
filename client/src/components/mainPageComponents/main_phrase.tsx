import { BsChevronRight } from "react-icons/bs";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Web3Button } from "@web3modal/react";
import { useVerificationStore } from "../../App";
import { useAccount } from "wagmi";
import { SendDataToAndroid } from "../../utils/SendDataToAndroid";
import { checkIsDelivering } from "../../utils/ExecuteOrderFromBlockchain";

const Div0 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Sp0 = styled.div`
  padding: var(--padding) var(--padding) 0 var(--padding);
  font-size: var(--font-md);
  font-weight: bold;
`;

const Sp1 = styled.span`
  padding-top: var(--padding);
  padding-left: var(--padding);
  padding-bottom: var(--padding);
  font-size: var(--font-md);
  font-weight: bold;
`;

const Sp2 = styled.span`
  padding-right: var(--padding);
`;

const Bt0 = styled.button`
  border: none;
  box-shadow: none;
  outline: none;
  background-color: var(--white-color);
  font-size: var(--font-small);
  margin-left: 0.313rem;
`;

type isConnectToWallet = {
  isConnect: boolean;
};

function Main_phrase({ isConnect }: isConnectToWallet) {
  const navigate = useNavigate();
  const { isMember, setIsMember, userName }  = useVerificationStore();
  const { address } = useAccount()
  
  const sdta = new SendDataToAndroid(address)
  const testVal:boolean = true
  return (
    <>
      {isConnect ? (
        isMember ? (
          <section>
            <Div0>
              <Sp0>{userName}님!<br/></Sp0>
            </Div0>
            <Div1>
              <Sp1>현재 배송원이 물건을 배송중입니다.
              <Bt0 onClick={() => {
                    navigate("/");
                  }}>
                    <BsChevronRight />
                </Bt0>
                <button onClick={()=> navigate("/execution/205")}>임시배송페이지이동버튼</button>
                <button onClick={()=> window.location.href = `quicker://link?walletAddress=${address?.toString()}`}>지갑주소앱으로전송</button>
                <button onClick={()=> sdta.sendIsDelivering(true)}>배송여부true전송</button>
                <button onClick={()=> sdta.sendIsDelivering(false)}>배송여부false전송</button>
              </Sp1>
            </Div1>
          </section>
        ) : (
          <section>
            <Div0>
              <Sp0 onClick={() => {
                    navigate("/signUp");
                  }}>안녕하세요!<br/></Sp0>
            </Div0>
            <Div1>
              <Sp1 onClick={() => {
                    navigate("/signUp");
                  }}>회원가입을 진행해주세요.
              </Sp1>
            </Div1>
          </section>
        )
      ) : (
        <section>
        <Div0>
          <Sp0>
            안녕하세요!
            <br />
          </Sp0>
        </Div0>
        <Div1>
          <Sp1>지갑을 연결해주세요.</Sp1>
          <Sp2>
            <Web3Button icon="hide" label="지갑연결" balance="hide" />
            <button onClick={()=> navigate("/execution/205")}>임시배송페이지이동버튼</button>
          </Sp2>
          
        </Div1>
      </section>
      )}
    </>
  );
}

export default Main_phrase;
