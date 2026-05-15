import { expect, test } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const SCREENSHOT_DIR = 'tests/e2e/evidence';
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

test('renders the launchpad cards and captures a screenshot', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Angular Golden Template' }),
  ).toBeVisible();
  await expect(
    page.getByText('Standardized Clean Architecture & Tailwind CSS'),
  ).toBeVisible();

  await expect(page.getByText('Atomic Components')).toBeVisible();
  await expect(page.getByText('Testing & DevOps')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Get Started' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Learn More' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Delete Data' })).toBeVisible();

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '01_launchpad.png'),
    fullPage: true,
  });
});
