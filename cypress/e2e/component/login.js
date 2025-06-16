export function standard_user() {
  cy.fixture("user.json").then((user) => {
    cy.get('[data-test="username"]').type(user.standard_user.username);
    cy.get('[data-test="password"]').type(user.standard_user.password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  });
}
