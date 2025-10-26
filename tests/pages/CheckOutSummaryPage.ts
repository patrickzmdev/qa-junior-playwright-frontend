import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckOutSummaryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async shouldBeVisible() {
    const checkoutSummaryContainer = this.page.locator(
      'div[data-test="checkout-summary-container"]'
    );
    await expect(checkoutSummaryContainer).toBeVisible();
  }

  async validateQuantityOfItemsInSummary(expectedCount: number) {
    const summaryItem = this.page.locator('div[class="cart_item"]');
    await this.shouldBeVisible();
    await expect(summaryItem).toHaveCount(expectedCount);
  }

  async clickOnFinishButton() {
    const finishButton = this.page.locator('button[data-test="finish"]');
    await this.shouldBeVisible();
    await finishButton.click();
  }
}
