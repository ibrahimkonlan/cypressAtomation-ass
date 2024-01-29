class Signup{

    open(){
       return cy.visit("https://magento.softwaretestingboard.com/")
    }

    validateUrl(){
       return cy.url().should("include", "magento.softwaretestingboard.com")
    }

    signupbutton(){
        return cy.get('.panel > .header > :nth-child(3) > a')
    }

    firstnamefield(){
       return cy.get("#firstname")
    }

    lastnamefield(){
       return cy.get("#lastname")
    }

    emailfield(){
        return cy.get("#email_address")
    }

    passwordfield(){
       return cy.get("#password")
    }

    confirmpasswordfield(){
        return cy.get("#password-confirmation")
    }

    clickcreatebutton(){
       return cy.get("button.action.submit.primary")
    }

}

export default Signup;