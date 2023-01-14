import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

import MenuContainer from "./shared/MenuContainer";
import TreatmentRow from "./TreatmentRow";

import { ItemStateType, ResultType } from "../../config/type";

type Props = {
  savedItems: ItemStateType;
  onSaveItems: (items: ItemStateType) => void;
  onCloseModal: () => void;
};

export default function TreatmentMenu({
  savedItems,
  onSaveItems,
  onCloseModal,
}: Props): React.ReactElement {
  const [checkedItems, setCheckedItems] = useState<ItemStateType>(savedItems);

  const { items } = useRouteLoaderData("main") as ResultType;

  const handleCloseMenu = (): void => {
    onCloseModal();
    setCheckedItems(savedItems);
  };

  const handleCheckItem = (id: string, isChecked: boolean): void => {
    if (isChecked) {
      setCheckedItems((prev) => ({ ...prev, [id]: items[id] }));
    } else if (!isChecked && checkedItems.hasOwnProperty(id)) {
      const copiedState = { ...checkedItems };
      delete copiedState[id];

      setCheckedItems(copiedState);
    }
  };

  return (
    <MenuContainer
      title="시술 메뉴"
      onClickCloseButton={handleCloseMenu}
      onSaveData={(): void => onSaveItems(checkedItems)}
    >
      {Object.keys(items).map((id) => (
        <TreatmentRow
          key={id}
          id={id}
          detail={items[id]}
          handleCheck={handleCheckItem}
          initialCheckStaus={savedItems.hasOwnProperty(id) ? true : false}
        />
      ))}
    </MenuContainer>
  );
}
