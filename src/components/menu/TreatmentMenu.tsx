import { useState } from "react";
import styled from "styled-components";

import StyledButton from "../common/StyledButton";
import MenuList from "./MenuList";

import { ItemType } from "../../config/type";

type Props = {
  totalItems: { [key: string]: ItemType };
  confirmedItems: Set<string>;
  handleClose: () => void;
  handleConfirm: (itemsSet: Set<string>) => void;
};

export default function TreatmentMenu({
  totalItems,
  confirmedItems,
  handleClose,
  handleConfirm,
}: Props): React.ReactElement {
  const [currentCheckedItems, setCurrentCheckedItems] =
    useState<Set<string>>(confirmedItems);

  return (
    <Container>
      <Header>
        <button type="button" onClick={handleClose}>
          X
        </button>
        <h2>시술 메뉴</h2>
      </Header>
      <MainContainer>
        <MenuList
          listData={totalItems}
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
