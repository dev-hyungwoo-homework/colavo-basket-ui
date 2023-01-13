import { useRouteLoaderData } from "react-router-dom";
import { DiscountStateType, ItemStateType, ResultType } from "../config/type";

export default function useTotalPrice(
  items: ItemStateType,
  discounts?: DiscountStateType
): number {
  const {
    items: itemList, discounts: discountList
  } = useRouteLoaderData("main") as ResultType;
  let currentSum = 0;

  for (const [id, count] of Object.entries(items)) {
    currentSum += itemList[id].price * count;
  }

  return currentSum;
}
