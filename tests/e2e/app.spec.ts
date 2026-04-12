import { expect, test } from '@playwright/test';

test('renders the launchpad and adds a task', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Starter Launchpad' }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Task Board' })).toBeVisible();

  await page.getByLabel('New task').fill('Verify the release checklist');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Verify the release checklist')).toBeVisible();
  await expect(page.getByText('1 of 3 tasks done')).toBeVisible();
});
