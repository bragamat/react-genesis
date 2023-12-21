.DEFAULT_GOAL := dev

build: deps
	@yarn build
.PHONY: build

dev: deps
	@yarn dev
.PHONY: dev

deps:
	@yarn
.PHONY: deps

lint.fix:
	@yarn lint --fix
.PHONY: lint

lint:
	@yarn lint
.PHONY: lint

story:
	@yarn storybook
.PHONY: story

graphql:
	@yarn generate
.PHONY: graphql

e2e:
	@yarn e2e
.PHONY: e2e

test:
	@yarn test
.PHONY: test
