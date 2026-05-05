describe('Mock cars response', () => {
  beforeEach(() => {
    cy.registerUserAndSetSidCookie();
    cy.mockCarsResponse();
  });

  it('should show mocked cars in garage', () => {
    cy.visit('/panel/garage');

    cy.wait('@getCars').then((interception) => {
      const body = interception.response.body;

      expect(interception.response.statusCode).to.eq(200);
      expect(body.status).to.eq('ok');
      expect(body.data).to.have.length(2);

      expect(body.data[0]).to.include({
        brand: 'Audi',
        model: 'TT',
        mileage: 111,
      });

      expect(body.data[1]).to.include({
        brand: 'Audi',
        model: 'R8',
        mileage: 111,
      });
    });
  });
});