import { getAuthCookieHeader } from '../../helpers/auth';

describe('Cars API', () => {
  let authCookie;

  before(() => {
    getAuthCookieHeader().then((cookie) => {
      authCookie = cookie;
    });
  });

  it('should get cars', () => {
    cy.request({
      method: 'GET',
      url: 'https://qauto.forstudy.space/api/cars',
      headers: {
        Cookie: authCookie,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should get cars2', () => {
  cy.request({
    method: 'GET',
    url: 'https://qauto.forstudy.space/api/cars',
    headers: {
      Cookie: authCookie,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);

    cy.log(JSON.stringify(response.body));

    console.log(response.body);
  });
});
});