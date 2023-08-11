class saucedemo {

    elements = {

        loginUser: ()=> cy.get ('#user-name'),
        loginPassword: ()=> cy.get  ('#password'),
        loginButton: () => cy.get ('input[type="submit"]')





    }

    loginUser(){
        this.elements.loginUser().click().type('standard_user', { delay: 0}).should('be.visible')
    }
    loginPassword(){
        this.elements.loginPassword().type('secret_sauce')
    }
    loginButton(){
        this.elements.loginButton().click()
    }



}

export default new saucedemo()