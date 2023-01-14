import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

import SelectedItemRow from "./SelectedItemRow";
import SelectedDiscountRow from "./SelectedDiscountRow";
import Modal from "../common/Modal";
import EditDiscount from "../EditDiscount";

import useModal from "../../hooks/useModal";

import {
  DiscountedItemsStateType,
  DiscountStateType,
  ItemStateType,
  ResultType,
} from "../../config/type";

type Props = {
  savedItems: ItemStateType;
  savedDiscounts: DiscountStateType;
  discountedItems: DiscountedItemsStateType;
  onChangeItem: React.Dispatch<React.SetStateAction<ItemStateType>>;
  onChangeDiscount: React.Dispatch<React.SetStateAction<DiscountStateType>>;
  onChangeDiscountedItems: React.Dispatch<React.SetStateAction<DiscountedItemsStateType>>;
};

export default function PaymentMain({
  savedItems,
  savedDiscounts,
  discountedItems,
  onChangeItem,
  onChangeDiscount,
  onChangeDiscountedItems,
}: Props): React.ReactElement {
  const [editDiscountId, setEditDiscountId] = useState("");

  const { items: itemData, discounts: discountData } = useRouteLoaderData("main") as ResultType;

  const { isOpen, toggleModal } = useModal();

  const itemList = Object.entries(savedItems);

  const handleOpenEditModal = (id: string): void => {
    setEditDiscountId(id);
    toggleModal();
  };
  const handleCloseEditModal = (): void => {
    onChangeDiscount((prev) => prev);
    toggleModal();
  };
  const handleSaveEditedDiscount = (id: string, set: Set<string>): void => {
    const newDiscountedItems: DiscountedItemsStateType = { ...discountedItems };

    newDiscountedItems[id] = set;

    onChangeDiscountedItems(newDiscountedItems);
    toggleModal();
  };

  return (
    <MainContainer>
      <SubTitle>메뉴</SubTitle>
      {Object.entries(savedItems).map(([id, item]) => (
        <SelectedItemRow
          key={id}
          id={id}
          detail={item}
          onChangeItem={onChangeItem}
          onChangeDiscountedItems={onChangeDiscountedItems}
        />
      ))}

      <SubTitle>할인</SubTitle>
      {Object.entries(savedDiscounts).map(([id, discount]) => {
        return (
          <SelectedDiscountRow
            key={id}
            id={id}
            detail={discount}
            savedDiscounts={savedDiscounts}
            discountedItems={discountedItems}
            savedItems={savedItems}
            onChangeDiscount={onChangeDiscount}
            onChangeDiscountedItems={onChangeDiscountedItems}
            onEdit={handleOpenEditModal}
          />
        );
      })}
      <Modal isOpen={isOpen} handleClose={handleCloseEditModal}>
        <EditDiscount
          discountedItems={discountedItems}
          onChangeDiscountedItems={onChangeDiscountedItems}
          editTargetId={editDiscountId}
          savedItemsList={itemList}
          itemData={itemData}
          discountData={discountData}
          savedDiscounts={savedDiscounts}
          onSaveDiscountItem={handleSaveEditedDiscount}
          onClickCloseButton={handleCloseEditModal}
        />
      </Modal>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: 490px;
  overflow: scroll;
`;

const SubTitle = styled.h2`
  border-bottom: 2px solid gray;
`;
