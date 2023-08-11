class CheckoutCompletePage {
    
    private confirmationMsgLabel: string;

    constructor(){
        this.confirmationMsgLabel = ".complete-header";
    }

    public verifyConfirmationMsg(): void {
        cy.get(this.confirmationMsgLabel).should("have.text",
        "Thank you for your order!");
    }
}

export {CheckoutCompletePage};