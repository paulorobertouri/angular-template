import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    channel: 'chrome',
    baseURL: 'http://127.0.0.1:4200',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'pnpm exec ng serve --host 127.0.0.1 --port 4200',
    url: 'http://127.0.0.1:4200',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { channel: 'chrome', ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { channel: 'chrome', ...devices['Pixel 5'] },
    },
  ],
});
