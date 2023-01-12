import styled from "styled-components";

export default function PaymentHeader(): React.ReactElement {
  return (
    <HeaderContainer>
      <h1>결제 입력</h1>
      <TextContainer>
        <p>안형우</p>
        <p>2023년 1월 14일</p>
      </TextContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
