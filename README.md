# take-home-test Automation Test

This project tests the shipment quote functionality on [Pos Malaysia](https://pos.com.my/send/ratecalculator) using Playwright.

## Test Case

- From: Malaysia (`35600`)
- To: India (no postcode)
- Weight: `1`
- Expectation: Multiple shipping options are shown

## Run the Test

```bash
npx playwright install
npx playwright test
