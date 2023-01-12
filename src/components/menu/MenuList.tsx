import React from "react";
import { ItemType } from "../../config/type";
import MenuRow from "./MenuRow";

type Props = {
  listData: { [key: string]: ItemType };
  confirmedItems: Set<string>;
  currentCheckedItems: Set<string>;
  handleCheck: React.Dispatch<React.SetStateAction<Set<string>>>;
};

export default function MenuList({
  listData,
  confirmedItems,
  currentCheckedItems,
  handleCheck,
}: Props): React.ReactElement {
  const list: string[] = [];

  for (const id of Object.keys(listData)) {
    list.push(id);
  }

  const handleCheckItem = (id: string, isChecked: boolean): void => {
    if (isChecked) {
      currentCheckedItems.add(id);
      handleCheck(currentCheckedItems);
    } else if (!isChecked && currentCheckedItems.has(id)) {
      currentCheckedItems.delete(id);
      handleCheck(currentCheckedItems);
    }
  };

  return (
    <>
      {list.map((id) => (
        <MenuRow
          key={id}
          itemId={id}
          item={listData[id]}
          handleCheck={handleCheckItem}
          initialCheckStaus={confirmedItems.has(id) ? true : false}
        />
      ))}
    </>
  );
}
