import { standard_user } from "../component/login";
beforeEach(() => {
  cy.visit("https://www.saucedemo.com/");
  standard_user();
});

describe("Test detail products", () => {
  it("Check Detail Sauce Labs Backpack", () => {
    cy.fixture("products.json").then((items) => {
      const backpack = items.find(
        (item) => item.name === "Sauce Labs Backpack"
      );

      cy.get(
        '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
      )
        .should("contain", backpack.name)
        .click();
      // ตรวจสอบชื่อสินค้า
      cy.get('[data-test="inventory-item-name"]').should(
        "contain",
        backpack.name
      );
      // ตรวจสอบรายละเอียดสินค้า
      cy.get('[data-test="inventory-item-desc"]').should(
        "contain",
        backpack.description
      );
      // ตรวจสอบราคาสินค้า
      cy.get('[data-test="inventory-item-price"]').should(
        "contain",
        backpack.price
      );
      //ตรวจสอบรูปภาพสินค้า
      cy.get('[data-test="item-sauce-labs-backpack-img"]').should("be.visible");
      // ตรวจสอบปุ่ม Add to cart
      CheckAddToCart();
      // ตรวจสอบปุ่ม Remove
      RemoveItem();
      //ตรวจสอบปุ่ม Back
      BacktoProducts();
    });
  });

  it("Check Detail Sauce Labs Bike Light", () => {
    cy.fixture("products.json").then((items) => {
      const bikeLight = items.find(
        (item) => item.name === "Sauce Labs Bike Light"
      );

      cy.get(
        '[data-test="item-0-title-link"] > [data-test="inventory-item-name"]'
      )
        .should("contain", bikeLight.name)
        .click();

      // ตรวจสอบชื่อสินค้า
      cy.get('[data-test="inventory-item-name"]').should(
        "contain",
        bikeLight.name
      );
      // ตรวจสอบรายละเอียดสินค้า
      cy.get('[data-test="inventory-item-desc"]').should(
        "contain",
        bikeLight.description
      );
      // ตรวจสอบราคาสินค้า
      cy.get('[data-test="inventory-item-price"]').should(
        "contain",
        bikeLight.price
      );
      //ตรวจสอบรูปภาพสินค้า
      cy.get('[data-test="item-sauce-labs-bike-light-img"]').should(
        "be.visible"
      );
    });
    // ตรวจสอบปุ่ม Add to cart
    CheckAddToCart();
    // ตรวจสอบปุ่ม Remove
    RemoveItem();
    //ตรวจสอบปุ่ม Back
    BacktoProducts();
  });
});

function CheckAddToCart(item) {
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="remove"]').should("contain", "Remove");
  cy.get('[data-test="shopping-cart-badge"]').should("contain", "1");
}

function RemoveItem(item) {
  cy.get('[data-test="remove"]').click();
  cy.get('[data-test="add-to-cart"]').should("contain", "Add to cart");
  cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
}

function BacktoProducts(params) {
  cy.get('[data-test="back-to-products"]')
    .should("contain", "Back to products")
    .click();
  cy.url().should("include", "/inventory.html");
}
