## Automation Exercise – End-to-End Test Suite (Playwright + TypeScript)

## 🧪 Feature: Home Page

### 🎯 Description
Basic functions of the home page

---

### 📌 Scenarios

#### ✅ Scenario: <Scenario Name>
```gherkin
Feature: Home page navigation and layout

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

## 🚀 How to Run the Tests

Follow the steps below to install dependencies, configure Playwright, and execute the test suite.

### 1. Install project dependencies

```bash
npm install
npx playwright install --with-deps
npx playwright test
