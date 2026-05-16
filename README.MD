# angular-template

> Production-ready Angular + TypeScript template with testable domain logic and predictable structure.

## Stack

- Angular 19 + TypeScript
- Jasmine + Karma
- ESLint + Prettier
- VS Code debug profiles

## Commands

- `make install` — install dependencies
- `make run` — start dev server
- `make build` — build for production
- `make test` — run all tests
- `make test-unit` — run unit tests
- `make test-e2e` — run browser e2e tests
- `make lint` — lint the code
- `make format` — format the code
- `make clean` — clean build artifacts

## Project Structure

```text
.
├── src/
│   ├── app/
│   │   ├── domain/          # pure business rules
│   │   ├── app.component.ts # root component
│   │   └── **/*.spec.ts     # domain and component tests
│   ├── index.html
│   └── styles.css
├── scripts/
│   ├── ubuntu/
│   └── windows/
└── Makefile
```

## Architecture

- `src/app/domain`: pure business rules, framework-agnostic
- `src/app`: component and presentation layer
- `src/**/*.spec.ts`: domain and component tests

Applies Fowler-style separation by isolating domain behavior from UI composition.

## Functional Contract

- Task Board: add, toggle, and remove tasks.
- Business rules live in the domain module.
- UI concerns stay in framework-specific components.

## Quality Gates

- Lint must pass.
- Typecheck must pass.
- Unit tests must pass.
- Component behavior tests must pass.

## License

MIT — see [LICENSE](LICENSE).
