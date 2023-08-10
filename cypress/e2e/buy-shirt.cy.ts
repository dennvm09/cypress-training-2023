describe("Buy a black t-shirt", () => {
    it("then the t-shirt should be bought", () => {
        cy.visit("https://www.saucedemo.com/"); //(1)
        cy.get(".login-box > form > div > input#user-name").type("standard_user"); //(2)
        cy.get(".login-box > form > div > input#password").type("secret_sauce"); //(2)
        cy.get("input[type='submit']").click(); //(2)
        cy.get("#item_4_title_link > .inventory_item_name").click(); //(3)
        cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click(); //(4)
        cy.get(".shopping_cart_link").click(); //(5)
        cy.get("[data-test='checkout']").click(); //(6)
        cy.get("[data-test='firstName']").type("Cypress"); //(7)
        cy.get("[data-test='lastName']").type("Workshop"); //(8)
        cy.get("[data-test='postalCode']").type("0000000"); //(9)
        cy.get("[data-test='continue']").click(); //(10)
        cy.get("[data-test='finish']").click();
        cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
            "have.text",
            "Thank you for your order!"
       ); //(12)
    });
});