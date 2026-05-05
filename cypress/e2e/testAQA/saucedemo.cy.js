// textarea[name='q']
describe("Test login saucedemo.com", () => {
  beforeEach(() => {
    cy.log("Before log");
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("contain", "/inventory.html");
  });


   afterEach(() => {
    cy.log("afterEach log");
  });


   after(() => {
    cy.log("after log");
  });

  it("should /inventory.html", () => {
    cy.log('========Вводимо inventory===========');
    cy.url().should("contain", "/inventory.html");
  });

    it("should .inventory_list", () => {

    cy.get('.inventory_list').should('be.visible');
  });

    it.only("should .inventory_list", () => {

    cy.log('========Вводимо inventory===========');
    cy.get('.inventory_item').debug().should('be.visible');
    cy.log('========Вводимо inventory===========');
    cy.get('.inventory_item').first().find('button');
    cy.contains('Products')
    cy.contains('.inventory_item_name' , 'Sauce Labs Backpack')
    cy.log('========Вводимо inventory===========');
    cy.contains('Add to cart').debug().click()

     cy.pause()

    cy.log('========Вводимо inventory===========');
    cy.get('.inventory_list').children().as('newBotton')
    cy.get('@newBotton').should('have.length' , 6)
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });


  it('Обираємо сортування Z-A', () => {
  cy.get('[data-test="product-sort-container"]').select('za')
  cy.get('[data-test="product-sort-container"]').should('have.value', 'za')
})
});
