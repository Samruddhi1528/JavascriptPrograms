import { test, expect } from '@playwright/test';

test('take screenshot of sdet.live', async ({ page }) => {
  await page.goto('https://sdet.live');
  await page.screenshot({ path: 'sdet_live.png', fullPage: true });
});
