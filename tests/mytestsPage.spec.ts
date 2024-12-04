import { test, expect } from "@playwright/test";

test("mytests has necessary items", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("http://localhost:5173/mytests");

  await expect(page.getByText("Созданные")).toBeVisible();
  await expect(page.getByText("Решенные")).toBeVisible();
  await expect(page.getByText("Создать новый тест")).toBeVisible();
});

test("mytests can add new test", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("http://localhost:5173/mytests");

  await page.click('button[type="button"]');

  await expect(page.getByText("Название:")).toBeVisible();
  await expect(page.getByText("Описание:")).toBeVisible();
  await page.fill('input[name="title"]', "Новый тестовый тест");
  await page.fill(
    'textarea[name="description"]',
    "описание нового тестового теста"
  );
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(
    "http://localhost:5173/createtest/Новый%20тестовый%20тест"
  );
});
