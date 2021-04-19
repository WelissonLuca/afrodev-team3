#/bin/bash

eval "docker run -d --name afrodev-db -p 3306:3306 -v /$(pwd)/docker/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d -e MYSQL_ROOT_PASSWORD=mysql-12345 mysql:5.7"

# Macbook

# docker run -d --name afrodev-db -p 3306:3306 -v /${pwd}/docker/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d -e MYSQL_ROOT_PASSWORD=mysql-12345 mysql:5.7
