
import  saucedemo  from "../Pages/saucedemo.js";

describe('Swag Labs', () => {
    beforeEach(() => {
       cy.visit('https://www.saucedemo.com/') 
       cy.title().should('eq', 'Swag Labs')


});
 
    it('Executando Login', () => {

        saucedemo.loginUser()
        saucedemo.loginPassword()
        saucedemo.loginAcess()

        cy.intercept('GET', 'https://www.saucedemo.com/inventory.html')
        .as('login')
        cy.wait('@login')
    })

})