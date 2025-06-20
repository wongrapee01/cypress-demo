// cypress/support/pages/InventoryPage.js
export class InventoryPage {
  // Verify product names, descriptions, and prices
  verifyProductNames(products) {
    cy.get('[data-test="inventory-item-name"]').each(($el, index) => {
      expect($el.text().trim()).to.eq(products[index].name);
    });
  }

  verifyProductDescriptions(products) {
    cy.get('[data-test="inventory-item-desc"]').each(($el, index) => {
      expect($el.text().trim()).to.eq(products[index].description);
    });
  }

  verifyProductPrices(products) {
    cy.get('[data-test="inventory-item-price"]').each(($el, index) => {
      expect($el.text().trim()).to.eq(products[index].price);
    });
  }

  // Click on a product by its test ID and verify its name
  clickProductByTestId(testId, name) {
    cy.get(`[data-test="${testId}"] > [data-test="inventory-item-name"]`)
      .should("contain", name)
      .click();
  }

  verifyProductName(name) {
    cy.get('[data-test="inventory-item-name"]').should("contain", name);
  }

  verifyProductDescription(description) {
    cy.get('[data-test="inventory-item-desc"]').should("contain", description);
  }

  verifyProductPrice(price) {
    cy.get('[data-test="inventory-item-price"]').should("contain", price);
  }

  verifyProductImage(testId) {
    cy.get(`[data-test="${testId}"]`).should("be.visible");
  }

  // addToCart() {
  //   cy.get('[data-test="add-to-cart"]').click();
  //   cy.get('[data-test="remove"]').should("contain", "Remove");
  //   cy.get('[data-test="shopping-cart-badge"]').should("contain", "1");
  // }

  addToCart(quantity = 1) {
    for (let i = 0; i < quantity; i++) {
      cy.get('[data-test="add-to-cart"]').eq(i).click(); // ใช้ .eq(i) หากมีหลายปุ่ม
    }
    cy.get('[data-test="remove"]').should("have.length", quantity);
    // ตรวจสอบว่า badge แสดงจำนวนถูกต้อง
    cy.get('[data-test="shopping-cart-badge"]').should("contain", quantity);
  }

  removeFromCart() {
    cy.get('[data-test="remove"]').click();
    cy.get('[data-test="add-to-cart"]').should("contain", "Add to cart");
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
  }
}
