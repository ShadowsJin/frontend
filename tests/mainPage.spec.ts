import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    "tastyQ - платформа для создания тестов и проверочных работ"
  );
});

test("can't register, because user name is already taken", async ({ page }) => {
  await page.goto("http://localhost:5173/register");
  await page.fill('input[name="fullname"]', "Ктото Кто ктотович");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678Ew");
  await page.click('button[type="submit"]');
  await expect(
    page.getByText("Ошибка регистрации: this user name is already taken")
  ).toBeVisible();
});

test("can login", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("http://localhost:5173/mytests");
});
