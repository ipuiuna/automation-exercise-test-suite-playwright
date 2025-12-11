import { type Locator, type Page, expect } from '@playwright/test';

export class ProductPage {
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
  }

  async waitForProducts() {
    await expect(this.title).toBeVisible();
    await expect(this.productCards.first()).toBeVisible();
  }
}
