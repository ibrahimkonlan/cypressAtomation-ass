/// <reference types="cypress" />
import Data from "../fixtures/product"
import signin from "../fixtures/signin.json"

import Product from "../page object model/Product";
const product = new Product();

const company = "AmaliTech"
const streetaddress = "Box 30, Takoradi"
const streetaddress1 = "Box 10, Effia Kuma"
const streetaddress2 = "Box 683, New Takoradi"
const city = "New York"
const state = "Taxes"
const postalcode = "342"
const country = "United State"
const telnumber = "023957203884"

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
      // product.cartmodel().click({force:true})
    })

    it("Should fill in the shopping details page", ()=>{
         
      cy.visit("https://magento.softwaretestingboard.com/checkout/#shipping")
  
         product.signin().click()
  
         product.email().type(signin.Email)
         product.password().type(signin.Password)
         product.submit().click()
  
         product.company().type(company)
         product.streetaddress().type(streetaddress)
         product.streetaddress1().type(streetaddress1)
         product.streetaddress2().type(streetaddress2)
         product.city().type(city)
         product.selectstate().select(state)
         product.postalcode().type(postalcode)
         product.country().select(country)
         product.telnumber().type(telnumber)
         product.selectitem().first().check()
         
    })

})