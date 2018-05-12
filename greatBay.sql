DROP DATABASE IF EXISTS greatBay;

CREATE DATABASE greatBay;

USE greatBay;

CREATE TABLE bay_items (
  item VARCHAR(30) NOT NULL,
  description_Item  VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NULL
);

INSERT INTO bay_items (item, description_Item, price)
VALUES ("Iphone", "Iphone 6s+", 300);
