.PHONY: help install build run test test-unit test-e2e lint format clean

help:
	@echo "Available commands:"
	@echo "  install      Install dependencies"
	@echo "  build        Build the application"
	@echo "  run          Start the development server"
	@echo "  test         Run all tests"
	@echo "  test-unit    Run unit tests"
	@echo "  test-e2e     Run E2E tests with Playwright"
	@echo "  lint         Lint the code"
	@echo "  format       Format the code"
	@echo "  clean        Clean build artifacts"

install:
	pnpm install

build:
	pnpm run build

run:
	pnpm start

start:
	bash ./scripts/ubuntu/start.sh

stop:
	bash ./scripts/ubuntu/stop.sh

test:
	pnpm test

test-unit:
	pnpm test

test-e2e:
	pnpm exec playwright test

lint:
	pnpm run lint

format:
	pnpm exec prettier -w .

clean:
	rm -rf dist
