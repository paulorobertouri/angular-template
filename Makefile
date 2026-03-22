SHELL := /bin/bash

.PHONY: install install-dev build test format start

install:
	./scripts/ubuntu/install.sh

install-dev:
	./scripts/ubuntu/install-dev.sh

build:
	./scripts/ubuntu/build.sh

test:
	./scripts/ubuntu/test.sh

format:
	./scripts/ubuntu/format.sh

start:
	npm run start
