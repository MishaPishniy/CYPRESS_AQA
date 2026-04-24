import BasePage from "./BasePage";

class LoginPage extends BasePage{
  selectors = {
    usernameInput: "#user-name",
    passwordInput: "#password",
    loginButton: "#login-button",
    errorMessage: '[data-test="error"]',
  };

  open() {
    cy.visit("/");
  }
/*
  getUserNameInput() {
    return cy.get(this.selectors.usernameInput);
  }

  getPasswordInput() {
    return cy.get(this.selectors.passwordInput);
  }

  getLoginButton() {
    return cy.get(this.selectors.loginButton);
  }

  getErrorMessage() {
    return cy.get(this.selectors.errorMessage);
  }

  typeUserName(username) {
    this.getUserNameInput().clear().type(username);
  }

  typePassword(password) {
    this.getPasswordInput().clear().type(password);
  }

  clickLoginButton() {
    this.getLoginButton().click();
  } */

  login(username, password) {
   /*this.typeUserName(username);
     this.typePassword(password);
     this.clickLoginButton(); */
     this.type(this.selectors.usernameInput, username)
     this.type(this.selectors.passwordInput, password)
     this.click(this.selectors.loginButton)
  }

  verifiOpenLoginPage() {
    /* this.getUserNameInput().should("be.visible");
    this.getPasswordInput().should("be.visible");
    this.getLoginButton().should("be.visible"); */

    this.shouldBeVisible(this.selectors.usernameInput)
    this.shouldBeVisible(this.selectors.passwordInput)
    this.shouldBeVisible(this.selectors.loginButton)
  }

  verifyErrorMessage(text) {
   // this.getErrorMessage().should("be.visible").and("contain.text", text);
   this.shouldContainText(this.selectors.errorMessage,text)
  }
}

export default new LoginPage();
