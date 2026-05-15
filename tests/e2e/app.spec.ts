import { expect, test } from '@playwright/test';

test('renders the launchpad cards', async ({ page }) => {
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
});
