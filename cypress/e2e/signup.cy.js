/// <reference types="cypress" />
import data from "../fixtures/signup.json"
import Signup from "../page object model/signup";

const signup = new Signup();

describe("Should sign up a new account", ()=>{

    it("Should fill in the sign up form", ()=>{
        signup.open()
        signup.validateUrl()  

       signup.signupbutton().click()
       signup.firstnamefield().type(data.firstname)
       signup.lastnamefield().type(data.lastname)
       signup.emailfield().type(data.email)
       signup.passwordfield().type(data.password)
       signup.confirmpasswordfield().type(data.confirmpassword)
       signup.clickcreatebutton().click({force: true})
    })
})