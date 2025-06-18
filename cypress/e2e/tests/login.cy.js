// cypress/e2e/login.cy.js
import { LoginPage , SortProducts } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";


const loginPage = new LoginPage();
const sortProducts = new SortProducts();
const inventoryPage = new InventoryPage();

describe("Test demo", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginAsStandardUser();
  });

  it("Login Page Success", () => {
    cy.fixture("products.json").then((products) => {
      inventoryPage.verifyProductNames(products);
      inventoryPage.verifyProductDescriptions(products);
      inventoryPage.verifyProductPrices(products);
    });
  });

});

describe("Test Sorting", () => {
    beforeEach(() => {
    loginPage.visit();
    loginPage.loginAsStandardUser();
  });
  it("Sort A to Z", () => {
    cy.fixture("products.json").then((items) => {
      const sortedByName = [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      sortProducts.selectSortOption("az");
      sortProducts.verifyAllSorted(sortedByName);
    });
  });

  it("Sort Z to A", () => {
    cy.fixture("products.json").then((items) => {
      const sortedByName = [...items].sort((a, b) =>
        b.name.localeCompare(a.name)
      );

      sortProducts.selectSortOption("za");
      sortProducts.verifyAllSorted(sortedByName);
    });
  });
});

