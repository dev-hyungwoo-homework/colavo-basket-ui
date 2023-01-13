import { useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

import ItemRow from "./ItemRow";

import { ItemStateType, ResultType } from "../../config/type";

type Props = {
  confirmedItems: ItemStateType;
  handleItemCount: React.Dispatch<React.SetStateAction<ItemStateType>>;
};

export default function PaymentMain({
  confirmedItems,
  handleItemCount,
}: Props): React.ReactElement {
  const { items } = useRouteLoaderData("main") as ResultType;

  const itemList = Object.entries(confirmedItems);

  return (
    <MainContainer>
      {itemList.map(([id, count]) => (
        <ItemRow
          key={id}
          id={id}
          detail={items[id]}
          prevCount={count}
          handleItemCount={handleItemCount}
        />
      ))}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: 490px;
`;
