DROP DATABASE airbnb;
CREATE DATABASE airbnb;
USE airbnb;

CREATE TABLE `listing` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `hostName` VARCHAR(100) NOT NULL,
  `hostRating` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `amenity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `imageUrl` VARCHAR(100),
  PRIMARY KEY (`id`)
);

CREATE TABLE `property_amenity` (
  `propId` INT NOT NULL,
  `amenityId` INT NOT NULL,
  PRIMARY KEY (`propId`, `amenityId`),
  CONSTRAINT `fk_property_amenity_property` FOREIGN KEY (`propId`) REFERENCES `property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_property_amenity_amenity` FOREIGN KEY (`amenityId`) REFERENCES `amenity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `desc` VARCHAR(100) NOT NULL,
  `imageUrl` VARCHAR(100),
  PRIMARY KEY(`id`)
);

CREATE TABLE `property_room` (
  `propId` INT NOT NULL,
  `roomId` INT NOT NULL,
  PRIMARY KEY (`propId`, `roomId`),
  CONSTRAINT `fk_property_room_property` FOREIGN KEY (`propId`) REFERENCES `property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_property_room_room` FOREIGN KEY (`roomId`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `specs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100),
  `desc` VARCHAR(100),
  `imageUrl` VARCHAR(100),
  PRIMARY KEY(`id`)
);

CREATE TABLE `property_specs` (
  `propId` INT NOT NULL,
  `specsId` INT NOT NULL,
  PRIMARY KEY (`propId`, `specsId`),
  CONSTRAINT `fk_property_specs_property` FOREIGN KEY (`propId`) REFERENCES `property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_property_specs_room` FOREIGN KEY (`specsId`) REFERENCES `specs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);