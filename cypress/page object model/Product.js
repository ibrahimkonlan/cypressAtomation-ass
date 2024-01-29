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
        return cy.get(".action.showcart:visible")
    }

    // clickcountsign(){
    //     return cy.get('.showcart')
    // }

    cartmodel(){
        return cy.get('#top-cart-btn-checkout')
    }

    signin(){
        return cy.get("button[type=''button]")
    }

    email(){
        return cy.get("#login-email")
    }

    password(){
        return cy.get("#login-password")
    }

    submit(){
        return cy.get("button[type=submit]")
    }

    company(){
        return cy.get('#E7WTQCI')
    }
}

export default Product;