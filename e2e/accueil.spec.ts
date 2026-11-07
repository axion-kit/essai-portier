import { expect, test } from "@playwright/test";

test("l'accueil s'ouvre en vue mobile", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Bonjour|Bonsoir/);
});
