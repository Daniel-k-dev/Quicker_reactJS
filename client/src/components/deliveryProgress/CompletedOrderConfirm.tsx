import { ExecutionComponentProps } from "../../pages/ExecutionPage";
import { useClientConfirmState } from "../../pages/ClientConfirmPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmBtn from "../confirmBtn";
import { WriteTransactionToBlockchain } from "../../utils/ExecuteOrderFromBlockchain";
import BottomConfirmBtn from "../bottomconfirmBtn";
import styled, { createGlobalStyle } from "styled-components";
import Lottie from "lottie-react";
import OrderDelivery from "../../Lottie/89626-order-delivery.json";

export default function CompletedOrderConfirm({
  orderNum,
}: ExecutionComponentProps) {
  const { setTitle } = useClientConfirmState();
  const navigate = useNavigate();

  const confirmLogic = async () => {
    if (orderNum !== undefined) {
      const wttb = new WriteTransactionToBlockchain(orderNum);
      try {
        const result = await wttb.completeOrder();
        console.log(result);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    setTitle("배송결과");
  }, []);

  return (
    <>
<GlobalStyle/>
        <Div0>
            <Div1>
            <Btwal>배송완료</Btwal> 
            </Div1>
        </Div0>
        <Divback>
            <Div2>
                <Lottie animationData={OrderDelivery}/>
            </Div2>
        </Divback>
        <Div3>
        <Div5>
            <Span01>
              배송이 완료되었습니다.
            </Span01>
        </Div5>
        </Div3>
      <BottomConfirmBtn
      isDisabled={false}
      content="확인"
      confirmLogic={async () => {
        await confirmLogic();
      }}
    />
    </>
  );
}

const Div0 = styled.div`
    display: flex;
    height: 3.875rem;
`;

const Div1 = styled.div`
    flex: 1 1 100%;
`;

const Divback = styled(Div0)`
    height: auto;
    justify-content: center;
`;

const Div3 = styled.div`
    display: flex;
    justify-content: center;
`;

const Div2 = styled.div`
    display: flex;
    height: 400px;
    width: 95%;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
`

const Btwal = styled.button`
    width: 100%;
    height: 3.25rem;
    font-size: var(--font-md);
    font-weight: bold;
    border: 0rem;
    outline: #efefef;
    background-color: #ffffff;
    padding-left: 0.625rem;
    text-align: center;
    color: #28A745;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e6e6e6 !important;
    height: 100%;
  }
`;

const Span01 = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #828282;
`;

const Div5 = styled.div`
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #0D6EFD;
    font-weight: bold;
    text-align: center;
    background-color: #ffffff;
    width: 95%;
    padding: 10px 20px 20px 20px;
    border-radius: 0 0 10px 10px;
`;