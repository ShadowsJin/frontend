import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://176.109.100.162");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    //TODO "tastyQ - платформа для создания тестов и проверочных работ"
    "Vite + React + TS"
  );
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
