const USD_CURRENCY_RATE = 0.00081;

const applyCurrencyCode = (currency: string, price: number): number => {
  if (currency === "KRW") return price;

  return Math.floor(price * USD_CURRENCY_RATE);
};

export default applyCurrencyCode;
