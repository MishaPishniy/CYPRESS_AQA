// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 

  cy.get('#user-name').should('be.visible').clear().type(username);
  cy.get('#password').should('be.visible').clear().type(password);
  cy.get('#login-button').should('be.visible').click();
  
 })

 Cypress.Commands.add('loginByApi', () => {
  const randomEmail = `user_${Date.now()}@test.com`;
  cy.request({
    method: 'POST',
    url: 'https://qauto.forstudy.space/api/auth/signup',
    body: {
       name: "John",
       lastName: "Dou",
    //   email: "Qwerty12345678randomEmail@test.com",
       email: randomEmail,
       password: "Qwerty12345",
       repeatPassword: "Qwerty12345"
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body.status).to.eq('ok');
  });

});



Cypress.Commands.add('signupAndSaveSession', () => {
  //const email = `user_${Date.now()}@test.com`;
  //const password = 'Qwerty12345';

  cy.session('qauto-user-session', () => {
    cy.request({
      method: 'POST',
      url: 'https://qauto.forstudy.space/api/auth/signup',
      body: {
        name: 'John',
        lastName: 'Dou',
        email: "Qwerty123456789randomEmail@test.com",
      // email: randomEmail,
       password: "Qwerty12345",
       repeatPassword: "Qwerty12345"
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.status).to.eq('ok');
    });
  });
});


Cypress.Commands.add('registerUserAndSetSidCookie', () => {
  const email = `user_${Date.now()}@test.com`;
  const password = 'Qwerty12345';

  cy.request({
    method: 'POST',
    url: '/api/auth/signup',
    body: {
      name: 'John',
      lastName: 'Dou',
      email,
      password,
      repeatPassword: password,
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body.status).to.eq('ok');

    const sidCookie = response.headers['set-cookie']
      .find((cookie) => cookie.startsWith('sid='));

    expect(sidCookie, 'sid cookie should exist').to.exist;

    const sidValue = sidCookie.split(';')[0].replace('sid=', '');

    cy.setCookie('sid', sidValue);
  });
});


Cypress.Commands.add('mockCarsResponse', () => {
  cy.fixture('cars/mockedCars').then((mockedCarsResponse) => {
    cy.intercept('GET', '**/api/cars', {
      statusCode: 200,
      body: mockedCarsResponse,
    }).as('getCars');
  });
});