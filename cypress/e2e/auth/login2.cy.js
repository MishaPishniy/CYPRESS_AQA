import LoginPage from '../../pages/LoginPage';

let userData

describe('Login to SauceDemo ', ()=>{
    beforeEach(()=>{
        LoginPage.open();
       cy.fixture('user').then((data) => {
        userData = data;
     });
    })


    
    it('Positiv Login' , () =>{

       cy.login(
         userData.validUser.username,
         userData.validUser.password
       )

    })
})