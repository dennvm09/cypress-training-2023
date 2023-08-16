class ProductListPage {
    private goToItemPageButton: string;
    private inventoryContainer: string;
    private itemInventoryNameLabel: string;
    private itemInventoryPriceLabel: string;
    //private addInventoryItemButton: string;

    constructor(){
        this.goToItemPageButton = "#item_1_title_link";
        this.inventoryContainer = "#inventory_container";
        this.itemInventoryNameLabel = "#item_1_title_link > .inventory_item_name";
        this.itemInventoryPriceLabel = ":nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price";
        //this.addInventoryItemButton = 
    }

    public displayContainer(): void {
        cy.get(this.inventoryContainer).should("be.visible");
    }

    public goToItemPage(): void {
        cy.get(this.goToItemPageButton).click();
    }

    public verifyItemName(message:string): void {
        cy.get(this.itemInventoryNameLabel).should("have.text", message);
    }

    public verifyItemPrice(message:string): void {
        cy.get(this.itemInventoryPriceLabel).should("have.text", message);
    }
}

export {ProductListPage};