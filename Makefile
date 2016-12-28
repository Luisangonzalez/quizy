.PHONY: install clean run console mongoimport mongod quizy_up mongo_up build cache_clean backup

# Important
PROJECT_NAME=quizy
DB_NAME=quizy_db
DOCKER_COMPOSE_WEB=docker-compose -p ${PROJECT_NAME} -f environment/docker-compose.yml
DOCKER_COMPOSE_DB=docker-compose -p ${DB_NAME} -f environment/docker-compose.yml
DOCKER_COMPOSE_RUN_WEB=${DOCKER_COMPOSE_WEB} run web
DOCKER_COMPOSE_RUN_DB=${DOCKER_COMPOSE_DB} run db

default: build

build:
		${DOCKER_COMPOSE_WEB} build

console: build
		${DOCKER_COMPOSE_RUN_WEB} npm run console

execute:
		${DOCKER_COMPOSE_WEB} run --rm --service-ports web /bin/bash -ci '/code/environment/execute.sh;'

cache_clean:
		${DOCKER_COMPOSE_RUN_WEB} npm cache clean

install: cache_clean build
		${DOCKER_COMPOSE_RUN_WEB} npm install

up:
		${DOCKER_COMPOSE_WEB} run --rm --service-ports web /bin/bash

mongorestore: build
		${DOCKER_COMPOSE_WEB} run --rm --service-ports web mongoimport -h db -d manolo -c benito /tmp/restore/restore.json

mongodump: build
		${DOCKER_COMPOSE_WEB} run --rm --service-ports web mongodump -h db -o /tmp/dump

mongod:
		${DOCKER_COMPOSE_RUN_DB}

mongo_shell:
		${DOCKER_COMPOSE_DB} run --rm --service-ports db /bin/bash

backup:
	rsync -av --no-owner --no-group  ${HOME}/.data /mnt/backup/data
