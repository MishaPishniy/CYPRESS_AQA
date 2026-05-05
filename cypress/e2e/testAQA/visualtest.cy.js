describe('Visual test example', () => {
  it('should take login page screenshot', () => {
    cy.visit('https://www.saucedemo.com/')
     cy.percySnapshot()
  })
})