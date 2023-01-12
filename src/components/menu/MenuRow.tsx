import React, { useState } from "react";
import styled from "styled-components";

import { ChangeInputType, ItemType } from "../../config/type";

type Props = {
  itemId: string;
  item: ItemType;
  handleCheck: (itemId: string, isChecked: boolean) => void;
  initialCheckStaus: boolean;
};

export default function MenuRow({
  itemId,
  item,
  handleCheck,
  initialCheckStaus = false,
}: Props): React.ReactElement {
  const [checked, setChecked] = useState(initialCheckStaus);

  const handleCheckInput = (event: ChangeInputType): void => {
    const { target } = event;

    setChecked(!checked);
    handleCheck(target.id, target.checked);
  };

  return (
    <Container>
      <NameWrapper>
        <Name>{item.name}</Name>
        <Price>{item.price}원</Price>
      </NameWrapper>
      <InputWrapper>
        <Input
          type="checkbox"
          id={itemId}
          checked={checked}
          onChange={(event: ChangeInputType): void => handleCheckInput(event)}
        />
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0 6px;
`;

const Name = styled.p`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 16px;
  color: gray;
`;

const InputWrapper = styled.div`
  align-self: center;
  padding: 0 12px 0 22px;
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
