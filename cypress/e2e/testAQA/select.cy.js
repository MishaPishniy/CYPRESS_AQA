// textarea[name='q']
describe("Test login saucedemo.com", () => {
  beforeEach(() => {
    cy.log("Before log");
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
 
  });


  it('Обираємо сортування Z-A', () =>
     { cy.get('[data-test="product-sort-container"]').select('za') 
    cy.get('[data-test="product-sort-container"]').should('have.value', 'za') })


      it('Обираємо сортування Z-A', () =>
     { cy.get('[data-test="product-sort-container"]').should('be.visible')
            .select('za') 
                 .should('have.value', 'za') })

    it('Перевіряємо список', () => {
  cy.get('.inventory_item').then(($items) => {
    expect($items.length).to.equal(6)
  })
})
})
