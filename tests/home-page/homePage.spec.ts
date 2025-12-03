import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/home.page';
import { ProductPage } from '@pages/product.page';
import { CartPage } from '@pages/cart.page';
import { ContactPage } from '@pages/contact.page';

test.describe('Home page navigation and layout', () => {
  test('TC01 - Home page loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.header).toBeVisible();
    await expect(homePage.activeMenuItem).toHaveCount(1);
    await expect(homePage.activeMenuItem.first()).toHaveText('Home');
    await expect(homePage.menuItems).toHaveCount(8);
    await expect(homePage.sliderBanner).toBeVisible();
    await expect(homePage.sliderItems).toHaveCount(3);
  });

  test('TC02 - Navigate to Products page from the top menu', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductPage(page);
    await homePage.goto();
    await homePage.gotoProductsPage();
    await expect(page).toHaveURL(/.*\/products/);
    await expect(productsPage.title).toHaveText('All Products');
    await expect(productsPage.productCards).toHaveCount(34);
  });

  test('TC03 - Navigate to Cart page from the top menu', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    await homePage.goto();
    await homePage.gotoCartPage();
    await expect(page).toHaveURL(/.*\/view_cart/);
    await expect(cartPage.emptyCartMessage).toBeVisible();
  });

  test('TC04 - Navigate to Contact Us page from the top menu', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);
    await homePage.goto();
    await homePage.gotoContactPage();
    await expect(page).toHaveURL(/.*\/contact_us/);
    await expect(contactPage.title).toContainText('Contact Us');
    await expect(contactPage.nameField).toBeVisible();
    await expect(contactPage.nameField).toBeEnabled();
    await expect(contactPage.email).toBeVisible();
    await expect(contactPage.email).toBeEnabled();
    await expect(contactPage.subject).toBeVisible();
    await expect(contactPage.subject).toBeEnabled();
    await expect(contactPage.message).toBeVisible();
    await expect(contactPage.message).toBeEnabled();
    await expect(contactPage.uploadFileInput).toBeVisible();
    await expect(contactPage.uploadFileInput).toBeEnabled();
    await expect(contactPage.submitButton).toBeVisible();
    await expect(contactPage.submitButton).toBeEnabled();
  });
});
