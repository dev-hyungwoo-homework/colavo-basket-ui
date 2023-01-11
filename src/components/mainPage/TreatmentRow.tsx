import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import StyledButton from "../common/StyledButton";

export default function TreatmentRow() {
  const navigate = useNavigate();

  const handleOpenPaymentOverlay = (): void => {
    navigate("/payment");
  };

  return (
    <Container>
      TreatmentRow
      <StyledButton text="결제 입력" onClick={handleOpenPaymentOverlay} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 500px;
  min-height: 100px;
  margin: 10px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #ffffff;
`;
