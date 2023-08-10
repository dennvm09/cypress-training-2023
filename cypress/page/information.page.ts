class InformationPage {
    
    private firstNameField: string;
    private lastNameField: string;
    private postalCodeField: string;
    private continueToOverviewButton: string;

    constructor(){
        this.firstNameField = "[data-test='firstName']";
        this.lastNameField = "[data-test='lastName']";
        this.postalCodeField = "[data-test='postalCode']";
        this.continueToOverviewButton = "[data-test='continue']";
    }

    public fillInformationForm(): void {
        cy.get(this.firstNameField).type("Cypress");
        cy.get(this.lastNameField).type("Workshop");
        cy.get(this.postalCodeField).type("00000");
    }

    public goToOverviewPage(): void {
        cy.get(this.continueToOverviewButton).click();
    }
}

export {InformationPage};
