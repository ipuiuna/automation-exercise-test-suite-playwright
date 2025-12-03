import { test, expect } from '@fixtures/base.fixture';

test.describe('Home page navigation and layout', () => {
  test('TC01 - Home page loads successfully', async ({ homePage }) => {
    await expect(homePage.header).toBeVisible();
    await expect(homePage.activeMenuItem).toHaveCount(1);
    await expect(homePage.activeMenuItem.first()).toHaveText('Home');
    await expect(homePage.menuItems).toHaveCount(8);
    await expect(homePage.sliderBanner).toBeVisible();
    await expect(homePage.sliderItems).toHaveCount(3);
  });

  test('TC02 - Navigate to Products page from the top menu', async ({
    homePage,
    productsPage,
  }) => {
    await homePage.gotoProductsPage();
    await expect(productsPage.title).toHaveText('All Products');
    await expect(productsPage.productCards).toHaveCount(34);
  });

  test('TC03 - Navigate to Cart page from the top menu', async ({
    homePage,
    cartPage,
  }) => {
    await homePage.gotoCartPage();
    await expect(cartPage.emptyCartMessage).toBeVisible();
  });

  test('TC04 - Navigate to Contact Us page from the top menu', async ({
    homePage,
    contactPage,
  }) => {
    await homePage.gotoContactPage();
    await expect(contactPage.title).toContainText('Contact Us');
    await contactPage.expectAllFieldsVisibleAndEditable();
  });
});
