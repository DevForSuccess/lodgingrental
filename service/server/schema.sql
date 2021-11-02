DROP DATABASE airbnb;
CREATE DATABASE airbnb;
USE airbnb;

CREATE TABLE `listing_header` (
  `id` INT NOT NULL,
  `listingName` VARCHAR(100) NOT NULL,
  `listingDescription` TEXT NOT NULL,
  `hostId` INT NULL,
  `review` INT NULL,
  `rating` DECIMAL(5,2) NULL,
  `address1` VARCHAR(100) NOT NULL,
  `address2` VARCHAR(100) NULL,
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(100) NOT NULL,
  `zipCode` VARCHAR(5) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `accomodates` INT NULL,
  `bathrooms` VARCHAR(100) NULL,
  `bedrooms` INT NULL,
  `beds` INT NULL,
  PRIMARY KEY (`id`)
);