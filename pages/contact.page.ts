import { type Locator, type Page } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly title: Locator;
  readonly emptyCartMessage: Locator;
  readonly nameField: Locator;
  readonly email: Locator;
  readonly subject: Locator;
  readonly message: Locator;
  readonly uploadFileInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByRole('heading', { name: 'Contact Us' });
    this.emptyCartMessage = this.page.getByText('Cart is empty! Click here to');
    this.nameField = this.page.getByTestId('name');
    this.email = this.page.getByTestId('email');
    this.subject = this.page.getByTestId('subject');
    this.message = this.page.getByTestId('message');
    this.uploadFileInput = page.locator('input[name="upload_file"]');
    this.submitButton = page.getByTestId('submit-button');
  }

  async goto() {
    await this.page.goto('/contact_us');
  }
}
