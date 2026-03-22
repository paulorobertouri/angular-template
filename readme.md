# angular-template

Modern Angular + TypeScript template with testable domain logic and predictable structure.

## Stack

- Angular 19 + TypeScript
- Jasmine + Karma
- ESLint + Prettier
- VS Code debug profiles

## Commands

- `npm install`
- `npm run start`
- `npm run test`
- `npm run lint`
- `npm run format`

## Architecture

- `src/app/domain`: pure business rules
- `src/app`: component and presentation
- `src/**/*.spec.ts`: domain and component tests

This template applies Fowler-style separation by isolating domain behavior from UI composition.

## Shared Template Contract

All frontend templates in this repository follow the same functional contract and quality gates.

### Functional Contract

- Deliver the same Task Board behavior:
	- Add a task from input
	- Toggle completion state
	- Remove a task
- Keep business rules in a pure domain module.
- Keep UI concerns in framework-specific components.

### Quality Gates

- Lint must pass.
- Typecheck must pass.
- Unit tests must pass.
- Component behavior tests must pass.

### Architecture Contract

- Domain logic: pure functions, no framework dependencies.
- Presentation layer: state wiring, rendering, and event orchestration.
- Tests: domain tests + UI behavior tests.

This is the common baseline across React, Preact, WXT React, and Angular templates.
