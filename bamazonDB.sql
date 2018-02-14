DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE Products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (30),
    department_name VARCHAR (30),
    price DECIMAL (13,4),
    stock INTEGER (10),
    PRIMARY KEY (id)

);

INSERT INTO PRODUCTS (product_name, department_name, price, stock)
VALUES 
	('Health Potion', 'potions', 49.99, 10),
    ('Mana Potion', 'potions', 49.99, 15),
    ('Strength Potion', 'potions', 99.99, 5),
    ('Bow of Fear', 'weapons', 250.00, 1),
    ('Sword of Boundless Kindness','weapons', 99.99, 2),
    ('War Ax of Gorgoth the Mighty','weapons', 999.99, 1),
    ('Iron Mace', 'weapons', 29.99,  17),
    ('Steel Short Sword', 'weapons', 39.99, 8),
    ('Orcish Helm', 'armor', 199.99, 2),
    ('Balin\'s Mithril Plate Rage', 'armor', 999.99, 1),
    ('Amulet of JavaScript', 'jewelry', 199.99, 2);
    
SELECT * FROM Products
    
    
    
		


    