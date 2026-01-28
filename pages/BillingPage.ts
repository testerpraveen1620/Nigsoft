import { Page, Locator } from '@playwright/test';

/**
 * Billing Page Object Model
 * Handles all interactions for the billing system
 */
export class BillingPage {
  readonly page: Page;

  // ============== STEP 1: Billing Menu Locators ==============
  readonly billingMenuBtn: Locator;

  // ============== STEP 2: New Billing Locators ==============
  readonly newBillingBtn: Locator;

  // ============== STEP 3: Add Patient Locators ==============
  readonly addPatientBtn: Locator;

  // ============== STEP 4: Title Dropdown Locators ==============
  readonly titleDropdown: Locator;
  readonly titleDropdownOptions: Locator;

  // ============== STEP 5: Patient Name Locators ==============
  readonly patientNameInput: Locator;

  // ============== STEP 6: Mobile Number Locators ==============
  readonly mobileNumberInput: Locator;

  // ============== STEP 7: Alternate Mobile Number Locators ==============
  readonly alternateMobileNumberInput: Locator;

  // ============== STEP 8: Age Input Locators ==============
  readonly ageInput: Locator;

  // ============== STEP 9: Age Type Dropdown Locators ==============
  readonly ageTypeDropdown: Locator;
  readonly ageTypeOptions: Locator;

  // ============== STEP 10: Referred By Dropdown Locators ==============
  readonly referredByDropdown: Locator;
  readonly referredBySearchBox: Locator;
  readonly referredByOptions: Locator;

  // ============== STEP 11: Outside Lab Dropdown Locators ==============
  readonly outsideLabDropdown: Locator;
  readonly outsideLabSearchBox: Locator;
  readonly outsideLabOptions: Locator;

  // ============== STEP 12: Referral Hospital Dropdown Locators ==============
  readonly referralHospitalDropdown: Locator;
  readonly referralHospitalSearchBox: Locator;
  readonly referralHospitalOptions: Locator;

  // ============== STEP 13: Height Input Locators ==============
  readonly heightInput: Locator;

  // ============== STEP 14: Weight Input Locators ==============
  readonly weightInput: Locator;

  // ============== STEP 15: Email Input Locators ==============
  readonly emailInput: Locator;

  // ============== STEP 16: Area Input Locators ==============
  readonly areaInput: Locator;

  // ============== STEP 17: City Input Locators ==============
  readonly cityInput: Locator;

  // ============== STEP 18: Pincode Input Locators ==============
  readonly pincodeInput: Locator;

  // ============== STEP 19: Insurance Input Locators ==============
  readonly insuranceInput: Locator;

  // ============== STEP 20: Company Input Locators ==============
  readonly companyInput: Locator;

  // ============== STEP 21: Register Button Locators ==============
  readonly registerBtn: Locator;

  // ============== CUTOFF Locators for Validation ==============
  readonly cutoffAmount1: Locator;
  readonly cutoffAmount2: Locator;
  readonly cutoffAmount3: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize all locators with dummy selectors
    // These will be replaced with actual selectors later

    // Step 1: Billing Menu
    this.billingMenuBtn = page.locator('//a[@data-target="#collapseBilling"]');

    // Step 2: New Billing
    this.newBillingBtn = page.locator('//a[@id="header_bill_id"]');

    // Step 3: Add Patient
    this.addPatientBtn = page.locator('(//a[@href="patient.php"])[2]');

    // Step 4: Title Dropdown
    this.titleDropdown = page.locator('//select[@id="title"]');
    this.titleDropdownOptions = page.locator('//option[@value="Mr"]');

    // Step 5: Patient Name
    this.patientNameInput = page.locator('//input[@id="patientName"]');

    // Step 6: Mobile Number
    this.mobileNumberInput = page.locator('//input[@id="mobileNo"]');

    // Step 7: Alternate Mobile Number
    this.alternateMobileNumberInput = page.locator('//input[@id="alternateMobileNo"]');

    // Step 8: Age
    this.ageInput = page.locator('[data-testid="age-input"]');

    // Step 9: Age Type
    this.ageTypeDropdown = page.locator('//input[@id="age"]');
    this.ageTypeOptions = page.locator('//button[@id="Y"]');

    // Step 10: Referred By
    this.referredByDropdown = page.locator('//span[@id="select2-select_ref-container"]');
    this.referredBySearchBox = page.locator('//input[@type="search"]');
    this.referredByOptions = page.locator('(//li[@class="select2-results__option"])[4]');

    // Step 11: Outside Lab
    this.outsideLabDropdown = page.locator('//span[@id="select2-select_ref_lab-container"]');
    this.outsideLabSearchBox = page.locator('//input[@class="select2-search__field"]');
    this.outsideLabOptions = page.locator('(//li[@class="select2-results__option"])[5]');

    // Step 12: Referral Hospital
    this.referralHospitalDropdown = page.locator('//span[@id="select2-select_ref_hos-container"]');
    this.referralHospitalSearchBox = page.locator('[daeftal-search"]');
    this.referralHospitalOptions = page.locator('//li[@id="select2-select_ref_hos-result-rywh-213486"]');

    // Step 13: Height
    this.heightInput = page.locator('//input[@id="height"]');

    // Step 14: Weight
    this.weightInput = page.locator('//input[@id="weight"]');

    // Step 15: Email
    this.emailInput = page.locator('//input[@id="emailId"]');

