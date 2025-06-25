import "./commands";
import "cypress-mochawesome-reporter/register";
const registerCypressGrep = require("@cypress/grep");
registerCypressGrep();

afterEach(function () {
  if (this.currentTest.state === "passed") {
    const testName = this.currentTest.title.replace(/ /g, "-");
    cy.screenshot(`${testName} (passed)`);
  }
});
