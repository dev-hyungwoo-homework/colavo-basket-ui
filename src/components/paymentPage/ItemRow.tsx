import styled from "styled-components";

import { ItemStateType, ItemType } from "../../config/type";

type Props = {
  id: string;
  detail: ItemType;
  prevCount: number;
  handleItemCount: React.Dispatch<React.SetStateAction<ItemStateType>>;
};

export default function ItemRow({
  id,
  detail,
  prevCount,
  handleItemCount,
}: Props): React.ReactElement {
  // TODO: 로직이 많이 중복된다..뭔가 하나로 만들 수 있을 것 같은데.. 고민해보기!

  const handleDecrease = (): void => {
    handleItemCount((prev) => {
      if (prev[id] <= 1) return prev;

      const copiedState = { ...prev };
      copiedState[id] -= 1;

      return copiedState;
    });
  };
  const handleIncrease = (): void => {
    handleItemCount((prev) => {
      if (prev[id] >= 99) return prev;

      const copiedState = { ...prev };
      copiedState[id] += 1;

      return copiedState;
    });
  };

  return (
    <Container>
      <TextContainer>
        <p>{detail.name}</p>
        <p>{detail.price * prevCount}원</p>
      </TextContainer>
      <div>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
        {prevCount}
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
