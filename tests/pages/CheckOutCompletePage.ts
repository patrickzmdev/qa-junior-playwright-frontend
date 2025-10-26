import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckOutCompletePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async shouldBeVisible() {
        const checkoutCompleteContainer = this.page.locator('div[data-test="checkout-complete-container"]');
        await expect(checkoutCompleteContainer).toBeVisible();
    }

    async validateMessageOrder(expectedMessage: string) {
        const orderMessage = this.page.locator('h2[data-test="complete-header"]');
        await expect(orderMessage).toHaveText(expectedMessage);
    }
}