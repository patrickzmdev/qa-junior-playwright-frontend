import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

    async shouldBeVisible() {
        const cartContainer = this.page.locator('div[data-test="cart-contents-container"]');
        await expect(cartContainer).toBeVisible();
    }

    async removeItemByName(itemName: string) {
        await this.shouldBeVisible();
        await this.page
            .locator('[data-test="inventory-item"]')
            .filter({ hasText: itemName })
            .locator('button[data-test^="remove"]')
            .click();
    }

    async validateCardIsEmpty() {
        const cardItem = this.page.locator('[data-test="inventory-item"]');
        await this.shouldBeVisible();
        await expect(cardItem).toHaveCount(0);
    }

    async validateQuantityOfItemsInCart(expectedCount: number) {
        const cartBadge = this.page.locator('span[data-test="shopping-cart-badge"]');
        await this.shouldBeVisible();
        await expect(cartBadge).toHaveText(expectedCount.toString());
    }

    async clickOnCheckoutButton() {
        const checkoutButton = this.page.locator('button[data-test="checkout"]');
        await this.shouldBeVisible();
        await expect(checkoutButton).toBeVisible();
        await checkoutButton.click();
    }
}
