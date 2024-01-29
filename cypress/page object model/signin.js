class Signin{
 
    open(){
        return cy.visit("https://magento.softwaretestingboard.com/")
     }
 
     validateUrl(){
        return cy.url().should("include", "magento.softwaretestingboard.com")
     }

     signinlink(){
        return cy.get('.panel > .header > .authorization-link > a')
     }

     email(){
         return cy.get("#email")
     }

     password(){
         return cy.get("#pass")
     }

     signinbutton(){
        return cy.get("#send2")
     }

}

export default Signin;