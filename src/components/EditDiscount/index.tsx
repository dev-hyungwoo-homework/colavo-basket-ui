import { useState } from "react";

import MenuContainer from "../menu/shared/MenuContainer";
import RowContainer from "../menu/shared/RowContainer";

import {
  ChangeInputType,
  DiscountedItemsStateType,
  DiscountStateType,
  DiscountType,
  ItemType,
} from "../../config/type";

type Props = {
  discountedItems: DiscountedItemsStateType;
  editTargetId: string;
  onChangeDiscountedItems: React.Dispatch<React.SetStateAction<DiscountedItemsStateType>>;
  savedItemsList: [string, ItemType][];
  savedDiscounts: DiscountStateType;
  itemData: { [key: string]: ItemType };
  discountData: { [key: string]: DiscountType };
  onSaveDiscountItem: (id: string, set: Set<string>) => void;
  onClickCloseButton: () => void;
};

export default function EditDiscount({
  discountedItems,
  editTargetId,
  savedItemsList,
  discountData,
  onSaveDiscountItem,
  onClickCloseButton,
}: Props): React.ReactElement {
  const [currentEditSet, setCurrentEditSet] = useState<Set<string>>(discountedItems[editTargetId]);

  const { name, rate } = discountData[editTargetId];

  const handleChangeInput = (event: ChangeInputType): void => {
    const { target } = event;
    const newSet = new Set(currentEditSet);

    if (target.checked) {
      newSet.add(target.id);
    } else {
      newSet.delete(target.id);
    }

    setCurrentEditSet(newSet);
  };

  return (
    <MenuContainer
      title="할인 메뉴 수정"
      onClickCloseButton={onClickCloseButton}
      onSaveData={(): void => onSaveDiscountItem(editTargetId, currentEditSet)}
    >
      <header>{`${name} (${Math.floor(rate * 100)}%)`}</header>
      <>
        {savedItemsList.map(([itemId, { name, count, price }]) => {
          const discountAmount = Math.floor(price * count * rate);

          return (
            <RowContainer
              key={itemId}
              id={itemId}
              inputCheckedStatus={discountedItems[editTargetId].has(itemId) ? true : false}
              onChangeInput={handleChangeInput}
            >
              <p>{name}</p>
              <p>{`- ${discountAmount}원`}</p>
            </RowContainer>
          );
        })}
      </>
    </MenuContainer>
  );
}
