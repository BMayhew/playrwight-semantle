import { test, expect } from "@playwright/test";

let answer;

test.describe("Solve todays puzzle", () => {
  test.beforeEach(async ({ context, page }) => {
    //Creates a way to intercept network traffic and save details from http response
    await page.route("https://semantle.com/similarity/**", async (route) => {
      const response = await page.request.fetch(route.request());
      const url = response.url();
      answer = url.split("/").pop();
      route.continue();
    });

    await page.goto("https://semantle.com/");
  });

  test("should input answer and check for success", async ({ page }) => {
    await page.locator("#rules-close").click();
    await page.locator('[placeholder="Guess"]').fill(answer);
    await page.locator('input:has-text("Guess")').click();

    const guessTable = await page.locator("#guesses");
    expect(guessTable).toContainText("FOUND");
  });
});
