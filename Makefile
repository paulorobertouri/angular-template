SHELL := /bin/bash

.PHONY: install install-dev build test format start

install:
	bash ./scripts/ubuntu/install.sh

install-dev:
	bash ./scripts/ubuntu/install-dev.sh

build:
	bash ./scripts/ubuntu/build.sh

test:
	bash ./scripts/ubuntu/test.sh

format:
	bash ./scripts/ubuntu/format.sh

start:
	pnpm start
