import { test as base } from '@playwright/test';
import { HomePage } from '@pages/home.page';
import { ProductsListPage } from '@pages/products-list.page';
import { CartPage } from '@pages/cart.page';
import { ContactPage } from '@pages/contact.page';

type NavigationFixtures = {
  homePage: HomePage;
  productsPage: ProductsListPage;
  cartPage: CartPage;
  contactPage: ContactPage;
};

export const test = base.extend<NavigationFixtures>({
  homePage: async ({ page }, use) => {
    await page.context().clearCookies();
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },

  productsPage: async ({ homePage }, use) => {
    const productsPage = new ProductsListPage(homePage.page);
    await homePage.gotoProductsPage();
    await use(productsPage);
  },

  cartPage: async ({ homePage }, use) => {
    const cartPage = new CartPage(homePage.page);
    await homePage.gotoCartPage();
    await use(cartPage);
  },

  contactPage: async ({ homePage }, use) => {
    const contactPage = new ContactPage(homePage.page);
    await homePage.gotoContactPage();
    await use(contactPage);
  },
});

export { expect } from '@playwright/test';
