import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly header: Locator;
  readonly activeMenuItem: Locator;
  readonly menuItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.locator('#header');
    this.activeMenuItem = this.page.locator('.shop-menu a[style*="orange"]');
    this.menuItems = this.page.locator('header .shop-menu li');
  }

  async goto() {
    await this.page.goto('/');
  }
}
