const { test, expect } = require('@playwright/test');

test('Verify user can calculate the shipment quote from Malaysia to India', async ({ page }) => {
  // Step 1: Navigate to the rate calculator page
  await page.goto('https://pos.com.my/send/ratecalculator');

  // Step 2: Enter “35600” as postcode in "From"
  await page.getByPlaceholder(/Postcode/i).nth(0).fill('35600');

  // Step 3: Select “India” as “To” country,
  await page.getByRole('combobox', { name: 'country' }).fill('India');
  await page.getByRole('option', { name: 'India - IN' }).click();

  // Step 4: Enter 1 as the Weight
  await page.getByLabel(/eg. 0.1kg/i).click();
  await page.getByLabel(/eg. 0.1kg/i).fill('1');

  // Press Calculate (assuming there is a button with text or role)
  await page.getByText('Calculate').click();

  // Step 5: Verify that multiple shipment options are displayed
  const shipmentOptions = await page.getByText('Service Type');
  await expect(shipmentOptions).toHaveCount(3);
});
