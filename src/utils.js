export const sort = arr => arr.sort((a, b) => b - a);
export const sum = arr => arr.reduce((acc, item) => acc + item, 0);

export const isFourBookSet = arr => {
  const minValue = Math.min(...arr);
  const mapped = arr.reduce((acc, val) => ({ ...acc, [val]: ++acc[val] || 1 }), {});
  return Object.values(mapped).includes(3) && mapped[minValue] !== 3;
};

// single book price with various discounts
export const pricePerBook = {
  1: 8, // original price
  2: 8 - 0.4, // 5% discount
  3: 8 - 0.8, // 10% discount
  4: 8 - 1.6, // 20% discount
  5: 8 - 2, // 25% discount
};
