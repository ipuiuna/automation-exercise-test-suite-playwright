## Automation Exercise – End-to-End Test Suite (Playwright + TypeScript)

## 🧪 Feature: Home Page

### 🎯 Description

Basic functions of the home page

---

### 📌 Scenarios

### ✅ 1. Home Page:

####Feature: Home page navigation and layout

```gherkin
  Scenario: (TC01) Home page loads successfully
    Given the user opens the home page
    Then the "HOME" menu item should be active
    And the slider/banner should be visible
    And the navigation bar should display all main menu options

  Scenario: (TC02) Navigate to Products page from the top menu
    Given the user is on the home page
    When the user clicks the "Products" menu link
    Then the user should land on the All Products page

  Scenario: (TC03) Navigate to Cart page from the top menu
    Given the user is on the home page
    When the user clicks the "Cart" menu link
    Then the cart page should be displayed

  Scenario: (TC04) Navigate to Contact Us page from the top menu
    Given the user is on the home page
    When the user clicks the "Contact Us" link
    Then the contact form page should be displayed
```

### ✅ 2. Products – List, Search, Filters, Details

#### Feature: Product listing and details

```gherkin
  Background:
    Given the user is on the home page

  Scenario: View all products
    When the user clicks the "Products" menu link
    Then the All Products page should be displayed
    And the product list should be visible

  Scenario: View product detail page
    Given the user is on the All Products page
    When the user clicks "View Product" of any listed item
    Then the product detail page should open
    And product name, category, price, availability, condition and brand should be visible
```

#### Feature: Search Products

```gherkin
  Background:
    Given the user is on the All Products page

  Scenario Outline: Search for a valid product
    When the user enters "<keyword>" in the search field
    And the user clicks the search button
    Then products related to "<keyword>" should be displayed
    And the results title "SEARCHED PRODUCTS" should be visible

  Examples:
    | keyword |
    | dress   |
    | tshirt  |
    | jeans   |

  Scenario: Search returns no products
    When the user enters "invalidproduct123" in the search field
    And clicks search
    Then no products should be displayed
    And the page should show no matching results
```

### ✅ 3. Brand & Category Filtering

#### Feature: Filter Products by Category / Subcategory

```gherkin
  Background:
    Given the user is on the All Products page

  Scenario: Filter by Women category
    When the user expands "Women" category
    And clicks "Dress"
    Then only Women > Dress products should be shown

  Scenario: Filter by Men category
    When the user expands "Men" category
    And clicks "Tshirts"
    Then only Men > Tshirts products should be shown

  Scenario: Filter by Kids category
    When the user expands "Kids" category
    And clicks "Tops & Shirts"
    Then the page should list only Kids products
```

#### Feature: Filter Products by Brand

```gherkin
  Background:
    Given the user is on the All Products page

  Scenario Outline: Filter by single brand
    When the user clicks the "<brand>" brand link
    Then only products with brand "<brand>" should be listed

  Examples:
    | brand        |
    | Polo         |
    | Allen Solly  |
    | H&M          |
    | Kookie Kids  |
```

### ✅ 4. Cart (adding/removing items, quantities)

#### Feature: Add Products to Cart

```gherkin
  Background:
    Given the user is on the All Products page

  Scenario: Add first product to cart from product list
    When the user clicks "Add to cart" on the first product
    Then the product should be added to the cart
    And the modal with "Added!" should appear
    When the user clicks "View Cart"
    Then the cart page should display that product

  Scenario: Add product to cart from product detail page
    When the user clicks "View Product" on the first item
    And clicks "Add to cart"
    Then product should be added to cart
    And appear in the cart page
```

#### Feature: Cart Quantity Manipulation

```gherkin
  Background:
    Given the cart contains at least one product

  Scenario: Increase product quantity in cart
    When the user increases the product quantity to 3
    Then the quantity displayed should be 3
    And the total price should update accordingly

  Scenario: Remove product from cart
    When the user clicks the X button for the product
    Then the product should disappear from the cart
```

#### Feature: Add Recommended Items to Cart

```gherkin
  Background:
    Given the user is on the home page

  Scenario: Add recommended product to cart
    When the user scrolls to the bottom of the page
    And the Recommended Items section becomes visible
    And the user adds one recommended product to the cart
    Then the product should be added successfully
```

## 🚀 How to Run the Tests

Follow the steps below to install dependencies, configure Playwright, and execute the test suite.

### 1. Install project dependencies

```bash
npm install
npx playwright install --with-deps
npx playwright test
```
