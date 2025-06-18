export class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  loginAsStandardUser() {
    cy.fixture("user.json").then((user) => {
      cy.get('[data-test="username"]').type(user.standard_user.username);
      cy.get('[data-test="password"]').type(user.standard_user.password);
      cy.get('[data-test="login-button"]').click();
      cy.url().should("include", "/inventory.html");
    });
  }

    loginAsLockedOutUser() {
    cy.fixture("user.json").then((user) => {
      cy.get('[data-test="username"]').type(user.locked_out_user.username);
      cy.get('[data-test="password"]').type(user.locked_out_user.password);
      cy.get('[data-test="login-button"]').click();
    });
  }

    loginAsWrongPassword() {
    cy.fixture("user.json").then((user) => {
      cy.get('[data-test="username"]').type(user.problem_user.username);
      cy.get('[data-test="password"]').type("wrong_password");
      cy.get('[data-test="login-button"]').click();
    });
  }

  loginAsNullUsername() {
    cy.fixture("user.json").then((user) => {
      cy.get('[data-test="username"]').clear();
      cy.get('[data-test="password"]').type("wrong_password");
      cy.get('[data-test="login-button"]').click();
    });
  }

    loginAsNullPassword() {
    cy.fixture("user.json").then((user) => {
      cy.get('[data-test="username"]').type(user.problem_user.username);
      cy.get('[data-test="password"]').clear();
      cy.get('[data-test="login-button"]').click();
    });
  }
}

export class SortProducts {
  selectSortOption(option) {
    cy.get('[data-test="product-sort-container"]').select(option);
  }

  verifyProductNamesSorted(expectedList) {
    cy.get('[data-test="inventory-item-name"]').each(($el, index) => {
      expect($el.text().trim()).to.eq(expectedList[index].name);
    });
  }

  verifyProductDescriptionsSorted(expectedList) {
    cy.get('[data-test="inventory-item-desc"]').each(($el, index) => {
      expect($el.text().trim()).to.eq(expectedList[index].description);
    });
  }

  verifyProductPricesSorted(expectedList) {
    cy.get('[data-test="inventory-item-price"]').each(($el, index) => {
      expect($el.text().trim()).to.eq(expectedList[index].price);
    });
  }

  verifyAllSorted(expectedList) {
    this.verifyProductNamesSorted(expectedList);
    this.verifyProductDescriptionsSorted(expectedList);
    this.verifyProductPricesSorted(expectedList);
  }
}
