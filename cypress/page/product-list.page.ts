class ProductListPage {
    private goToItemPageButton: string;

    constructor(){
        this.goToItemPageButton = "#item_4_title_link > .inventory_item_name";
    }

    public goToItemPage(): void {
        cy.get(this.goToItemPageButton).click();
    }
}

export {ProductListPage};