class ProductListPage {
    private goToItemPageButton: string;

    constructor(){
        this.goToItemPageButton = "#item_1_title_link";
    }

    public goToItemPage(): void {
        cy.get(this.goToItemPageButton).click();
    }
}

export {ProductListPage};