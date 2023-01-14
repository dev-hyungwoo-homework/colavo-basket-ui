import React from "react";
import styled from "styled-components";

import { ChangeInputType, ItemType } from "../../config/type";
import RowContainer from "./shared/RowContainer";

type Props = {
  id: string;
  detail: ItemType;
  handleCheck: (itemId: string, isChecked: boolean) => void;
  initialCheckStaus: boolean;
};

export default function TreatmentRow({
  id,
  detail,
  handleCheck,
  initialCheckStaus = false,
}: Props): React.ReactElement {
  const handleCheckInput = (event: ChangeInputType): void => {
    const { target } = event;

    handleCheck(id, target.checked);
  };

  return (
    <RowContainer id={id} inputCheckedStatus={initialCheckStaus} onChangeInput={handleCheckInput}>
      <Name>{detail.name}</Name>
      <Price>{detail.price}원</Price>
    </RowContainer>
  );
}

const Name = styled.p`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 16px;
  color: gray;
`;
