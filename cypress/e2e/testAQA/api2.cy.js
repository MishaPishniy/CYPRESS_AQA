describe('API tests with failOnStatusCode false', () => {
  it('should check unauthorized response', () => {
    cy.request({
      method: 'GET',
      url: 'https://qauto.forstudy.space/api/cars',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);

      cy.log(JSON.stringify(response.body));

      expect(response.body).to.have.property('status', 'error');
    });
  });
});