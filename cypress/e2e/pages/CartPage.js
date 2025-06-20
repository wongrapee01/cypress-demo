export class MultipleProduct {
  // ➕ เพิ่มสินค้าจากชื่อ
  addProductToCart(productName) {
    const selector = `[data-test="add-to-cart-${this.toSelector(
      productName
    )}"]`;
    cy.get(selector).click();
    cy.get(`[data-test="remove-${this.toSelector(productName)}"]`).should(
      "contain",
      "Remove"
    );
  }

  // ➖ ลบสินค้าจากชื่อ
  removeProductFromCart(productName) {
    const selector = `[data-test="remove-${this.toSelector(productName)}"]`;
    cy.get(selector).click();
    cy.get(`[data-test="add-to-cart-${this.toSelector(productName)}"]`).should(
      "contain",
      "Add to cart"
    );
  }

  // ตรวจสอบ badge จำนวนสินค้าในตะกร้า
  verifyCartCount(expectedCount) {
    if (expectedCount === 0) {
      cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
    } else {
      cy.get('[data-test="shopping-cart-badge"]').should(
        "contain",
        expectedCount
      );
    }
  }

  // 🔁 เพิ่มสินค้าหลายชิ้น
  addMultipleProducts(productNames = []) {
    productNames.forEach((name) => {
      this.addProductToCart(name);
    });
    this.verifyCartCount(productNames.length);
  }

  // 🔁 ลบสินค้าหลายชิ้น
  removeMultipleProducts(productNames = [], remainingCount = 0) {
    productNames.forEach((name) => {
      this.removeProductFromCart(name);
    });
    this.verifyCartCount(remainingCount);
  }

  // 🛠 helper: แปลงชื่อสินค้าให้ตรงกับ selector
  toSelector(name) {
    return name.toLowerCase().replace(/[()]/g, "").replaceAll(" ", "-");
  }
}

export class CartDetail {
  clickIconCard() {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
  }

  verifyProductsInCart(productNames = []) {
    cy.get(".cart_item").should("have.length", productNames.length);

    productNames.forEach((name, index) => {
      cy.get(".cart_item")
        .eq(index)
        .within(() => {
          cy.get(".inventory_item_name").should("contain", name);
        });
    });
  }
}
