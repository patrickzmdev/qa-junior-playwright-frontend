import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckOutInfoPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async shouldBeVisible() {
    const checkoutContainer = this.page.locator(
      'div[data-test="checkout-info-container"]'
    );
    await expect(checkoutContainer).toBeVisible();
  }

  async insertValueInInputFirstName(firstName: string) {
    const firstNameInput = this.page.locator('input[data-test="firstName"]');
    await firstNameInput.fill(firstName);
  }

  async insertValueInInputLastName(lastName: string) {
    const lastNameInput = this.page.locator('input[data-test="lastName"]');
    await lastNameInput.fill(lastName);
  }

  async insertValueInInputPostalCode(postalCode: string) {
    const postalCodeInput = this.page.locator('input[data-test="postalCode"]');
    await postalCodeInput.fill(postalCode);
  }

  async clickOnContinueButton() {
    const continueButton = this.page.locator('input[data-test="continue"]');
    await this.shouldBeVisible();
    await continueButton.click();
  }

  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.shouldBeVisible();
    await this.insertValueInInputFirstName(firstName);
    await this.insertValueInInputLastName(lastName);
    await this.insertValueInInputPostalCode(postalCode);
  }
}
