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


test:
	@yarn test
.PHONY: test
