export interface ChildrenInterface {
  children?: React.ReactElement | React.ReactElement[];
}

export type ItemType = {
  count: number;
  name: string;
  price: number;
};

export type DiscountType = {
  name: string;
  rate: number;
};

export type ResultType = {
  items: {
    [key: string]: ItemType;
  };
  discounts: {
    [key: string]: DiscountType;
  };
  currency_code: string;
};

export type ChangeInputType = React.ChangeEvent<HTMLInputElement>;

export type ItemStateType = {
  [key: string]: ItemType;
};

export type DiscountStateType = {
  [key: string]: DiscountType;
};

export type DiscountedItemsStateType = {
  [key: string]: Set<string>;
};
