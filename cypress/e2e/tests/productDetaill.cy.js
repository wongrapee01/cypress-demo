// cypress/e2e/productDetail.cy.js

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Test detail products", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginAsStandardUser();
  });

  it("Check Detail Sauce Labs Backpack", () => {
    cy.fixture("products.json").then((items) => {
      const backpack = items.find(item => item.name === "Sauce Labs Backpack");

      inventoryPage.clickProductByTestId("item-4-title-link", backpack.name);
      inventoryPage.verifyProductName(backpack.name);
      inventoryPage.verifyProductDescription(backpack.description);
      inventoryPage.verifyProductPrice(backpack.price);
      inventoryPage.verifyProductImage("item-sauce-labs-backpack-img");
      inventoryPage.addToCart();
      inventoryPage.removeFromCart();
    });
  });

  it("Check Detail Sauce Labs Bike Light", () => {
    cy.fixture("products.json").then((items) => {
      const bikeLight = items.find(item => item.name === "Sauce Labs Bike Light");

      inventoryPage.clickProductByTestId("item-0-title-link", bikeLight.name);
      inventoryPage.verifyProductName(bikeLight.name);
      inventoryPage.verifyProductDescription(bikeLight.description);
      inventoryPage.verifyProductPrice(bikeLight.price);
      inventoryPage.verifyProductImage("item-sauce-labs-bike-light-img");
      inventoryPage.addToCart();
      inventoryPage.removeFromCart();
    });
  });

    it("Check Detail Sauce Labs Bolt T-Shirt", () => {
    cy.fixture("products.json").then((items) => {
      const boltTShirt = items.find(item => item.name === "Sauce Labs Bolt T-Shirt");

      inventoryPage.clickProductByTestId("item-1-title-link", boltTShirt.name);
      inventoryPage.verifyProductName(boltTShirt.name);
      inventoryPage.verifyProductDescription(boltTShirt.description);
      inventoryPage.verifyProductPrice(boltTShirt.price);
      inventoryPage.verifyProductImage("item-sauce-labs-bolt-t-shirt-img");
      inventoryPage.addToCart();
      inventoryPage.removeFromCart();
    });
  });

    it("Check Detail Sauce Labs Fleece Jacket", () => {
    cy.fixture("products.json").then((items) => {
      const fleeceJacket = items.find(item => item.name === "Sauce Labs Fleece Jacket");

      inventoryPage.clickProductByTestId("item-5-title-link", fleeceJacket.name);
      inventoryPage.verifyProductName(fleeceJacket.name);
      inventoryPage.verifyProductDescription(fleeceJacket.description);
      inventoryPage.verifyProductPrice(fleeceJacket.price);
      inventoryPage.verifyProductImage("item-sauce-labs-fleece-jacket-img");
      inventoryPage.addToCart();
      inventoryPage.removeFromCart();
    });
  });

    it("Check Detail Sauce Labs Onesie", () => {
    cy.fixture("products.json").then((items) => {
      const onesie = items.find(item => item.name === "Sauce Labs Onesie");

      inventoryPage.clickProductByTestId("item-2-title-link", onesie.name);
      inventoryPage.verifyProductName(onesie.name);
      inventoryPage.verifyProductDescription(onesie.description);
      inventoryPage.verifyProductPrice(onesie.price);
      inventoryPage.verifyProductImage("item-sauce-labs-onesie-img");
      inventoryPage.addToCart();
      inventoryPage.removeFromCart();
    });
  });

    it.only("Check Detail Test.allTheThings() T-Shirt (Red)", () => {
    cy.fixture("products.json").then((items) => {
      const tShirt = items.find(item => item.name === "Test.allTheThings() T-Shirt (Red)");

      inventoryPage.clickProductByTestId("item-3-title-link", tShirt.name);
      inventoryPage.verifyProductName(tShirt.name);
      inventoryPage.verifyProductDescription(tShirt.description);
      inventoryPage.verifyProductPrice(tShirt.price);
      inventoryPage.verifyProductImage("item-test.allthethings()-t-shirt-(red)-img");
      inventoryPage.addToCart();
      inventoryPage.removeFromCart();
    });
  });
});
