import { standard_user } from "../component/login";
beforeEach(() => {
  cy.visit("https://www.saucedemo.com/");
  standard_user();
});
describe("Test Sorting", () => {
  it("Sort A to Z", () => {
    cy.fixture("products.json").then((items) => {
      const sortedByName = [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      cy.get('[data-test="product-sort-container"]').select("az");

      cy.get('[data-test="inventory-item-name"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(sortedByName[index].name);
      });

      cy.get('[data-test="inventory-item-desc"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(sortedByName[index].description);
      });
      cy.get('[data-test="inventory-item-price"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(sortedByName[index].price);
      });
    });
  });

  it("Sort Z to B", () => {
    cy.fixture("products.json").then((items) => {
      const sortedByName = [...items].sort((a, b) =>
        b.name.localeCompare(a.name)
      );

      cy.get('[data-test="product-sort-container"]').select("za");

      cy.get('[data-test="inventory-item-name"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(sortedByName[index].name);
      });

      cy.get('[data-test="inventory-item-desc"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(sortedByName[index].description);
      });

      cy.get('[data-test="inventory-item-price"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(sortedByName[index].price);
      });
    });
  });
});
