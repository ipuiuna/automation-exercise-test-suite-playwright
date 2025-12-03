import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly header: Locator;
  readonly activeMenuItem: Locator;
  readonly menuItems: Locator;
  readonly sliderBanner: Locator;
  readonly sliderItems: Locator;
  readonly productsButton: Locator;
  readonly cartButton: Locator;
  readonly contactButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.locator('#header');
    this.activeMenuItem = this.page.locator('.shop-menu a[style*="orange"]');
    this.menuItems = this.page.locator('header .shop-menu li');
    this.sliderBanner = this.page.locator('#slider-carousel');
    this.sliderItems = this.page.locator(
      '#slider-carousel .carousel-inner .item'
    );
    this.productsButton = this.page.getByRole('link', { name: 'Products' });
    this.cartButton = this.page.getByRole('link', { name: ' Cart' });
    this.contactButton = this.page.getByRole('link', { name: ' Contact us' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async gotoProductsPage() {
    await this.productsButton.click();
    await this.page.waitForURL('**/products');
  }

  async gotoCartPage() {
    await this.cartButton.click();
    await this.page.waitForURL('**/view_cart');
  }

  async gotoContactPage() {
    await this.contactButton.click();
    await this.page.waitForURL('**/contact_us');
  }
}
