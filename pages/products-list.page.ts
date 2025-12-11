import { type Locator, type Page, expect } from '@playwright/test';

export class ProductsListPage {
  readonly page: Page;
  readonly title: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h2.title.text-center', {
      hasText: 'All Products',
    });
    this.productCards = page.locator('.features_items > .col-sm-4');
  }

  async goto() {
    await this.page.goto('/products');
    await this.waitForProducts();
  }

  async waitForProducts() {
    await expect(this.title).toBeVisible();
    await expect(this.productCards.first()).toBeVisible();
  }

  async selectRandomProduct() {
    const count = await this.productCards.count();
    const index = Math.floor(Math.random() * count);
    const card = this.productCards.nth(index);

    const name = await card.locator('.productinfo p').innerText();
    const price = await card.locator('.productinfo h2').innerText();

    await card.locator('.choose ul li a:has-text("View Product")').click();

    return { name, price };
  }
}
