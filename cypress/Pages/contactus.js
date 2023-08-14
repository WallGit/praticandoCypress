class contactus {

    elements = {

        firstName: ()=> cy.get ('input[name="first_name"]'),
        lastName: ()=> cy.get  ('[name*=last_name]'),
        email: () => cy.get ('input[name*=email]'),
        comments: () => cy.get ('[placeholder*=Comments]'),
        submit: () => cy.get ('input[type="submit"]'),
        



    }

    firstName(){
        this.elements.firstName().click().type('TESTER', { delay: 0}).should('be.visible')
    }
    lastName(){
        this.elements.lastName().type('Silva', { delay: 0}).should('be.visible')
    }
    email(){
        this.elements.email().type('tester@test.com')
    }
      comments(){
        this.elements.comments().type('testando e validando com Cypress')
    }
    
      submit(){
        this.elements.submit().click()
    }
     



}

export default new contactus()