class ItemPage {
    private addToCartButton: string;
    private goToShoppingCartPageButton: string;

    constructor(){
        this.addToCartButton = "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']";
        this.goToShoppingCartPageButton = ".shopping_cart_link";
    }

    public addToCart(): void {
        cy.get(this.addToCartButton).click();
    }

    public goToShoppingCartPage(): void {
        cy.get(this.goToShoppingCartPageButton).click();
    }
}

export {ItemPage};