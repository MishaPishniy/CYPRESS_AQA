describe('Команди', ()=> {

it('Clear', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[name="user-name"]').type('Text').clear()
  cy.get('#user-name').should('have.value', '')
})




})