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

import { ItemStateType } from "../../config/type";
import useTotalPrice from "../../hooks/useTotalPrice";

export default function PaymentPage(): React.ReactElement {
  const [menuType, setMenuType] = useState<string>("");
  const [confirmedItems, setConfirmedItems] = useState<ItemStateType>({});

  const { isOpen, toggleModal } = useModal();
  const totalPrice = useTotalPrice(confirmedItems);

  const handleToggleModal = (type: string): void => {
    setMenuType(type);
    toggleModal();
  };

  const handleConfirmSelectItems = (items: ItemStateType): void => {
    setConfirmedItems(items);
    toggleModal();
  };

  return (
    <OverlayBox>
      <Container>
        <PaymentHeader />

        <PaymentNavBar handleModal={handleToggleModal} />

        <PaymentMain
          confirmedItems={confirmedItems}
          handleItemCount={setConfirmedItems}
        />

        <PaymentFooter amount={totalPrice} />

        <Modal isOpen={isOpen} handleClose={toggleModal}>
          {menuType === "treatment" ? (
            <TreatmentMenu
              confirmedItems={confirmedItems}
              handleClose={toggleModal}
              handleConfirm={handleConfirmSelectItems}
            />
          ) : (
            <DiscountMenu />
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
