import LoginPage from '../../pages/LoginPage';
import { user } from '../../fixtures/users';

describe('Login to SauceDemo ', ()=>{
    beforeEach(()=>{
        LoginPage.open();
        LoginPage.verifiOpenLoginPage();
    })


    
    it('Positiv Login' , () =>{

        LoginPage.login(
            user.standardUser.username,
            user.standardUser.password
        )
    })

    it('Invalid Login' , () =>{

        LoginPage.login(
            user.invalidUser.username,
            user.invalidUser.password
        )

        LoginPage.getErrorMessage(
            'Epic sadface: Username and password do not match any user in this service')

    })
})



cy.get('a["href=youtube.com"]').shoud('be.viseble').and('include', 'youtube.com')