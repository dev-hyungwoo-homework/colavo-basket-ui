import React, { useState } from "react";
import styled from "styled-components";
import { ItemType } from "../../config/type";

type Props = {
  detail: ItemType;
  calculatePrice: React.Dispatch<React.SetStateAction<number>>;
};

export default function ItemRow({ detail, calculatePrice }: Props): React.ReactElement {
  const [count, setCount] = useState(1);

  const handleDecrease = (): void => {
    setCount((prev) => prev - 1);
    calculatePrice((prev) => prev - detail.price);
  };
  const handleIncrease = (): void => {
    setCount((prev) => prev + 1);
    calculatePrice((prev) => prev + detail.price);
  };


  return (
    <Container>
      <TextContainer>
        <p>{detail.name}</p>
        <p>{detail.price * count}원</p>
      </TextContainer>
      <div>
        <button type="button" onClick={handleDecrease}>-</button>
        {count}
        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button type="button">X</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
