# create databases
CREATE DATABASE IF NOT EXISTS `mysqldb`;
CREATE DATABASE IF NOT EXISTS `mysqldb_test`;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';

CREATE USER 'admin'@'%' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';