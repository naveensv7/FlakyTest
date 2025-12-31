// @ts-check
import { test, expect } from "@playwright/test";

test("Check Flaky", { tag: "@quarantine" }, async ({ page }) => {
  console.log("Running test 1");
  if (Math.random() > 0.5) {
    throw new Error("Random error");
  }
});
test("Run For PR Execution", async ({ page }) => {
  console.log("Running test 2");
  expect(1).toBe(1);
});
