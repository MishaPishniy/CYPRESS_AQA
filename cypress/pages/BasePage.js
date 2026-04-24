class BasePage {
  visit(path = "/") {
    cy.visit(path);
  }

  getElement(selector) {
    return cy.get(selector);
  }

  click(selector) {
    cy.get(selector)
      .should("be.visible")
      .click();
  }

  type(selector, text) {
    cy.get(selector)
      .should("be.visible")
      .clear()
      .type(text);
  }

  shouldBeVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  shouldContainText(selector, text) {
    cy.get(selector)
      .should("be.visible")
      .and("contain.text", text);
  }
}

export default BasePage;