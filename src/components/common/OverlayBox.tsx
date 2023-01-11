import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

export default function OverlayBox({ children }: Props) {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: 추후 커스텀훅으로 분리해보기! useClickOutside

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
  width: 500px;
  height: 500px;
  border-radius: 10px;
  background-color: #ffffff;
`;
