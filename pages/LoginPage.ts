import { Page, Locator } from '@playwright/test';

/**
 * Login Page Object Model
 * Handles all interactions for the login system
 */
export class LoginPage {
  readonly page: Page;
  readonly baseURL: string = 'https://niglabs.com/';

  // ============== LOGIN PROCESS Locators ==============
  // STEP 1: Email Input Locator
  readonly emailInput: Locator;

  // STEP 2: Password Input Locator
  readonly passwordInput: Locator;

  // STEP 3: Login Button Locator
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize all locators with dummy selectors
    // These will be replaced with actual selectors later

    // Step 1: Email Input
    this.emailInput = page.locator('//input[@id="username"]');

    // Step 2: Password Input
    this.passwordInput = page.locator('//input[@id="password"]');

    // Step 3: Login Button
    this.loginBtn = page.locator('//a[@id="login_btn"]');
  }

  // ============== STEP 1: Fill Email ==============
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  // ============== STEP 2: Fill Password ==============
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  // ============== STEP 3: Click Login Button ==============
  async clickLoginButton(): Promise<void> {
    await this.loginBtn.click();
  }

  // ============== NAVIGATE TO LOGIN PAGE ==============
  async navigateToLogin(): Promise<void> {
    await this.page.goto(this.baseURL);
  }

  // ============== COMPLETE LOGIN FLOW ==============
  async login(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }
}
