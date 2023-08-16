class ItemPage {
    private addToCartButton: string;
    private goToShoppingCartPageButton: string;
    private itemNameLabel: string;
    private itemPriceLabel: string;

    constructor(){
        this.addToCartButton = "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']";
        this.goToShoppingCartPageButton = ".shopping_cart_link";
        this.itemNameLabel = ".inventory_details_name";
        this.itemPriceLabel = ".inventory_details_price";
    }

    public verifyItemName(message:string): void {
        cy.get(this.itemNameLabel).should("have.text", message);
    }

    public verifyItemPrice(message:string): void {
        cy.get(this.itemPriceLabel).should("have.text", message);
    }

    public addToCart(): void {
        cy.get(this.addToCartButton).click();
    }

    public goToShoppingCartPage(): void {
        cy.get(this.goToShoppingCartPageButton).click();
    }
}

export {ItemPage};