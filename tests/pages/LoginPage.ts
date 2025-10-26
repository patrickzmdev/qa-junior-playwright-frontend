import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async visit() {
        await this.page.goto('/'); 
    }

    async shouldBeVisible() {
        const loginContainer = this.page.locator('.login_container');
        await expect(loginContainer).toBeVisible();
    }

    async insertValueInInputUsername(username: string) {
        const userNameInput = this.page.locator('input[data-test="username"]');
        await userNameInput.fill(username);
    }

    async insertValueInInputPassword(password: string) {
        const passwordInput = this.page.locator('input[data-test="password"]');
        await passwordInput.fill(password);
    }

    async clickLoginButton() {
        const loginButton = this.page.locator('input[data-test="login-button"]');
        await loginButton.click();
    }

    async validateErrorMessage(message: string) {
        const errorMessage = this.page.locator('h3[data-test="error"]');
        await this.shouldBeVisible();
        await expect(errorMessage).toHaveText(message);
    }

    async loginUser(username: string, password: string) {
        await this.shouldBeVisible();
        await this.insertValueInInputUsername(username);
        await this.insertValueInInputPassword(password);
        await this.clickLoginButton();
    }
}
