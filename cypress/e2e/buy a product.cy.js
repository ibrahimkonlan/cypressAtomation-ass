/// <reference types="cypress" />
import Data from "../fixtures/product"
import signin from "../fixtures/signin.json"

import Product from "../page object model/Product";
const product = new Product();

const company = "AmaliTech"

describe('Add Products to Cart', () => {

  beforeEach(()=>{
    product.open()
    product.validateUrl()  
  })

  

    it('should add products to the cart', () => {
      
      product.searchbar().type(Data.Product)
      product.clickproductlist().first().click({force:true})
      product.choiceproduct().eq(1).should("be.visible").click()
      product.choicesize().click({force:true}).should("be.visible")
      product.choicecolour().click({force: true}).should("be.visible")
      product.choiceqty().clear().type(Data.qty).should("be.visible")
      product.clickaddtocart().click({force: true})
      product.clickcarticon().should("have.attr", "href", "https://magento.softwaretestingboard.com/checkout/cart/").click({force: true})
      // product.clickcountsign().should("be.visible").click({force:true})
      product.cartmodel().click({force:true})
    })

    it("Should fill in the shopping's details", ()=>{

       product.signin().click()

       product.email().type(signin.Email)
       product.password().type(signin.Password)
       product.submit().click()

       product.company().type(company)
    })


})