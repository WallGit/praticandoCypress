
import contactus from "../Pages/contactus.js";


describe('Webdriver Test', () => {
    beforeEach(() => {
       cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html') 
       cy.title().should('eq', 'WebDriver | Contact Us')
       


});
 
    it('Preenchendo Contato', () => {

        contactus.firstName()
        contactus.lastName()
        contactus.email()
        contactus.comments()
        contactus.submit()
        
        cy.title().should('eq', 'Gianni Bruno - Designer')
      
    })

})