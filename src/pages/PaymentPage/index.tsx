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

export default function PaymentPage(): React.ReactElement {
  const [menuType, setMenuType] = useState<string>("");
  const [confirmedItems, setConfirmedItems] = useState<Set<string>>(new Set());
  const [confirmedItems2, setConfirmedItems2] = useState<ItemStateType>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const { isOpen, toggleModal } = useModal();

  const handleToggleModal = (type: string): void => {
    setMenuType(type);
    toggleModal();
  };

  const handleConfirmSelectItems = (items: Set<string>, price: number): void => {
    setConfirmedItems(items);
    setTotalPrice(price);
    toggleModal();
  };

  return (
    <OverlayBox>
      <Container>
        <PaymentHeader />

        <PaymentNavBar handleModal={handleToggleModal} />

        <PaymentMain confirmedItems={confirmedItems} handleTotalPrice={setTotalPrice} />

        <PaymentFooter amount={totalPrice} />

        <Modal isOpen={isOpen} handleClose={toggleModal} >
          {menuType === "treatment" ? (
            <TreatmentMenu
              confirmedItems={confirmedItems}
              totalPrice={totalPrice}
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
