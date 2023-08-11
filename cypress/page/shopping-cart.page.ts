class ShoppingCartPage {
    
    private checkoutButton: string;

    constructor(){
        this.checkoutButton = "[data-test='checkout']";
    }


    public goToInformationPage(): void {
        cy.get(this.checkoutButton).click();
    }
}

export {ShoppingCartPage};