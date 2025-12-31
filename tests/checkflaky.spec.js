// @ts-check
import { test, expect } from "@playwright/test";

test("Check Flaky", { tag: "@quarantine" }, async ({ page }) => {
  if (Math.random() > 0.5) {
    throw new Error("Random error");
  }
});
