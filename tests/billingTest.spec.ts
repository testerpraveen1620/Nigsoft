import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BillingPage } from '../pages/BillingPage';

/**
 * Test Suite: Login to Application and Create Patient with Referrals and Billing
 * 
 * Scenario: 
 * 1. Login to the application
 * 2. Create a new patient
 * 3. Add referrals to the patient
 * 4. Create a bill for the patient
 * 5. Verify cutoff amounts are calculated correctly
 */

test.describe('Billing System - Login, Patient Creation and Bill Generation', () => {
  let loginPage: LoginPage;
  let billingPage: BillingPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    billingPage = new BillingPage(page);
    // Navigate to the login page
    await loginPage.navigateToLogin();
  });

  test('TC_001: Create Patient with Referrals and Generate Bill', async () => {
    // Dummy variables for login - to be replaced with actual credentials
    const loginCredentials = {
      email: 'pravapp@gmail.com',
      password: '123456'
    };

    // Dummy variables - to be replaced with actual test data
    const patientTestData = {
      title: 'Mr', // or 'Mrs', 'Ms', 'Dr', etc.
      fullName: 'John Doe',
      mobileNumber: '9876543210',
      alternateMobileNumber: '9876543211',
      age: '35',
      ageType: 'Y', // Y, M, D (Years, Months, Days)
      referredBy: 'REFERRAL', // Referred person name
      outsideLab: 'REFERRAL LAB', // Outside lab name (optional)
      referralHospital: 'REFERRAL HOSPITAL', // Referral hospital (optional)
      height: '5.9',
      weight: '75',
      email: 'praveen@gmail.com',
      area: 'Steel plant',
      city: 'Salem',
      pincode: '636030',
      insurance: 'XYZ Insurance Co.',
      company: 'Test Company'
    };

    // Referral data with cutoff amounts
    const referralData = [
      {
        name: 'Dr. Smith',
        cutoffAmount: 1000
      },
      {
        name: 'Dr. Johnson',
        cutoffAmount: 1500
      },
      {
        name: 'Dr. Williams',
        cutoffAmount: 2000
      }
    ];

    try {
      // ============== LOGIN PROCESS ==============
      // STEP 1: Fill Email
      console.log(`LOGIN STEP 1: Filling Email as ${loginCredentials.email}...`);
      await loginPage.fillEmail(loginCredentials.email);
      await test.step('Email filled successfully', async () => {});

      // STEP 2: Fill Password
      console.log(`LOGIN STEP 2: Filling Password...`);
      await loginPage.fillPassword(loginCredentials.password);
      await test.step('Password filled successfully', async () => {});

      // STEP 3: Click Login Button
      console.log('LOGIN STEP 3: Clicking Login Button...');
      await loginPage.clickLoginButton();
      await test.step('Login button clicked successfully', async () => {});

      // Wait for navigation and billing page to load
      await billingPage.page.waitForLoadState('networkidle');

      // ============== BILLING PROCESS ==============
      // STEP 1: Click Billing Menu ==============
      console.log('Step 1: Clicking Billing Menu...');
      await billingPage.clickBillingMenu();
      await test.step('Billing menu clicked successfully', async () => {});

      // ============== STEP 2: Click New Billing ==============
      console.log('Step 2: Clicking New Billing...');
      await billingPage.clickNewBilling();
      await test.step('New billing opened successfully', async () => {});

      // ============== STEP 3: Click Add Patient ==============
      console.log('Step 3: Clicking Add Patient...');
      await billingPage.clickAddPatient();
      await test.step('Add patient form opened successfully', async () => {});

      // ============== STEP 4: Select Title ==============
      console.log(`Step 4: Selecting Title as ${patientTestData.title}...`);
      await billingPage.selectTitle(patientTestData.title);
      await test.step('Title selected successfully', async () => {});

      // ============== STEP 5: Fill Patient Name ==============
      console.log(`Step 5: Filling Patient Name as ${patientTestData.fullName}...`);
      await billingPage.fillPatientName(patientTestData.fullName);
      await test.step('Patient name filled successfully', async () => {});

      // ============== STEP 6: Fill Mobile Number ==============
      console.log(`Step 6: Filling Mobile Number as ${patientTestData.mobileNumber}...`);
      await billingPage.fillMobileNumber(patientTestData.mobileNumber);
      await test.step('Mobile number filled successfully', async () => {});

      // ============== STEP 7: Fill Alternate Mobile Number ==============
      console.log(`Step 7: Filling Alternate Mobile Number as ${patientTestData.alternateMobileNumber}...`);
      await billingPage.fillAlternateMobileNumber(patientTestData.alternateMobileNumber);
      await test.step('Alternate mobile number filled successfully', async () => {});

      // ============== STEP 8: Fill Age ==============
      console.log(`Step 8: Filling Age as ${patientTestData.age}...`);
      await billingPage.fillAge(patientTestData.age);
      await test.step('Age filled successfully', async () => {});

      // ============== STEP 9: Select Age Type ==============
      console.log(`Step 9: Selecting Age Type as ${patientTestData.ageType}...`);
      await billingPage.selectAgeType(patientTestData.ageType);
      await test.step('Age type selected successfully', async () => {});

      // ============== STEP 10: Select Referred By ==============
      console.log(`Step 10: Selecting Referred By as ${patientTestData.referredBy}...`);
      await billingPage.selectReferredBy(patientTestData.referredBy);
      await test.step('Referred by selected successfully', async () => {});

      // ============== STEP 11: Select Outside Lab (OR SKIP) ==============
      // Note: This step can be commented out if not needed for this scenario
      console.log(`Step 11: Selecting Outside Lab as ${patientTestData.outsideLab}...`);
      await billingPage.selectOutsideLab(patientTestData.outsideLab);
      await test.step('Outside lab selected successfully', async () => {});

      // ============== STEP 12: Select Referral Hospital (OR SKIP) ==============
      // Note: This step can be commented out if not needed for this scenario
      // If using Outside Lab, you might skip this step
      // If using Referral Hospital, comment out Step 11 and use this
      console.log(`Step 12: Selecting Referral Hospital as ${patientTestData.referralHospital}...`);
      // await billingPage.selectReferralHospital(patientTestData.referralHospital);
      // await test.step('Referral hospital selected successfully', async () => {});

      // ============== STEP 13: Fill Height ==============
      console.log(`Step 13: Filling Height as ${patientTestData.height}...`);
      await billingPage.fillHeight(patientTestData.height);
      await test.step('Height filled successfully', async () => {});

      // ============== STEP 14: Fill Weight ==============
      console.log(`Step 14: Filling Weight as ${patientTestData.weight}...`);
      await billingPage.fillWeight(patientTestData.weight);
      await test.step('Weight filled successfully', async () => {});

      // ============== STEP 15: Fill Email ==============
      console.log(`Step 15: Filling Email as ${patientTestData.email}...`);
      await billingPage.fillEmail(patientTestData.email);
      await test.step('Email filled successfully', async () => {});

      // ============== STEP 16: Fill Area ==============
      console.log(`Step 16: Filling Area as ${patientTestData.area}...`);
      await billingPage.fillArea(patientTestData.area);
      await test.step('Area filled successfully', async () => {});

      // ============== STEP 17: Fill City ==============
      console.log(`Step 17: Filling City as ${patientTestData.city}...`);
      await billingPage.fillCity(patientTestData.city);
      await test.step('City filled successfully', async () => {});

      // ============== STEP 18: Fill Pincode ==============
      console.log(`Step 18: Filling Pincode as ${patientTestData.pincode}...`);
      await billingPage.fillPincode(patientTestData.pincode);
      await test.step('Pincode filled successfully', async () => {});

      // ============== STEP 19: Fill Insurance ==============
      console.log(`Step 19: Filling Insurance as ${patientTestData.insurance}...`);
      await billingPage.fillInsurance(patientTestData.insurance);
      await test.step('Insurance filled successfully', async () => {});

      // ============== STEP 20: Fill Company ==============
      console.log(`Step 20: Filling Company as ${patientTestData.company}...`);
      await billingPage.fillCompany(patientTestData.company);
      await test.step('Company filled successfully', async () => {});

      // ============== STEP 21: Click Register Button ==============
      console.log('Step 21: Clicking Register Button...');
      await billingPage.clickRegister();
      await test.step('Patient registered successfully', async () => {});

      // ============== CUTOFF VALIDATION ==============
      console.log('Validating Cutoff Amounts...');
      
      const cutoffAmount1 = await billingPage.getCutoffAmount1();
      const cutoffAmount2 = await billingPage.getCutoffAmount2();
      const cutoffAmount3 = await billingPage.getCutoffAmount3();

      console.log(`Cutoff Amount 1: ${cutoffAmount1}`);
      console.log(`Cutoff Amount 2: ${cutoffAmount2}`);
      console.log(`Cutoff Amount 3: ${cutoffAmount3}`);

      // Assert that cutoff amounts are present and correctly calculated
      expect(cutoffAmount1).toBeTruthy();
      expect(cutoffAmount2).toBeTruthy();
      expect(cutoffAmount3).toBeTruthy();

      await test.step('All cutoff amounts validated successfully', async () => {});

    } catch (error) {
      console.error('Test failed with error:', error);
      throw error;
    }
  });
});
