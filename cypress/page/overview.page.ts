class OverviewPage {
    
    private finishCheckoutButton: string;

    constructor(){
        this.finishCheckoutButton = "[data-test='finish']";
    }

    public goToCheckoutPage(): void {
        cy.get(this.finishCheckoutButton).click();
    }
}

export {OverviewPage};