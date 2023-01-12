import React from "react";
import styled from "styled-components";
import { ChildrenInterface } from "../../../config/type";

import Portal from "./Portal";

interface Props extends ChildrenInterface {
  isOpen: boolean;
  handleClose: () => void;
};

export default function Modal({
  children,
  isOpen,
  handleClose,
}: Props): React.ReactElement | null {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Container onClick={handleClose}>
        <Wrapper onClick={(event: React.MouseEvent): void => event.stopPropagation()}>
          {children}
        </Wrapper>
      </Container>
    </Portal>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(91, 112, 131, 0.4);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 14px;
  border-radius: 10px;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
`;
