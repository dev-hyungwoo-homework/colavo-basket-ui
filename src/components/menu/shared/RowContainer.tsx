import { useState } from "react";
import styled from "styled-components";

import { ChangeInputType, ChildrenInterface } from "../../../config/type";

interface Props extends ChildrenInterface {
  id: string;
  inputCheckedStatus: boolean;
  onChangeInput: (event: ChangeInputType) => void;
}

export default function RowContainer({
  children,
  id,
  inputCheckedStatus,
  onChangeInput,
}: Props): React.ReactElement {
  const [checked, setChecked] = useState(inputCheckedStatus);

  const handleChangeInput = (event: ChangeInputType): void => {
    onChangeInput(event);
    setChecked(!checked);
  };

  return (
    <Container>
      <DetailWrapper>{children}</DetailWrapper>
      <InputWrapper>
        <Input type="checkbox" id={id} checked={checked} onChange={handleChangeInput} />
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0 6px;
`;

const InputWrapper = styled.div`
  align-self: center;
  padding: 0 12px 0 22px;
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
