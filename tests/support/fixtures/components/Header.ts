import { expect, Page } from '@playwright/test';

export class Header {
    constructor(private page: Page) {}

    async shouldBeVisible() {
        const header = this.page.locator('div[data-test="header-container"]');
        await expect(header).toBeVisible();
    }

    async clickingCart() {
        const cartButton = this.page.locator('a[data-test="shopping-cart-link"]');
        await this.shouldBeVisible();
        await expect(cartButton).toBeVisible();
        await cartButton.click();
    }

    async checkCartItemsCount(expectedCount: number) {
        const cartBadge = this.page.locator('span[data-test="shopping-cart-badge"]');
        await this.shouldBeVisible();
        await expect(cartBadge).toHaveText(expectedCount.toString());
    }
}