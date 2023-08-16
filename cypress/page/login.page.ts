class LoginPage {
  private loginURL: string;
  private userNameField: string;
  private passwordField: string;
  private loginButton: string;
  private errorMessageLabel: string;

  constructor() {
    this.loginURL = "http://saucedemo.com/";
    this.userNameField = "[data-test='username']";
    this.passwordField = "[data-test='password']";
    this.loginButton = "[data-test='login-button']";
    this.errorMessageLabel = "[data-test='error']";
  }

  public visitLoginPage(): void {
    cy.visit(this.loginURL);
  }

  public goToLoginButton(): void {
    cy.get(this.loginButton).click();
  }

  public typeUsername(message:string): void {
    cy.get(this.userNameField).type(message);
  }

  public verifyErrorMessage(message:string): void {
    cy.get(this.errorMessageLabel).should("have.text", message);
  }
  
  public typePassword(message:string): void {
    cy.get(this.passwordField).type(message);
  }
}

export { LoginPage };
