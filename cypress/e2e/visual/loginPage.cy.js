describe('Visual testing - Login page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should match login page screenshot', () => {
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');

    cy.compareSnapshot('login-page');
  });
});