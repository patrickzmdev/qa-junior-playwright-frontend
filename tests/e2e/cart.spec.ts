import { users } from "../support/fixtures/users";
import { test } from "../support/index";
import { Header } from "../support/fixtures/components/Header";

test.describe("Cenários de carrinho de compras", () => {
  test.beforeEach(async ({ loginPage, inventPage }) => {
    await loginPage.visit();
    await loginPage.loginUser(
      users.standardUser.username,
      users.standardUser.password
    );
    await inventPage.shouldBeVisible();
  });

  test("deve remover produtos do carrinho de compras", async ({
    inventPage,
    cartPage,
  }) => {
    const items = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];
    const header = new Header(inventPage.page);

    for (const item of items) {
      await inventPage.addItemByName(item);
    }

    await header.clickingCart();

    for (const item of items) {
      await cartPage.removeItemByName(item);
    }

    await cartPage.validateCardIsEmpty();
  });

  test("deve finalizar uma compra com 2 produtos corretamente", async ({
    inventPage,
    cartPage,
    checkOutPage,
    checkOutSummaryPage,
    checkOutCompletePage,
  }) => {
    const items = [
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt",
    ];
    const header = new Header(inventPage.page);

    for (const item of items) {
      await inventPage.addItemByName(item);
    }

    await header.clickingCart();
    await header.checkCartItemsCount(items.length);
    await cartPage.validateQuantityOfItemsInCart(items.length);
    await cartPage.clickOnCheckoutButton();

    await checkOutPage.fillCheckoutInformation("John", "Doe", "12345");
    await checkOutPage.clickOnContinueButton();
    await checkOutSummaryPage.validateQuantityOfItemsInSummary(items.length);
    await checkOutSummaryPage.clickOnFinishButton();
    await checkOutCompletePage.validateMessageOrder(
      "Thank you for your order!"
    );
  });
});
