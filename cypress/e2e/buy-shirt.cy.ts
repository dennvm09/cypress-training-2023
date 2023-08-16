import { CheckoutCompletePage } from "../page/checkout-complete.page";
import { LoginPage } from "../page/index";
import { InformationPage } from "../page/information.page";
import { ItemPage } from "../page/item.page";
import { OverviewPage } from "../page/overview.page";
import { ProductListPage } from "../page/product-list.page";
import { ShoppingCartPage } from "../page/shopping-cart.page";

const loginPage = new LoginPage();
const productListPage = new ProductListPage();
const itemPage = new ItemPage();
const shoppingCartPage = new ShoppingCartPage();
const informationPage = new InformationPage();
const overviewPage = new OverviewPage();
const checkoutCompletePage = new CheckoutCompletePage();



describe("Buy a black t-shirt", () => {
    it("Login in Sauce Page with empty fields", () => {
        //Arrange
        loginPage.visitLoginPage();
        //Action
        loginPage.goToLoginButton();
        //Assertion
        loginPage.verifyErrorMessage("Epic sadface: Username is required");
    });
    it("Login in Sauce Page with valid credentials", () => {
        //Arrange
        loginPage.visitLoginPage();
        loginPage.typeUsername("standard_user");
        loginPage.typePassword("secret_sauce");
        loginPage.goToLoginButton();
        //Action
        productListPage.displayContainer();
        //Assertion
        productListPage.verifyItemName("Sauce Labs Bolt T-Shirt");
        productListPage.verifyItemPrice("$15.99");

    });
    ///
    it("then the t-shirt should be bought", () => {
        itemPage.addToCart();
        itemPage.goToShoppingCartPage();
        shoppingCartPage.goToInformationPage();
        informationPage.fillInformationForm();
        informationPage.goToOverviewPage();
        overviewPage.goToCheckoutPage();
        checkoutCompletePage.verifyConfirmationMsg();
    });
});