import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async shouldBeVisible() {
    const inventContainer = this.page.locator(
      '[data-test="inventory-container"]'
    );
    await expect(inventContainer).toBeVisible();
  }

  async addItemByName(itemName: string) {
    await this.shouldBeVisible();
    await this.page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: itemName })
      .locator('button[data-test^="add-to-cart"]')
      .click();
  }
}
