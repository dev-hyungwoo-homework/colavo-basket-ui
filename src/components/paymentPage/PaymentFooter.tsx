import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

import StyledButton from "../common/StyledButton";

import applyCurrencyCode from "../../utils/applyCurrencyCode";

import { ResultType } from "../../config/type";


type Props = {
  totalPrice: number;
};

export default function PaymentFooter({ totalPrice }: Props): React.ReactElement {
  const { currency_code } = useRouteLoaderData("main") as ResultType;

  const currencyAppliedPrice = applyCurrencyCode(currency_code, totalPrice);

  const handleClick = (): void => {
    alert(`
      부족한 작업물 봐주셔서 진심으로 감사드립니다!
      좋은 하루 되세요 :)
    `);
  };

  return (
    <FooterContainer>
      <PriceContainer>
        <p>합계</p>
        <p>{`${currencyAppliedPrice}${currency_code === "KRW" ? "원" : "USD"}`}</p>
      </PriceContainer>
      <StyledButton text="다음" onClick={handleClick} />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
`;
