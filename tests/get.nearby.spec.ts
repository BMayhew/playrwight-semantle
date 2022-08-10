import { test, expect } from "@playwright/test";

test.describe("GET /nth_nearby/{word}/999", () => {
  test("successful api call", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/nth_nearby/finally/998`);
    const body = JSON.parse(await response.text());
    expect(body).toBe("eventually");
  });
});
