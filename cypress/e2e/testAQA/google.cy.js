// textarea[name='q']
describe('Test google', ()=> {

it('Шукаємо поле username по name', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[name="user-name"]').should('exist')
  cy.get('[placeholder="Username"]').should('exist')
})

})