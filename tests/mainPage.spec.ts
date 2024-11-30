import { APP_URL } from "@/shared/constants/appURL";
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(APP_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    "tastyQ - платформа для создания тестов и проверочных работ"
  );
});

test("can register", async ({ page }) => {
  await page.goto(`${APP_URL}/login`);
  await page.fill('input[name="fullname"]', "Кобзева Елизавета Игоревна");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678Ew");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(`${APP_URL}/mytests`);
});

test("can login", async ({ page }) => {
  await page.goto(`${APP_URL}/login`);
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678Ew");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(`${APP_URL}/mytests`);
});
