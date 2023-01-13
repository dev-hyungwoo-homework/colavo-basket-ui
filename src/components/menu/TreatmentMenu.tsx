import { useState } from "react";
import styled from "styled-components";

import StyledButton from "../common/StyledButton";
import MenuList from "./MenuList";

type Props = {
  confirmedItems: Set<string>;
  totalPrice: number;
  handleClose: () => void;
  handleConfirm: (items: Set<string>, price: number) => void;
};

export default function TreatmentMenu({
  confirmedItems,
  totalPrice,
  handleClose,
  handleConfirm,
}: Props): React.ReactElement {
  const [currentCheckedItems, setCurrentCheckedItems] =
    useState<Set<string>>(confirmedItems);
  const [currentPriceSum, setcurrentPriceSum] = useState(totalPrice);

  // console.log("결제페이지 최종 확정아이템");
  // console.log(confirmedItems);
  // console.log("현재 선택중인 아이템");
  // console.log(currentCheckedItems);

  const handleCloseMenu = (): void => {
    handleClose();
    setCurrentCheckedItems(confirmedItems);
  };

  return (
    <Container>
      <Header>
        <button type="button" onClick={handleCloseMenu}>
          X
        </button>
        <h2>시술 메뉴</h2>
      </Header>
      <MainContainer>
        <MenuList
          confirmedItems={confirmedItems}
          currentCheckedItems={currentCheckedItems}
          handleCheck={setCurrentCheckedItems}
          handlePriceSum={setcurrentPriceSum}
        />
      </MainContainer>
      <Footer>
        <StyledButton
          onClick={(): void => handleConfirm(currentCheckedItems, currentPriceSum)}
          type="button"
          text="저장"
        />
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 600px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const MainContainer = styled.main`
  height: 500px;
  overflow: scroll;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;
