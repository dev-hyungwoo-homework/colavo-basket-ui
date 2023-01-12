import styled from "styled-components";

type Props = {
  confirmedItems: Set<string>;
};

export default function PaymentMain({ confirmedItems }: Props): React.ReactElement {
  return <MainContainer>{confirmedItems}</MainContainer>;
}

const MainContainer = styled.main`
  height: 490px;
`;
