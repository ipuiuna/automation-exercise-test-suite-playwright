import { test } from '@fixtures/base.fixture';
import { ProductsListPage } from '@pages/products-list.page';
import { ProductDetailsPage } from '@pages/product-details.page';

test.describe('Products – List, Search, Filters, Details', () => {
  test('TC06 - View product detail page', async ({ page }) => {
    const productsListPage = new ProductsListPage(page);
    const productDetailsPage = new ProductDetailsPage(page);

    await productsListPage.goto();

    const { name, price } = await productsListPage.selectRandomProduct();

    await productDetailsPage.waitForPage();
    await productDetailsPage.expectProductDataMatches(name, price);
    await productDetailsPage.expectAllElementsVisible();
  });
});
