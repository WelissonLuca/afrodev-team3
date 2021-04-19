CREATE TABLE `mysqldb`.`ongs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `description` varchar(4000) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
)