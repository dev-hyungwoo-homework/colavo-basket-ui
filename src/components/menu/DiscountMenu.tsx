import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

import MenuContainer from "./shared/MenuContainer";
import DiscountRow from "./DiscountRow";

import { DiscountStateType, ResultType } from "../../config/type";

type Props = {
  savedDiscounts: DiscountStateType;
  onSaveDiscounts: (discounts: DiscountStateType, discountIds: Set<string>) => void;
  onCloseModal: () => void;
};

export default function DiscountMenu({
  savedDiscounts,
  onSaveDiscounts,
  onCloseModal,
}: Props): React.ReactElement {
  const [checkedDiscounts, setCheckedDiscounts] = useState<DiscountStateType>(savedDiscounts);
  const [currentAddedIds, setCurrentAddedIds] = useState<Set<string>>(
    new Set(Object.keys(savedDiscounts))
  );

  const { discounts } = useRouteLoaderData("main") as ResultType;

  const handleCloseMenu = (): void => {
    onCloseModal();
    setCheckedDiscounts(savedDiscounts);
  };

  const handleCheckDiscount = (id: string, isChecked: boolean): void => {
    const newSet = new Set(currentAddedIds);

    if (isChecked) {
      newSet.add(id);

      setCheckedDiscounts((prev) => ({ ...prev, [id]: discounts[id] }));
    } else if (!isChecked && checkedDiscounts.hasOwnProperty(id)) {
      const copiedState = { ...checkedDiscounts };

      delete copiedState[id];
      newSet.delete(id);

      setCheckedDiscounts(copiedState);
    }

    setCurrentAddedIds(newSet);
  };

  return (
    <MenuContainer
      title="할인 메뉴"
      onClickCloseButton={handleCloseMenu}
      onSaveData={(): void => onSaveDiscounts(checkedDiscounts, currentAddedIds)}
    >
      {Object.keys(discounts).map((id) => (
        <DiscountRow
          key={id}
          id={id}
          detail={discounts[id]}
          onCheckInput={handleCheckDiscount}
          initialCheckStaus={savedDiscounts.hasOwnProperty(id) ? true : false}
        />
      ))}
    </MenuContainer>
  );
}
