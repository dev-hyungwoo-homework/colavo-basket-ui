import styled from "styled-components";

import RowContainer from "./shared/RowContainer";

import { DiscountType, ChangeInputType } from "../../config/type";

type Props = {
  id: string;
  detail: DiscountType;
  onCheckInput: (itemId: string, isChecked: boolean) => void;
  initialCheckStaus: boolean;
};

export default function DiscountRow({
  id,
  detail,
  onCheckInput,
  initialCheckStaus = false,
}: Props): React.ReactElement {
  const handleCheckInput = (event: ChangeInputType): void => {
    const { target } = event;

    onCheckInput(id, target.checked);
  };

  return (
    <RowContainer id={id} inputCheckedStatus={initialCheckStaus} onChangeInput={handleCheckInput}>
      <Name>{detail.name}</Name>
      <Rate>{Math.floor(detail.rate * 100)}%</Rate>
    </RowContainer>
  );
}

const Name = styled.p`
  font-size: 18px;
`;

const Rate = styled.p`
  font-size: 16px;
  color: gray;
`;
