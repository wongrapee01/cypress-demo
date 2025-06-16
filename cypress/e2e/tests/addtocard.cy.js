import { standard_user } from "../component/login";
beforeEach(() => {
  cy.visit("https://www.saucedemo.com/");
  standard_user();
});

describe("Test detail products", () => {
  it("Sauce Labs Backpack", () => {
    cy.fixture("products.json").then((items) => {
      cy.get(
        '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
      )
        .should("contain", "Sauce Labs Backpack")
        .click();
    });
  });

  it("Sauce Labs Bike Light", () => {
    cy.fixture("products.json").then((items) => {
      cy.get(
        '[data-test="item-0-title-link"] > [data-test="inventory-item-name"]'
      )
        .should("contain", "Sauce Labs Bike Light")
        .click();
    });
  });
});
