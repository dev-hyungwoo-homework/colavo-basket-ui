import styled from "styled-components";

import StyledButton from "../common/StyledButton";

type Props = {
  amount: number;
};

export default function PaymentFooter({ amount }: Props): React.ReactElement {
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
        <p>{`${amount}원`}</p>
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
