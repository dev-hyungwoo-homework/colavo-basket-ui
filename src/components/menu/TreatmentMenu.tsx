import { useState } from "react";
import styled from "styled-components";

import StyledButton from "../common/StyledButton";
import MenuList from "./MenuList";

import { ItemStateType } from "../../config/type";

type Props = {
  confirmedItems: ItemStateType;
  handleClose: () => void;
  handleConfirm: (items: ItemStateType) => void;
};

export default function TreatmentMenu({
  confirmedItems,
  handleClose,
  handleConfirm,
}: Props): React.ReactElement {
  const [currentCheckedItems, setCurrentCheckedItems] =
    useState<ItemStateType>(confirmedItems);

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
        />
      </MainContainer>
      <Footer>
        <StyledButton
          onClick={(): void => handleConfirm(currentCheckedItems)}
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