    // Step 16: Area
    this.areaInput = page.locator('//input[@id="area"]');

    // Step 17: City
    this.cityInput = page.locator('//input[@id="city"]');

    // Step 18: Pincode
    this.pincodeInput = page.locator('//input[@id="pin"]');

    // Step 19: Insurance
    this.insuranceInput = page.locator('//input[@id="insuranceno"]');

    // Step 20: Company
    this.companyInput = page.locator('//input[@id="insurancecompany"]');

    // Step 21: Register
    this.registerBtn = page.locator('//input[@id="patient_save"]');

    // Cutoff validation locators
    this.cutoffAmount1 = page.locator('[data-testid="cutoff-amount-1"]');
    this.cutoffAmount2 = page.locator('[data-testid="cutoff-amount-2"]');
    this.cutoffAmount3 = page.locator('[data-testid="cutoff-amount-3"]');
  }

  // ============== STEP 1: Click Billing Menu ==============
  async clickBillingMenu(): Promise<void> {
    await this.billingMenuBtn.click();
  }

  // ============== STEP 2: Click New Billing ==============
  async clickNewBilling(): Promise<void> {
    await this.newBillingBtn.click();
  }

  // ============== STEP 3: Click Add Patient ==============
  async clickAddPatient(): Promise<void> {
    await this.addPatientBtn.click();
  }

  // ============== STEP 4: Select Title ==============
  async selectTitle(titleValue: string): Promise<void> {
    await this.titleDropdown.click();
    await this.page.locator(`[data-testid="title-option"]:has-text("${titleValue}")`).click();
  }

  // ============== STEP 5: Fill Patient Name ==============
  async fillPatientName(patientName: string): Promise<void> {
    await this.patientNameInput.fill(patientName);
  }

  // ============== STEP 6: Fill Mobile Number ==============
  async fillMobileNumber(mobileNumber: string): Promise<void> {
    await this.mobileNumberInput.fill(mobileNumber);
  }

  // ============== STEP 7: Fill Alternate Mobile Number ==============
  async fillAlternateMobileNumber(alternateMobile: string): Promise<void> {
    await this.alternateMobileNumberInput.fill(alternateMobile);
  }

  // ============== STEP 8: Fill Age ==============
  async fillAge(age: string): Promise<void> {
    await this.ageInput.fill(age);
  }

  // ============== STEP 9: Select Age Type ==============
  async selectAgeType(ageType: string): Promise<void> {
    await this.ageTypeDropdown.click();
    await this.page.locator(`[data-testid="age-type-option"]:has-text("${ageType}")`).click();
  }

  // ============== STEP 10: Select Referred By ==============
  async selectReferredBy(referredByName: string): Promise<void> {
    await this.referredByDropdown.click();
    await this.referredBySearchBox.fill(referredByName);
    await this.page.locator(`[data-testid="referred-by-option"]:has-text("${referredByName}")`).first().click();
  }

  // ============== STEP 11: Select Outside Lab ==============
  async selectOutsideLab(labName: string): Promise<void> {
    await this.outsideLabDropdown.click();
    await this.outsideLabSearchBox.fill(labName);
    await this.page.locator(`[data-testid="outside-lab-option"]:has-text("${labName}")`).first().click();
  }

  // ============== STEP 12: Select Referral Hospital ==============
  async selectReferralHospital(hospitalName: string): Promise<void> {
    await this.referralHospitalDropdown.click();
    await this.referralHospitalSearchBox.fill(hospitalName);
    await this.page.locator(`[data-testid="referral-hospital-option"]:has-text("${hospitalName}")`).first().click();
  }

  // ============== STEP 13: Fill Height ==============
  async fillHeight(height: string): Promise<void> {
    await this.heightInput.fill(height);
  }

  // ============== STEP 14: Fill Weight ==============
  async fillWeight(weight: string): Promise<void> {
    await this.weightInput.fill(weight);
  }

  // ============== STEP 15: Fill Email ==============
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  // ============== STEP 16: Fill Area ==============
  async fillArea(area: string): Promise<void> {
    await this.areaInput.fill(area);
  }

  // ============== STEP 17: Fill City ==============
  async fillCity(city: string): Promise<void> {
    await this.cityInput.fill(city);
  }

  // ============== STEP 18: Fill Pincode ==============
  async fillPincode(pincode: string): Promise<void> {
    await this.pincodeInput.fill(pincode);
  }

  // ============== STEP 19: Fill Insurance ==============
  async fillInsurance(insurance: string): Promise<void> {
    await this.insuranceInput.fill(insurance);
  }

  // ============== STEP 20: Fill Company ==============
  async fillCompany(company: string): Promise<void> {
    await this.companyInput.fill(company);
  }

  // ============== STEP 21: Click Register ==============
  async clickRegister(): Promise<void> {
    await this.registerBtn.click();
  }

  // ============== CUTOFF VALIDATION ==============
  async getCutoffAmount1(): Promise<string | null> {
    return await this.cutoffAmount1.textContent();
  }

  async getCutoffAmount2(): Promise<string | null> {
    return await this.cutoffAmount2.textContent();
  }

  async getCutoffAmount3(): Promise<string | null> {
    return await this.cutoffAmount3.textContent();
  }

  // ============== NAVIGATE TO BILLING ==============
  async navigateToBilling(): Promise<void> {
    await this.page.goto('/billing');
  }
}
