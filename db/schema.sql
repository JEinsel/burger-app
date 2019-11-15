CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
buger_name VARCHAR(80) NOT NULL,
devoured BOOL NOT NULL,
PRIMARY KEY (id)
);

