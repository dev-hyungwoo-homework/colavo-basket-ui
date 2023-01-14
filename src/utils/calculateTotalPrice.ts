import { DiscountedItemsStateType, DiscountStateType, ItemStateType } from "../config/type";

const calculateTotalPrice = (
  items: ItemStateType,
  discounts: DiscountStateType,
  discountedItems: DiscountedItemsStateType
): number => {
  if (Object.keys(items).length === 0) return 0;

  const currentSum = Object
    .values(items)
    .reduce((acc, { price, count }) => {
      return (acc += price * count);
    }, 0);

  if (Object.keys(discounts).length === 0) return currentSum;

  return Object
    .entries(discountedItems)
    .reduce((acc, [id, set]) => {
      const rate = discounts[id]?.rate;
      let tempSum = 0;

      set.forEach((itemId) => {
        const { price, count } = items[itemId];
        tempSum += price * count;
      });

      return acc - Math.floor(tempSum * rate);
  }, currentSum);
};

export default calculateTotalPrice;
