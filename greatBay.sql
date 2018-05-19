DROP DATABASE IF EXISTS greatBay;

CREATE DATABASE greatBay;

USE greatBay;

CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(30) NOT NULL,
  description_Item  VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NULL,
  bid DECIMAL(10,2) NULL, 
  PRIMARY KEY (id)
);

-- INSERT INTO bay_items (item, description_Item, price, bid)
-- VALUES ("Iphone", "Iphone 6s+", 300.00);
