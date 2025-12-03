import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/home.page';
import { ProductPage } from '@pages/product.page';

test.describe('Home page navigation and layout', () => {
  test('Home page loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.header).toBeVisible();
    await expect(homePage.activeMenuItem).toHaveCount(1);
    await expect(homePage.activeMenuItem.first()).toHaveText('Home');
    await expect(homePage.menuItems).toHaveCount(8);
    await expect(homePage.sliderBanner).toBeVisible();
    await expect(homePage.sliderItems).toHaveCount(3);
  });

  test('Navigate to Products page from the top menu', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductPage(page);
    await homePage.goto();
    await homePage.gotoProductsPage();
    await expect(page).toHaveURL(/.*\/products/);
    await expect(productsPage.title).toHaveText('All Products');
    await expect(productsPage.productCards).toHaveCount(34);
  });
});
