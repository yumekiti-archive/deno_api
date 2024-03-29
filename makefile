# UID := $(shell id -u)
# GID := $(shell id -g)
# USER := $(UID):$(GID)
# dc := user=$(USER) docker-compose -f ./docker/docker-compose.yml
dc := docker-compose -f ./docker/docker-compose.yml

.PHONY: up
up:
	$(dc) up -d --build

.PHONY: down
down:
	$(dc) down

.PHONY: restart
restart:
	$(dc) restart

.PHONY: rm
rm:
	$(dc) down --rmi all

.PHONY: logs
logs:
	$(dc) logs -f

.PHONY: deno
deno:
	$(dc) exec deno /bin/sh
