class CheckoutCompletePage {
    
    private confirmationMsgLabel: string;

    constructor(){
        this.confirmationMsgLabel = "#contents_wrapper > .checkout_complete_container > h2";
    }

    public verifyConfirmationMsg(): void {
        cy.get(this.confirmationMsgLabel).should("have.text",
        "Thank you for your order!");
    }
}

export {CheckoutCompletePage};