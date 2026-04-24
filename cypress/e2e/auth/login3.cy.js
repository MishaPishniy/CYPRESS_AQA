import LoginPage from "../../pages/LoginPage";
import { user } from "../../fixtures/users";

describe("Login to SauceDemo ", () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.verifiOpenLoginPage();
  });

  it("Positiv Login", () => {
    LoginPage.login(user.standardUser.username, user.standardUser.password);
  });

  it("Invalid Login", () => {
    LoginPage.login(user.invalidUser.username, user.invalidUser.password);

    LoginPage.verifyErrorMessage(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });


    it("ENV CONFIG Login", () => {
    
        cy.env(['username','password']).then((env)=>{
                LoginPage.login(env.username,env.password)
             });
        });


    
    it(" JSON CONFIG Login", () => {

        const username = Cypress.env("username")
        const password = Cypress.env("password")
    
        LoginPage.login(username, password)
    });

});
