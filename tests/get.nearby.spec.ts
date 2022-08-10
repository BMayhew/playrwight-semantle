import { test, request, expect } from "@playwright/test";

test.describe("GET /nth_nearby/{word}/999", () => {
  test("successful api call", async ({ request }) => {
    const response = await request.get(
      "https://semantle.com/nth_nearby/finally/998"
    );
    const body = JSON.parse(await response.text());
    expect(body).toBe("eventually");
  });
});
