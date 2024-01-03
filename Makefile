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

e2e:
	@yarn e2e
.PHONY: e2e

test:
	@yarn test
.PHONY: test

prod:
	@docker kill react-genesis || true
	./scripts/build-docker-image.sh
	./scripts/start-prod.sh
.PHONY: prod

