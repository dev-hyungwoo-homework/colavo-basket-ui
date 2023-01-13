import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import { ResultType } from "../../config/type";
import MenuRow from "./MenuRow";

type Props = {
  confirmedItems: Set<string>;
  currentCheckedItems: Set<string>;
  handleCheck: React.Dispatch<React.SetStateAction<Set<string>>>;
  handlePriceSum: React.Dispatch<React.SetStateAction<number>>;
};

export default function MenuList({
  confirmedItems,
  currentCheckedItems,
  handleCheck,
  handlePriceSum,
}: Props): React.ReactElement {
  const { items } = useRouteLoaderData("main") as ResultType;
  const list: string[] = [];

  for (const id of Object.keys(items)) {
    list.push(id);
  }

  const handleCheckItem = (id: string, isChecked: boolean): void => {
    if (isChecked) {
      handleCheck((prev) => {
        const prevSet = new Set(prev);
        prevSet.add(id)

        return prevSet;
      });

      handlePriceSum((prev) => prev + items[id].price);
    } else if (!isChecked && currentCheckedItems.has(id)) {
      handleCheck((prev) => {
        const prevSet = new Set(prev);
        prevSet.delete(id)

        return prevSet;
      });

      handlePriceSum((prev) => prev - items[id].price);
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
          initialCheckStaus={confirmedItems.has(id) ? true : false}
        />
      ))}
    </>
  );
}
