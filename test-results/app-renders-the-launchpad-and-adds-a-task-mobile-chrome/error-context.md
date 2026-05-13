# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.ts >> renders the launchpad and adds a task
- Location: tests/e2e/app.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Starter Launchpad' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Starter Launchpad' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - banner [ref=e5]:
    - heading "Angular Golden Template" [level=1] [ref=e6]
    - paragraph [ref=e7]: Standardized Clean Architecture & Tailwind CSS
  - generic [ref=e8]:
    - generic "Atomic Components" [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11]:
          - paragraph [ref=e12]: Golden Standard
          - heading "Atomic Components" [level=2] [ref=e13]
        - paragraph [ref=e14]: This template features standalone components, Tailwind CSS integration, and a unified visual system.
        - generic [ref=e15]:
          - button "Get Started" [ref=e17]
          - button "Learn More" [ref=e19]
    - generic "Testing & DevOps" [ref=e20]:
      - generic [ref=e21]:
        - generic [ref=e22]:
          - paragraph [ref=e23]: Production Ready
          - heading "Testing & DevOps" [level=2] [ref=e24]
        - paragraph [ref=e25]: Standardized Makefile, GitHub Actions CI, Pre-commit hooks, and Playwright E2E coverage.
        - button "Delete Data" [ref=e27]
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | test('renders the launchpad and adds a task', async ({ page }) => {
  4  |   await page.goto('/');
  5  | 
  6  |   await expect(
  7  |     page.getByRole('heading', { name: 'Starter Launchpad' }),
> 8  |   ).toBeVisible();
     |     ^ Error: expect(locator).toBeVisible() failed
  9  |   await expect(page.getByRole('heading', { name: 'Task Board' })).toBeVisible();
  10 | 
  11 |   await page.getByLabel('New task').fill('Verify the release checklist');
  12 |   await page.getByRole('button', { name: 'Add' }).click();
  13 | 
  14 |   await expect(page.getByText('Verify the release checklist')).toBeVisible();
  15 |   await expect(page.getByText('1 of 3 tasks done')).toBeVisible();
  16 | });
  17 | 
```