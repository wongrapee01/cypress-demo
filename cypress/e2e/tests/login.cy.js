import { standard_user } from "../component/login";
beforeEach(() => {
  cy.visit("https://www.saucedemo.com/");
  standard_user();
});
describe("Test demo", () => {
  it("Query Product Success", () => {
    cy.fixture("products.json").then((items) => {
      // เช็คชื่อสินค้า
      cy.get('[data-test="inventory-item-name"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(items[index].name);
      });

      // เช็คคำอธิบายสินค้า
      cy.get('[data-test="inventory-item-desc"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(items[index].description);
      });
      cy.get('[data-test="inventory-item-price"]').each(($el, index) => {
        expect($el.text().trim()).to.eq(items[index].price);
      });
    });
  });
});
