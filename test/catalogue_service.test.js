const catalogueService = require("../app/catalogue_service");


describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
 });

 describe("catalogueService.checkBookByTitle", () => {
  test("returns true if the book exists", () => {
    expect(
      catalogueService.checkBookByTitle(
        "The Assassination of Margaret Thatcher"
      )
    ).toBe(true);
  });
});

test("returns true if the book exists", () => {
  expect(
    catalogueService.checkBookByTitle("The Chronicles of Narnia")
  ).toBe(false);
});

describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns count of Books by First Letter for W", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });
});

describe("catalogueService.getQuantity", () => {
  test("returns quantity for given books", () => {
    expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(
      11
    );
  });
});

describe("catalogueService.getBooksByAuthor", () => {
  test("returns all the books by the given author", () => {
    expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
      { title: "2666", author: "Robert Bolaño", quantity: 17 },
      { title: "Night In Chile", author: "Robert Bolaño", quantity: 8 }
    ]);
  });
});

describe("catalogueService.checkQuantity", () => {
  test("returns true for given title By Night In Chile and quantity 4", () => {
    expect(catalogueService.checkQuantity("Night In Chile", 4)).toBe(true);
  });

  test("returns true for given title By Night In Chile and quantity 100", () => {
    expect(catalogueService.checkQuantity("Night In Chile", 100)).toBe(false);
  });
});

