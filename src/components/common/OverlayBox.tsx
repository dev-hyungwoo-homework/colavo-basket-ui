import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ChildrenInterface } from "../../config/type";

export default function OverlayBox({ children }: ChildrenInterface): React.ReactElement {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      event.preventDefault();

      const { target } = event;

      if (modalRef?.current.isEqualNode(target as HTMLElement)) {
        navigate(-1);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [navigate, modalRef]);

  return (
    <Container ref={modalRef}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(91, 112, 131, 0.4);
`;

const Wrapper = styled.div`
  min-width: 600px;
  min-height: 700px;
  border-radius: 10px;
  background-color: #ffffff;
`;
