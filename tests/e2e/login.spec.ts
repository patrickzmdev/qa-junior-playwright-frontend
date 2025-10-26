import { test } from "../support/index";
import { users } from "../support/fixtures/users";

test.describe("Cenários de login", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  test("deve logar com sucesso ao utilizar credenciais válidas", async ({
    loginPage,
    inventPage,
  }) => {
    await loginPage.loginUser(
      users.standardUser.username,
      users.standardUser.password
    );
    await inventPage.shouldBeVisible();
  });

  test("deve exibir mensagem de erro ao utilizar credenciais inválidas", async ({
    loginPage,
  }) => {
    await loginPage.loginUser(
      users.invalidUser.username,
      users.invalidUser.password
    );
    await loginPage.validateErrorMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
