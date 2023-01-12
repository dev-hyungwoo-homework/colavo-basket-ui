import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
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

import { ResultType } from "../../config/type";

export default function PaymentPage(): React.ReactElement {
  const [menuType, setMenuType] = useState<string>("");
  const [totalPayment, setTotalPayment] = useState(50000);

  const [confirmedItems, setConfirmedItems] = useState<Set<string>>(new Set());

  const { isOpen, toggleModal } = useModal();

  const { items, discounts } = useRouteLoaderData("main") as ResultType;

  const handleToggleModal = (type: string): void => {
    setMenuType(type);
    toggleModal();
  };

  const handleConfirmSelectItems = (itemsSet: Set<string>): void => {
    setConfirmedItems(itemsSet);
    toggleModal();
  };

  return (
    <OverlayBox>
      <Container>
        <PaymentHeader />

        <PaymentNavBar handleModal={handleToggleModal} />

        <PaymentMain confirmedItems={confirmedItems} />

        <PaymentFooter amount={totalPayment} />

        <Modal isOpen={isOpen} handleClose={toggleModal}>
          {menuType === "treatment" ? (
            <TreatmentMenu
              totalItems={items}
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
