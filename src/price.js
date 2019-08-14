import {
  sum, sort, isFourBookSet, pricePerBook
} from "./utils";

// calculate the price of books with maximum discount
export default (arr) => {
  let total = 0,
    groupPrice,
    booksGroup;

  while (sum(arr) > 0) {
    const books = sort(arr);
    const maxGroup = isFourBookSet(books) ? 4 : books.length;

    booksGroup = groupPrice = 0;

    for (let i = 0; i < books.length; i++) {
      if (booksGroup === maxGroup) {
        break;
      }	else if (books[i] !== 0) {
        books[i]--;
        booksGroup++;
      }
    }
    groupPrice = booksGroup * pricePerBook[booksGroup];
    total += groupPrice;
	}

  return total;
};
