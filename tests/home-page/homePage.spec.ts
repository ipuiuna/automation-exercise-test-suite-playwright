import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/home.page';

test.describe('Home page navigation and layout', () => {
  test('Home page loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.header).toBeVisible();
    await expect(homePage.activeMenuItem).toHaveCount(1);
    await expect(homePage.activeMenuItem.first()).toHaveText('Home');
    await expect(homePage.menuItems).toHaveCount(8);
  });
});
