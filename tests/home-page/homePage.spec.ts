import { test, expect } from '@fixtures/base.fixture';
import { saveAndAttachScreenshot } from '@helpers/saveAndAttachScreenshot';

test.describe('Home page navigation and layout', () => {
  test('TC01 - Home page loads successfully', async ({
    homePage,
  }, testInfo) => {
    await expect(homePage.header).toBeVisible();
    await expect(homePage.activeMenuItem).toHaveCount(1);
    await expect(homePage.activeMenuItem.first()).toHaveText('Home');
    await expect(homePage.menuItems).toHaveCount(8);
    await expect(homePage.sliderBanner).toBeVisible();
    await expect(homePage.sliderItems).toHaveCount(3);
    await saveAndAttachScreenshot(
      homePage.page,
      testInfo,
      `tc01-home-page.png`
    );
  });

  test('TC02/TC05 - Navigate to Products page from the top menu', async ({
    homePage,
    productsPage,
  }, testInfo) => {
    await homePage.gotoProductsPage();
    await expect(productsPage.title).toHaveText('All Products');
    await expect(productsPage.productCards).toHaveCount(34);
    await saveAndAttachScreenshot(
      productsPage.page,
      testInfo,
      `tc02-from-home-to-products-page.png`
    );
  });

  test('TC03 - Navigate to Cart page from the top menu', async ({
    homePage,
    cartPage,
  }, testInfo) => {
    await homePage.gotoCartPage();
    await expect(cartPage.emptyCartMessage).toBeVisible();
    await saveAndAttachScreenshot(
      cartPage.page,
      testInfo,
      `tc03-from-home-to-cart-page.png`
    );
  });

  test('TC04 - Navigate to Contact Us page from the top menu', async ({
    homePage,
    contactPage,
  }, testInfo) => {
    await homePage.gotoContactPage();
    await expect(contactPage.title).toContainText('Contact Us');
    await contactPage.expectAllFieldsVisibleAndEditable();
    await saveAndAttachScreenshot(
      contactPage.page,
      testInfo,
      `tc04-from-home-to-contact-page.png`
    );
  });
});
