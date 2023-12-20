.DEFAULT_GOAL := dev

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

test:
	@yarn test
.PHONY: test
