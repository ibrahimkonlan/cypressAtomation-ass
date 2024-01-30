class Product{

    open(){
        return cy.visit("https://magento.softwaretestingboard.com/")
    }

    validateUrl(){
        return cy.url().should("include", "magento.softwaretestingboard.com")
    }

    searchbar(){
        return cy.get("#search")
    }

    clickproductlist(){
       return  cy.get(".qs-option-name")
    }

    choiceproduct(){
        return cy.get('li.item.product.product-item')
    }

    choicesize(){
        return  cy.get('#option-label-size-143-item-166')
     }

     
    choicecolour(){
        return  cy.get('#option-label-color-93-item-49')
     }

     
    choiceqty(){
        return cy.get('#qty')
    }

    clickaddtocart(){
        return cy.get("#product-addtocart-button")
    }

    clickcarticon(){
        return cy.get("a.action.showcart")
    }

    // cartmodel(){
    //     return cy.get('#top-cart-btn-checkout')
    // }

    signin(){
        return cy.get("button.action.action-auth-toggle")
    }

    email(){
        return cy.get("#login-email")
    }

    password(){
        return cy.get("#login-password")
    }

    submit(){
        return cy.get("button.action.action-login.secondary")
    }

    company(){
        return cy.get("input[name='company']")
    }

    streetaddress(){
        return cy.get("input[name='street[0]']")
    }

    streetaddress1(){
        return cy.get("input[name='street[1]']")
    }

    streetaddress2(){
        return cy.get("input[name='street[2]']")
    }

    city(){
        return cy.get("input[name='city']")
    }

    selectstate(){
        return cy.get(".select")
    }

    postalcode(){
       return cy.get("input[name='postcode']")
    }

    country(){
        return cy.get(".select")
    }

    telnumber(){
        return cy.get(".telephone")
    }

    selectitem(){
        return cy.get("input[type='radio']")
    }

    clicknextbutton(){
        return cy.get("button[type='submit']")
    }

    payment(){
        return cy.get("button.action.primary.checkout")
    }
}

export default Product;