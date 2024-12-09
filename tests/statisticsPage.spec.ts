import { test, expect } from "@playwright/test";

test("statisticsPage has necessary items", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("http://localhost:5173/mytests");

  await page.click('button[type="button"]');

  await page.fill('input[name="title"]', "Новый тестовый тест");
  await page.fill(
    'textarea[name="description"]',
    "описание нового тестового теста"
  );
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(
    "http://localhost:5173/createtest/Новый%20тестовый%20тест"
  );

  await page.getByRole("button", { name: "Завершить" }).click();
  await expect(
    page.getByRole("heading", { name: "Завершить создание теста?" })
  ).toBeVisible();
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("http://localhost:5173/mytests");
});
