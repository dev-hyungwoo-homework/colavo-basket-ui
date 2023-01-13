export interface ChildrenInterface {
  children?: React.ReactElement | React.ReactElement[];
};

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
};

export type ChangeInputType = React.ChangeEvent<HTMLInputElement>;

export type ItemStateType = {
  [key: string]: number;
};

export type DiscountStateType = {
  [key: string]: Set<string>;
};
