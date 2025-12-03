import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly header: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.locator('#header');
    this.emptyCartMessage = this.page.getByText('Cart is empty! Click here to');
  }

  async goto() {
    await this.page.goto('/view_cart');
  }
}
