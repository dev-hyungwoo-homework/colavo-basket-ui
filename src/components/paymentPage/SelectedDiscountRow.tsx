import styled from "styled-components";

import {
  DiscountedItemsStateType,
  DiscountType,
  ItemStateType,
  DiscountStateType,
} from "../../config/type";

type Props = {
  id: string;
  detail: DiscountType;
  savedDiscounts: DiscountStateType;
  discountedItems: DiscountedItemsStateType;
  savedItems: ItemStateType;
  onChangeDiscount: React.Dispatch<React.SetStateAction<DiscountStateType>>;
  onChangeDiscountedItems: React.Dispatch<React.SetStateAction<DiscountedItemsStateType>>;
  onEdit: (id: string) => void;
};

export default function SelectedDiscountRow({
  id,
  detail,
  discountedItems,
  savedDiscounts,
  savedItems,
  onChangeDiscount,
  onChangeDiscountedItems,
  onEdit,
}: Props): React.ReactElement {
  const { name, rate } = detail;
  const discountedItemsArray = Array.from(discountedItems[id]);
  const discountPercentage = Math.floor(rate * 100);

  const discountedPriceSum = discountedItemsArray
    .map((id) => [savedItems[id]?.price, savedItems[id]?.count])
    .reduce((acc, [price, count]) => {
      return (acc += Math.floor(price * count * rate));
    }, 0);

  const handleDeleteDiscount = (): void => {
    const newState = { ...savedDiscounts };
    const newdiscountedItems = { ...discountedItems };

    delete newState[id];
    delete newdiscountedItems[id];

    onChangeDiscount(newState);
    onChangeDiscountedItems(newdiscountedItems);
  };

  return (
    <Container>
      <TextContainer>
        <p>{`${name} (${discountPercentage}%)`}</p>
        <p>{`적용 메뉴: ${discountedItemsArray.map((id) => savedItems[id]?.name).join(" / ")}`}</p>
        <p>{`- ${discountedPriceSum}원`}</p>
      </TextContainer>
      <ButtonContainer>
        <EditButton type="button" onClick={(): void => onEdit(id)}>
          수정
        </EditButton>
        <CloseButton type="button" onClick={handleDeleteDiscount}>
          X
        </CloseButton>
      </ButtonContainer>
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

const EditButton = styled.button`
  align-self: center;
  padding: 14px;
  border-radius: 10px;
  background-color: #f7f7f7;
  font-size: 18px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CloseButton = styled.button`
  margin-left: 40px;
  font-size: 20px;
  cursor: pointer;
`;
