import styled from "styled-components";

import { ItemStateType, ItemType, DiscountedItemsStateType } from "../../config/type";

type Props = {
  id: string;
  detail: ItemType;
  onChangeItem: React.Dispatch<React.SetStateAction<ItemStateType>>;
  onChangeDiscountedItems: React.Dispatch<React.SetStateAction<DiscountedItemsStateType>>;
};

export default function SelectedItemRow({
  id,
  detail,
  onChangeItem,
  onChangeDiscountedItems,
}: Props): React.ReactElement {
  const { name, count, price } = detail;

  const handleDecrease = (): void => {
    onChangeItem((prev) => {
      if (prev[id].count <= 1) return prev;

      const copiedState = { ...prev };
      copiedState[id].count -= 1;

      return copiedState;
    });
  };
  const handleIncrease = (): void => {
    onChangeItem((prev) => {
      if (prev[id].count >= 99) return prev;

      const copiedState = { ...prev };
      copiedState[id].count += 1;

      return copiedState;
    });
  };
  const handleDeleteItem = (): void => {
    onChangeDiscountedItems((prev) => {
      const newDiscountedItems: DiscountedItemsStateType = {};

      Object.entries(prev).forEach(([discountId, set]) => {
        set.delete(id);
        newDiscountedItems[discountId] = set;
      });

      return newDiscountedItems;
    });

    onChangeItem((prev) => {
      const newState = { ...prev };

      if (newState.hasOwnProperty(id)) {
        delete newState[id];

        return newState;
      }

      return prev;
    });
  };

  return (
    <Container>
      <TextContainer>
        <p>{name}</p>
        <p>{price * count}원</p>
      </TextContainer>
      <CounterContainer>
        <CalculateButton type="button" onClick={handleDecrease}>
          -
        </CalculateButton>
        <Count>{count}</Count>
        <CalculateButton type="button" onClick={handleIncrease}>
          +
        </CalculateButton>
        <CloseButton type="button" onClick={handleDeleteItem}>
          X
        </CloseButton>
      </CounterContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  border-bottom: 1px solid lightgray;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Count = styled.p`
  padding: 0 20px 0 20px;
`;

const CalculateButton = styled.button`
  background-color: #f7f7f7;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
`;
