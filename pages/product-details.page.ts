// @pages/product-details.page.ts
import { type Locator, type Page, expect } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  readonly name: Locator;
  readonly price: Locator;
  readonly category: Locator;
  readonly availability: Locator;
  readonly condition: Locator;
  readonly brand: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly newBadge: Locator;
  readonly mainImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator('.product-information h2');
    this.price = page.locator('.product-information span > span');
    this.category = page.locator(
      '.product-information p:has-text("Category:")'
    );
    this.availability = page.locator(
      '.product-information p:has-text("Availability:")'
    );
    this.condition = page.locator(
      '.product-information p:has-text("Condition:")'
    );
    this.brand = page.locator('.product-information p:has-text("Brand:")');
    this.quantityInput = page.locator('input[name="quantity"]');
    this.addToCartButton = page.locator(
      '.product-information button.cart:has-text("Add to cart")'
    );
    this.newBadge = page.locator('.product-information img.newarrival');
    this.mainImage = page.locator('.view-product img');
  }

  async waitForPage() {
    await this.page.waitForURL(/\/product_details\/\d+/);
    await expect(this.name).toBeVisible();
  }

  async expectAllElementsVisible() {
    await expect(this.category).toBeVisible();
    await expect(this.availability).toContainText('In Stock');
    await expect(this.condition).toContainText('New');
    await expect(this.brand).toBeVisible();
    await expect(this.quantityInput).toBeVisible();
    await expect(this.quantityInput).toHaveValue('1');
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.newBadge).toBeVisible();
    await expect(this.mainImage).toBeVisible();
  }

  async expectProductDataMatches(name: string, price: string) {
    await expect(this.name).toHaveText(name);
    await expect(this.price).toHaveText(price);
  }
}
