import { test, expect } from "@playwright/test";

test("profile has necessary items", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("http://localhost:5173/mytests");
  await page.goto("http://localhost:5173/profile");

  await expect(page.getByText("Назад")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Профиль" })).toBeVisible();
  await expect(page.getByText("Загрузить фото")).toBeVisible();
  await expect(page.getByText("Имя:")).toBeVisible();
  // await expect(page.getAttribute("Ктото Кто ктотович")).toBeVisible();
  await expect(page.getByText("Email:")).toBeVisible();
  //   await expect(page.getByText("lizakobzeva@list.ru")).toBeVisible();
  await expect(page.getByText("Отмена")).toBeVisible();
  await expect(page.getByText("Сохранить")).toBeVisible();
});

test("profile can logout", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.fill('input[name="email"]', "lizakobzeva@list.ru");
  await page.fill('input[name="password"]', "12345678");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("http://localhost:5173/mytests");
  await page.goto("http://localhost:5173/profile");

  await page.locator("#logoutIcon").click();

  await expect(
    page.getByRole("heading", { name: "Вы уверенны?" })
  ).toBeVisible();
  await expect(page.getByText("Выйти")).toBeVisible();
  //   await expect(page.getByText("Отмена")).toBeVisible();

  await page.getByRole("button", { name: "Выйти" }).click();
  await expect(page).toHaveURL("http://localhost:5173");
});
