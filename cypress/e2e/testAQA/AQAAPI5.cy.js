describe('Mock cars response', () => {
  beforeEach(() => {
    cy.registerUserAndSetSidCookie();

    cy.fixture('cars/mockedCars').then((mockedCarsResponse) => {
      cy.intercept('GET', '**/api/cars', {
        statusCode: 200,
        body: mockedCarsResponse,
      }).as('getCars');
    });
  });

  it('should show mocked cars in garage', () => {
    cy.visit('/panel/garage');

    cy.wait('@getCars').then((interception) => {
      const response = interception.response;

      expect(response.statusCode).to.eq(200);
      expect(response.body.status).to.eq('ok');
      expect(response.body.data).to.have.length(2);

      expect(response.body.data[0]).to.include({
        brand: 'Audi',
        model: 'TT',
        mileage: 111,
      });

      expect(response.body.data[1]).to.include({
        brand: 'Audi',
        model: 'R8',
        mileage: 111,
      });
    });
  });
});