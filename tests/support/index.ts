import { LoginPage } from '../pages/LoginPage';
import { InventPage } from '../pages/InventPage';
import { test as base, expect } from "@playwright/test";
import { CartPage } from '../pages/CartPage';
import { CheckOutInfoPage } from '../pages/CheckOutInfoPage';
import { CheckOutCompletePage} from '../pages/CheckOutCompletePage';
import { CheckOutSummaryPage } from '../pages/CheckOutSummaryPage';

type PageFixtures = {
    loginPage: LoginPage;
    inventPage: InventPage;
    cartPage: CartPage;
    checkOutPage: CheckOutInfoPage;
    checkOutSummaryPage: CheckOutSummaryPage;
    checkOutCompletePage: CheckOutCompletePage;
};

const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventPage: async ({ page }, use) => {
        await use(new InventPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkOutPage: async ({ page }, use) => {
        await use(new CheckOutInfoPage(page));
    },
    checkOutSummaryPage: async ({ page }, use) => {
        await use(new CheckOutSummaryPage(page));
    },
    checkOutCompletePage: async ({ page }, use) => {
        await use(new CheckOutCompletePage(page));
    }
});

export { test, expect };