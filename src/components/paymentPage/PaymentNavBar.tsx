import styled from "styled-components";

import StyledButton from "../common/StyledButton";

const NAV_BUTTON_WIDTH = 180;

type Props = {
  handleModal: (type: string) => void;
};

export default function PaymentNavBar({ handleModal }: Props): React.ReactElement {
  return (
    <NavContainer>
      <StyledButton
        text="+ 시술 메뉴"
        onClick={(): void => handleModal("treatment")}
        width={NAV_BUTTON_WIDTH}
        fontColor={"#75808b"}
        backgroundColor={"#f7f7f7"}
        hoverColor={"#f0caca"}
      />
      <StyledButton
        text="+ 할인 메뉴"
        onClick={(): void => handleModal("discount")}
        width={NAV_BUTTON_WIDTH}
        fontColor={"#e54f8b"}
        backgroundColor={"#fdf0f5"}
        hoverColor={"#f0caca"}
      />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;
