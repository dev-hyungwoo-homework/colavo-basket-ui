export type ChildrenProp = {
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
