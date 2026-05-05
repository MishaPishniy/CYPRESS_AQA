describe('Registration with email verification', () => {
  it('should register user and verify account by email link', () => {
    const serverId = Cypress.env('MAILOSAUR_SERVER_ID');
    const serverDomain = Cypress.env('MAILOSAUR_SERVER_DOMAIN');

    const email = `user_${Date.now()}@${serverDomain}`;
    const password = 'Qwerty12345!';

    cy.visit('/register');

    cy.get('[data-testid="name-input"]').type('John');
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="confirm-password-input"]').type(password);

    cy.get('[data-testid="register-button"]').click();

    cy.contains('Check your email').should('be.visible');

    cy.mailosaurGetMessage(serverId, {
      sentTo: email,
    }).then((emailMessage) => {
      expect(emailMessage.subject).to.contain('Verify');

      const verificationLink = emailMessage.text.links[0].href;

      expect(verificationLink).to.include('verify');

      cy.visit(verificationLink);
    });

    cy.contains('Account verified').should('be.visible');
  });
});