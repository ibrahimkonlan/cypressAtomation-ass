/// <reference types="cypress" />

import data from "../fixtures/signin.json"
import Signin from "../page object model/signin"

const signin = new Signin()

describe("Should sign in to the online store", ()=>{

    beforeEach(()=>{
        signin.open()
        signin.validateUrl()  
      })
    
      it("Should enter the signin form with an email and a password", () =>{
        signin.signinlink().click()
        signin.email().type(data.Email)
        signin.password().type(data.Password)
        signin.signinbutton().click()
      })

})