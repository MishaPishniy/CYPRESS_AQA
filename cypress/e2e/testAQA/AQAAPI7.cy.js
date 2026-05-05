describe('Mock cars response', () => {
  beforeEach(() => {
    cy.registerUserAndSetSidCookie();
    cy.mockCarsResponse();
  });

  it('should display mocked cars in garage', () => {
    cy.visit('/panel/garage');

    cy.wait('@getCars').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body.status).to.eq('ok');
      expect(interception.response.body.data).to.have.length(2);
    });

    cy.contains('Audi').should('be.visible');
    cy.contains('TT').should('be.visible');
    cy.contains('R8').should('be.visible');
  });
});