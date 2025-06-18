// cypress/e2e/login.cy.js
import { LoginPage, SortProducts } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";


const loginPage = new LoginPage();
const sortProducts = new SortProducts();
const inventoryPage = new InventoryPage();

describe("Login Functionality", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("TC_001 Login User : Standard Success", () => {
    loginPage.loginAsStandardUser();
    cy.fixture("products.json").then((products) => {
      inventoryPage.verifyProductNames(products);
      inventoryPage.verifyProductDescriptions(products);
      inventoryPage.verifyProductPrices(products);
    });
  });

  it("TC_002 Login User : Locked Out User", () => {
    loginPage.loginAsLockedOutUser();
    cy.get('[data-test="error"]').should(
      "contain",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("TC_003 Login User : Problem User", () => {
    loginPage.loginAsWrongPassword();
    cy.get('[data-test="error"]').should(
      "contain",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("TC_004 Login User : Null Username", () => {
    loginPage.loginAsNullUsername();
    cy.get('[data-test="error"]').should(
      "contain",
      "Epic sadface: Username is required"
    );
  });

  it("TC_005 Login User : Null Password", () => {
    loginPage.loginAsNullPassword();
    cy.get('[data-test="error"]').should(
      "contain",
      "Epic sadface: Password is required"
    );
  });
});



describe("Product Browse & Interaction", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginAsStandardUser();
  });
  it("TC_007 Sort A to Z", () => {
    cy.fixture("products.json").then((items) => {
      const sortedByName = [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      sortProducts.selectSortOption("az");
      sortProducts.verifyAllSorted(sortedByName);
    });
  });

  it("TC_008 Sort Z to A", () => {
    cy.fixture("products.json").then((items) => {
      const sortedByName = [...items].sort((a, b) =>
        b.name.localeCompare(a.name)
      );

      sortProducts.selectSortOption("za");
      sortProducts.verifyAllSorted(sortedByName);
    });
  });
});

