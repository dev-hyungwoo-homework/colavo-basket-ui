import { useState } from "react";
import styled from "styled-components";

import OverlayBox from "../../components/common/OverlayBox";
import PaymentHeader from "../../components/paymentPage/PaymentHeader";
import PaymentNavBar from "../../components/paymentPage/PaymentNavBar";
import PaymentMain from "../../components/paymentPage/PaymentMain";
import PaymentFooter from "../../components/paymentPage/PaymentFooter";
import Modal from "../../components/common/Modal";
import TreatmentMenu from "../../components/menu/TreatmentMenu";
import DiscountMenu from "../../components/menu/DiscountMenu";

import useModal from "../../hooks/useModal";
import calculateTotalPrice from "../../utils/calculateTotalPrice";

import { DiscountedItemsStateType, DiscountStateType, ItemStateType } from "../../config/type";

export default function PaymentPage(): React.ReactElement {
  const [menuType, setMenuType] = useState<string>("");
  const [savedItems, setSavedItems] = useState<ItemStateType>({});
  const [savedDiscounts, setSavedDiscounts] = useState<DiscountStateType>({});
  const [discountedItems, setDiscountedItems] = useState<DiscountedItemsStateType>({});

  const totalPrice = calculateTotalPrice(savedItems, savedDiscounts, discountedItems);
  const { isOpen, toggleModal } = useModal();

  const handleToggleModal = (type: string): void => {
    setMenuType(type);
    toggleModal();
  };

  const handleSaveItems = (items: ItemStateType): void => {
    const newSet = new Set(Object.keys(items));
    const newDiscountedItems: DiscountedItemsStateType = {};

    for (const key of Object.keys(discountedItems)) {
      newDiscountedItems[key] = newSet;
    }

    setSavedItems(items);
    setDiscountedItems(newDiscountedItems);
    toggleModal();
  };

  const handleSaveDiscounts = (discounts: DiscountStateType, discountIds: Set<string>): void => {
    const newDiscountedItems: DiscountedItemsStateType = {};

    discountIds.forEach((id) => {
      newDiscountedItems[id] = new Set(Object.keys(savedItems));
    });

    setSavedDiscounts(discounts);
    setDiscountedItems(newDiscountedItems);
    toggleModal();
  };

  return (
    <OverlayBox>
      <Container>
        <PaymentHeader />
        <PaymentNavBar handleModal={handleToggleModal} />
        <PaymentMain
          savedItems={savedItems}
          savedDiscounts={savedDiscounts}
          discountedItems={discountedItems}
          onChangeItem={setSavedItems}
          onChangeDiscount={setSavedDiscounts}
          onChangeDiscountedItems={setDiscountedItems}
        />
        <PaymentFooter amount={totalPrice} />
        <Modal isOpen={isOpen} handleClose={toggleModal}>
          {menuType === "treatment" ? (
            <TreatmentMenu
              savedItems={savedItems}
              onSaveItems={handleSaveItems}
              onCloseModal={toggleModal}
            />
          ) : (
            <DiscountMenu
              savedDiscounts={savedDiscounts}
              onSaveDiscounts={handleSaveDiscounts}
              onCloseModal={toggleModal}
            />
          )}
        </Modal>
      </Container>
    </OverlayBox>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  padding: 14px;
`;
