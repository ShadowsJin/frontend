import { test, expect } from "@playwright/test";

test("createtest has necessary items", async ({ page }) => {
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
  await expect(page.getByText("Вопрос :")).toBeVisible();
  await expect(page.getByText("Удалить вопрос")).toBeVisible();
  await expect(page.getByText("Вариант ответа 1:")).toBeVisible();
  await expect(page.getByText("Добавить ответ")).toBeVisible();
  await expect(page.getByText("Добавить Вопрос")).toBeVisible();
  await expect(page.getByText("Завершить")).toBeVisible();
});
