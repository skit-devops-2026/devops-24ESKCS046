.PHONY: install test build run docker-build docker-up

install:
	@echo "No external dependencies required"

test:
	node --test tests/script.test.js

build:
	@echo "Static frontend - no build step required"

run:
	@echo "Open frontend/index.html in a browser"

# Needed from M4 onwards
docker-build:
	@echo "Docker build will be configured in a later milestone"

docker-up:
	docker compose up --build