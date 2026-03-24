import { test, expect } from '@playwright/test';

test.describe('VWO App - Login Test (AI Planned)', () => {

  test('Verify user can login successfully', async ({ page }) => {

    // Step 1: Navigate
    await page.goto('https://app.vwo.com');

    // Step 2: Enter Username
    await page.locator('#login-username').fill('your_email@example.com');

    // Step 3: Enter Password
    await page.locator('#login-password').fill('your_password');

    // Step 4: Click Login
    await page.locator('button[type="submit"]').click();

    // Step 5: Wait for dashboard
    await page.waitForLoadState('networkidle');

    // Step 6: Validation
    await expect(page).toHaveURL(/dashboard/);

    // Optional: Validate element
    await expect(page.locator('text=Dashboard')).toBeVisible();

  });

});