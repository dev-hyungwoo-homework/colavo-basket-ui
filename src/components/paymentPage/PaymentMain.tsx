import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

import { ResultType } from "../../config/type";
import convertDataToIdArray from "../../utils/convertSetToArray";
import ItemRow from "./ItemRow";

type Props = {
  confirmedItems: Set<string>;
  handleTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaymentMain({ confirmedItems, handleTotalPrice }: Props): React.ReactElement {
  const [currentPriceSum, setCurrentPriceSum] = useState(0);

  const { items, discounts } = useRouteLoaderData("main") as ResultType;
  const itemList = convertDataToIdArray(confirmedItems);

  return (
    <MainContainer>
      {itemList.map((id) => (
        <ItemRow key={id} detail={items[id]} calculatePrice={handleTotalPrice} />
      ))}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: 490px;
`;
