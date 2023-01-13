import React from "react";
import { useRouteLoaderData } from "react-router-dom";

import MenuRow from "./MenuRow";

import { ItemStateType, ResultType } from "../../config/type";

type Props = {
  confirmedItems: ItemStateType;
  currentCheckedItems: ItemStateType;
  handleCheck: React.Dispatch<React.SetStateAction<ItemStateType>>;
};

export default function MenuList({
  confirmedItems,
  currentCheckedItems,
  handleCheck,
}: Props): React.ReactElement {
  const { items } = useRouteLoaderData("main") as ResultType;
  const list: string[] = [];

  for (const id of Object.keys(items)) {
    list.push(id);
  }

  const handleCheckItem = (id: string, isChecked: boolean): void => {
    if (isChecked) {
      handleCheck((prev) => ({ ...prev, [id]: 1 }));
    } else if (!isChecked && currentCheckedItems.hasOwnProperty(id)) {
      const copiedState = { ...currentCheckedItems };
      delete copiedState[id];

      handleCheck(copiedState);
    }
  };

  return (
    <>
      {list.map((id) => (
        <MenuRow
          key={id}
          itemId={id}
          itemDetail={items[id]}
          handleCheck={handleCheckItem}
          initialCheckStaus={confirmedItems.hasOwnProperty(id) ? true : false}
        />
      ))}
    </>
  );
}
