import styled from "styled-components";
import { ChildrenInterface } from "../../../config/type";

import StyledButton from "../../common/StyledButton";

interface Props extends ChildrenInterface {
  title: string;
  buttonText?: string;
  onClickCloseButton: () => void;
  onSaveData: () => void;
}

export default function MenuContainer({
  children,
  title,
  buttonText = "저장",
  onClickCloseButton,
  onSaveData,
}: Props): React.ReactElement {
  return (
    <Container>
      <Header>
        <CloseButton type="button" onClick={(): void => onClickCloseButton()}>
          X
        </CloseButton>
        <h2>{title}</h2>
      </Header>
      <MainContainer>{children}</MainContainer>
      <Footer>
        <StyledButton type="button" text={buttonText} onClick={onSaveData} />
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

const CloseButton = styled.button`
  font-size: 20px;
`;

const MainContainer = styled.main`
  height: 500px;
  overflow: scroll;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;
